import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sendChatMessage, fetchChatModel } from "../api";
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  RotateCcw, 
  ChevronDown, 
  Shield, 
  Mic, 
  MicOff, 
  Volume2, 
  VolumeX, 
  Languages, 
  Radio, 
  Square,
  Globe
} from "lucide-react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [activeModel, setActiveModel] = useState("gemini-3.8-flash");
  const [selectedLang, setSelectedLang] = useState("en-IN"); // "en-IN" | "hi-IN" | "ta-IN"
  const [isRecording, setIsRecording] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [autoSpeak, setAutoSpeak] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "👋 Hi! I'm **Mridul's AI Assistant**, powered by **gemini-3.8-flash** with **Voice & Multilingual support**.\n\nYou can speak or type in **English**, **हिन्दी (Hindi)**, or **தமிழ் (Tamil)** — I will reply in the same language!",
      lang: "en-IN"
    }
  ]);
  const [loading, setLoading] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(false);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const recognitionRef = useRef(null);
  const currentUtteranceRef = useRef(null);

  const languageOptions = [
    { code: "en-IN", label: "English", flag: "🇬🇧", tag: "EN" },
    { code: "hi-IN", label: "हिन्दी", flag: "🇮🇳", tag: "हिन्दी" },
    { code: "ta-IN", label: "தமிழ்", flag: "🇮🇳", tag: "தமிழ்" }
  ];

  const suggestedPrompts = [
    { text: "What are Mridul's core AI & ML skills?", lang: "en-IN" },
    { text: "மிருதுல் வர்மாவின் கல்வி மற்றும் சாதனைகள் என்ன?", lang: "ta-IN" },
    { text: "मृदुल के मुख्य AI प्रोजेक्ट्स क्या हैं?", lang: "hi-IN" },
    { text: "How can I contact or hire Mridul?", lang: "en-IN" }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // Check Web Speech API support
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      setSpeechSupported(true);
    }

    // Load active model from backend
    fetchChatModel().then((mod) => {
      if (mod) {
        setActiveModel(mod);
        setMessages((prev) => {
          if (prev.length === 1 && prev[0].role === "assistant") {
            return [
              {
                role: "assistant",
                text: `👋 Hi! I'm **Mridul's AI Assistant**, powered by **${mod}** with **Voice & Multilingual support**.\n\nYou can speak or type in **English**, **हिन्दी (Hindi)**, or **தமிழ் (Tamil)** — I will reply in the same language!`,
                lang: "en-IN"
              }
            ];
          }
          return prev;
        });
      }
    });

    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages]);

  // Voice output (TTS) helper supporting English, Hindi, and Tamil
  const speakText = (text, targetLang = selectedLang) => {
    if (!window.speechSynthesis) return;

    window.speechSynthesis.cancel(); // Stop any active speech

    // Clean markdown characters for smooth speech
    const cleanText = text
      .replace(/\*\*(.*?)\*\*/g, "$1")
      .replace(/`(.*?)`/g, "$1")
      .replace(/•/g, "")
      .replace(/#(.*?)/g, "$1")
      .replace(/\[(.*?)\]\(.*?\)/g, "$1")
      .replace(/\n+/g, ". ");

    const utterance = new SpeechSynthesisUtterance(cleanText);
    currentUtteranceRef.current = utterance;

    // Detect language if not explicitly provided
    let voiceLang = targetLang;
    if (/[\u0B80-\u0BFF]/.test(cleanText)) {
      voiceLang = "ta-IN";
    } else if (/[\u0900-\u097F]/.test(cleanText)) {
      voiceLang = "hi-IN";
    }

    utterance.lang = voiceLang;
    utterance.rate = 1.0;
    utterance.pitch = 1.0;

    // Try finding matching voice
    const voices = window.speechSynthesis.getVoices();
    const matchingVoice = voices.find((v) => v.lang.startsWith(voiceLang.slice(0, 2)));
    if (matchingVoice) {
      utterance.voice = matchingVoice;
    }

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  const stopSpeaking = () => {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  // Voice input (STT) helper
  const toggleRecording = () => {
    if (isRecording) {
      recognitionRef.current?.stop();
      setIsRecording(false);
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Speech recognition is not supported in this browser. Please use Chrome, Edge, or Safari.");
      return;
    }

    stopSpeaking();

    const recognition = new SpeechRecognition();
    recognition.lang = selectedLang;
    recognition.continuous = false;
    recognition.interimResults = true;
    recognitionRef.current = recognition;

    recognition.onstart = () => {
      setIsRecording(true);
    };

    recognition.onresult = (event) => {
      let finalTranscript = "";
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript;
        } else {
          setInput(event.results[i][0].transcript);
        }
      }

      if (finalTranscript) {
        setInput(finalTranscript);
        setIsRecording(false);
        // Automatically send voice query after a brief pause
        handleSend(finalTranscript, selectedLang);
      }
    };

    recognition.onerror = (event) => {
      console.warn("Speech recognition error:", event.error);
      setIsRecording(false);
    };

    recognition.onend = () => {
      setIsRecording(false);
    };

    try {
      recognition.start();
    } catch (e) {
      console.warn("Recognition start failed:", e);
      setIsRecording(false);
    }
  };

  const handleSend = async (messageText, langOverride) => {
    const textToSend = typeof messageText === "string" ? messageText : input;
    if (!textToSend.trim() || loading) return;

    stopSpeaking();

    const activeLanguage = langOverride || selectedLang;
    const userMessage = { role: "user", text: textToSend.trim(), lang: activeLanguage };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    const historyPayload = newMessages.map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      text: m.text
    }));

    const response = await sendChatMessage(textToSend.trim(), historyPayload, activeLanguage);
    setLoading(false);

    if (response.model) {
      setActiveModel(response.model);
    }

    const replyLang = response.language || activeLanguage;
    const assistantMessage = {
      role: "assistant",
      text: response.reply,
      isFallback: response.isFallback,
      lang: replyLang
    };

    setMessages((prev) => [...prev, assistantMessage]);

    // If auto-speak is enabled, speak the answer
    if (autoSpeak) {
      speakText(response.reply, replyLang);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleReset = () => {
    stopSpeaking();
    setMessages([
      {
        role: "assistant",
        text: "Conversation cleared! You can speak or type in English, हिन्दी, or தமிழ்.",
        lang: selectedLang
      }
    ]);
  };

  const renderFormattedText = (text) => {
    return text.split("\n").map((line, lineIdx) => {
      const parts = line.split(/(\*\*.*?\*\*)/g);
      return (
        <p key={lineIdx} className={`${line.startsWith("•") || line.startsWith("-") ? "pl-2 my-0.5" : "my-1"} leading-relaxed`}>
          {parts.map((part, partIdx) => {
            if (part.startsWith("**") && part.endsWith("**")) {
              return (
                <strong key={partIdx} className="font-bold text-slate-900 dark:text-white">
                  {part.slice(2, -2)}
                </strong>
              );
            }
            if (part.startsWith("`") && part.endsWith("`")) {
              return (
                <code key={partIdx} className="px-1.5 py-0.5 rounded bg-slate-200/80 dark:bg-white/10 font-mono text-xs">
                  {part.slice(1, -1)}
                </code>
              );
            }
            return part;
          })}
        </p>
      );
    });
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <AnimatePresence>
          {!isOpen && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(true)}
              className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white shadow-xl shadow-violet-500/30 hover:shadow-violet-500/40 transition-all cursor-pointer border border-white/20"
              aria-label="Open AI Assistant"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
              </span>

              <div className="flex items-center gap-1.5">
                <Bot className="w-5 h-5 text-white animate-pulse" />
                <span className="text-xs font-bold tracking-wide">
                  Ask Mridul's AI
                </span>
              </div>

              <span className="px-1.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider rounded-full bg-white/20 backdrop-blur-xs flex items-center gap-1">
                <Mic className="w-2.5 h-2.5" /> Voice
              </span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Floating Bento Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-6 right-4 sm:right-6 z-50 w-[92vw] sm:w-[440px] h-[610px] max-h-[88vh] flex flex-col rounded-3xl bg-white/95 dark:bg-[#0c1017]/95 border border-slate-200/90 dark:border-white/10 shadow-2xl backdrop-blur-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="p-3.5 px-4 bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-violet-600/10 border-b border-slate-200/80 dark:border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="relative w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-violet-600 flex items-center justify-center text-white shadow-md shadow-violet-500/20">
                  <Bot className="w-4 h-4" />
                  <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 border border-white dark:border-[#0c1017]" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white leading-tight">
                      Mridul's AI Assistant
                    </h3>
                    <Sparkles className="w-3 h-3 text-violet-500" />
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-slate-500 dark:text-slate-400">
                    <span className="text-[10px] font-mono font-semibold px-1 py-0.2 rounded bg-violet-500/10 text-violet-600 dark:text-violet-400">
                      {activeModel}
                    </span>
                    <span>•</span>
                    <span className="text-emerald-500 font-medium">Multilingual Voice</span>
                  </div>
                </div>
              </div>

              {/* Header Controls */}
              <div className="flex items-center gap-1">
                {/* Auto-Speak Toggle */}
                <button
                  onClick={() => {
                    if (isSpeaking) stopSpeaking();
                    setAutoSpeak(!autoSpeak);
                  }}
                  className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                    autoSpeak
                      ? "text-blue-600 bg-blue-500/15"
                      : "text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-white/10"
                  }`}
                  title={autoSpeak ? "Voice replies ON (Click to mute)" : "Voice replies OFF (Click to unmute)"}
                  aria-label="Toggle voice output"
                >
                  {autoSpeak ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                </button>

                {/* Reset Conversation */}
                <button
                  onClick={handleReset}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-white/10 transition-colors cursor-pointer"
                  title="Clear conversation"
                  aria-label="Clear conversation"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>

                {/* Minimize */}
                <button
                  onClick={() => {
                    stopSpeaking();
                    setIsOpen(false);
                  }}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-white/10 transition-colors cursor-pointer"
                  title="Minimize chat"
                  aria-label="Minimize chat"
                >
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Language Selection & Voice Status Bar */}
            <div className="px-3.5 py-1.5 bg-slate-100/70 dark:bg-white/5 border-b border-slate-200/60 dark:border-white/5 flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5 text-[11px] text-slate-600 dark:text-slate-300">
                <Globe className="w-3.5 h-3.5 text-blue-500" />
                <span className="font-semibold text-[10px] uppercase text-slate-400">Speak Language:</span>
                <div className="flex items-center gap-1">
                  {languageOptions.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setSelectedLang(lang.code);
                        if (isRecording) {
                          recognitionRef.current?.stop();
                          setIsRecording(false);
                        }
                      }}
                      className={`px-2 py-0.5 rounded-md text-[10px] font-bold transition-all cursor-pointer ${
                        selectedLang === lang.code
                          ? "bg-blue-600 text-white shadow-xs"
                          : "bg-white/70 dark:bg-white/10 text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-white/20"
                      }`}
                    >
                      {lang.tag}
                    </button>
                  ))}
                </div>
              </div>

              {isSpeaking && (
                <button
                  onClick={stopSpeaking}
                  className="flex items-center gap-1 text-[10px] font-bold text-rose-500 bg-rose-500/10 px-2 py-0.5 rounded-full hover:bg-rose-500/20 cursor-pointer animate-pulse"
                >
                  <Square className="w-2.5 h-2.5 fill-current" />
                  <span>Stop Voice</span>
                </button>
              )}
            </div>

            {/* Live Recording Telemetry Banner */}
            {isRecording && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="px-4 py-2 bg-rose-500/10 border-b border-rose-500/20 flex items-center justify-between text-xs text-rose-600 dark:text-rose-400"
              >
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500"></span>
                  </span>
                  <span className="font-semibold text-[11px]">
                    Listening in {languageOptions.find((l) => l.code === selectedLang)?.label}... Speak now
                  </span>
                </div>
                <button
                  onClick={toggleRecording}
                  className="text-[10px] font-bold underline cursor-pointer"
                >
                  Cancel
                </button>
              </motion.div>
            )}

            {/* Messages Scroll Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-xs sm:text-sm">
              {messages.map((msg, index) => {
                const isUser = msg.role === "user";
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex items-start gap-2.5 ${isUser ? "flex-row-reverse" : "flex-row"}`}
                  >
                    {!isUser && (
                      <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-blue-600 to-violet-600 flex items-center justify-center text-white shrink-0 mt-0.5 shadow-xs">
                        <Bot className="w-4 h-4" />
                      </div>
                    )}

                    <div className="max-w-[84%] flex flex-col items-start gap-1">
                      <div
                        className={`p-3.5 rounded-2xl ${
                          isUser
                            ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-tr-xs shadow-md shadow-violet-500/10"
                            : "bg-slate-100 dark:bg-[#131926] text-slate-800 dark:text-slate-200 rounded-tl-xs border border-slate-200/70 dark:border-white/10 shadow-xs"
                        }`}
                      >
                        {renderFormattedText(msg.text)}
                      </div>

                      {/* Speaker button on assistant response */}
                      {!isUser && (
                        <div className="flex items-center gap-1.5 ml-1 text-[10px] text-slate-400">
                          <button
                            onClick={() => speakText(msg.text, msg.lang)}
                            className="inline-flex items-center gap-1 p-1 hover:text-blue-500 transition-colors cursor-pointer"
                            title="Listen to this response"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                            <span>Listen</span>
                          </button>
                          {msg.lang && (
                            <span className="text-[9px] uppercase px-1.5 py-0.2 rounded bg-slate-200/60 dark:bg-white/5 font-mono">
                              {msg.lang.slice(0, 2)}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}

              {/* Typing Indicator */}
              {loading && (
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-blue-600 to-violet-600 flex items-center justify-center text-white shrink-0 shadow-xs">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="p-3.5 rounded-2xl rounded-tl-xs bg-slate-100 dark:bg-[#131926] border border-slate-200/70 dark:border-white/10 text-slate-500 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-bounce" />
                    <span className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce [animation-delay:0.15s]" />
                    <span className="w-2 h-2 rounded-full bg-violet-500 animate-bounce [animation-delay:0.3s]" />
                    <span className="text-[11px] text-slate-400 ml-1.5 font-medium">Generating multilingual answer...</span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Starter Chips */}
            {messages.length <= 2 && (
              <div className="px-4 py-2 border-t border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-black/20">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-1.5">
                  Try Asking (English / हिन्दी / தமிழ்):
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {suggestedPrompts.map((prompt) => (
                    <button
                      key={prompt.text}
                      onClick={() => {
                        setSelectedLang(prompt.lang);
                        handleSend(prompt.text, prompt.lang);
                      }}
                      disabled={loading}
                      className="text-[11px] px-2.5 py-1 rounded-lg bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-violet-500/50 dark:hover:border-violet-500/50 hover:text-violet-600 dark:hover:text-violet-400 transition-colors text-left cursor-pointer"
                    >
                      {prompt.text}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Footer with Microphone */}
            <div className="p-3 px-4 bg-slate-50 dark:bg-[#0c1017] border-t border-slate-200/80 dark:border-white/10">
              <div className="flex items-center gap-2 bg-white dark:bg-[#131926] p-1.5 pl-3 rounded-xl border border-slate-200 dark:border-white/10 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20 transition-all">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={
                    selectedLang === "ta-IN"
                      ? "தமிழில் பேசுங்கள் அல்லது எழுதுங்கள்..."
                      : selectedLang === "hi-IN"
                      ? "हिन्दी में बोलें या टाइप करें..."
                      : "Speak or type in English, हिन्दी, தமிழ்..."
                  }
                  className="flex-1 bg-transparent text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none"
                  disabled={loading || isRecording}
                />

                {/* Microphone Button */}
                <button
                  type="button"
                  onClick={toggleRecording}
                  disabled={loading}
                  className={`p-2 rounded-lg transition-all cursor-pointer ${
                    isRecording
                      ? "bg-rose-500 text-white animate-pulse shadow-md shadow-rose-500/30"
                      : "text-slate-500 dark:text-slate-400 hover:text-blue-500 hover:bg-slate-100 dark:hover:bg-white/5"
                  }`}
                  title={
                    isRecording
                      ? "Stop listening"
                      : `Click to speak in ${languageOptions.find((l) => l.code === selectedLang)?.label}`
                  }
                  aria-label="Microphone"
                >
                  {isRecording ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                </button>

                {/* Send Button */}
                <button
                  onClick={() => handleSend()}
                  disabled={!input.trim() || loading || isRecording}
                  className="p-2 rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 text-white disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-95 transition-all cursor-pointer shadow-sm"
                  aria-label="Send message"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="mt-2 flex items-center justify-between text-[10px] text-slate-400 dark:text-slate-500 px-1">
                <span className="flex items-center gap-1">
                  <Shield className="w-2.5 h-2.5 text-emerald-500" />
                  <span>Speaks English, हिन्दी & தமிழ்</span>
                </span>
                <a
                  href="#contact"
                  onClick={() => {
                    stopSpeaking();
                    setIsOpen(false);
                  }}
                  className="text-blue-500 hover:underline font-semibold"
                >
                  Hire Mridul →
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
