import React, { useState } from "react";
import { motion } from "framer-motion";
import { sendMessage } from "../api";
import { portfolioData } from "../data/portfolioData";
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  MapPin, 
  Clock, 
  Sparkles, 
  AlertCircle, 
  ExternalLink 
} from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from "./Icons";

export default function Contact() {
  const { links, location, availability } = portfolioData;

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: null, text: "" });
  const [copied, setCopied] = useState(false);

  const onChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status.type) setStatus({ type: null, text: "" });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ type: "error", text: "Please fill in all fields before sending." });
      return;
    }

    setLoading(true);
    setStatus({ type: "info", text: "Connecting to database..." });

    const res = await sendMessage(form);
    setLoading(false);

    if (res.success || res?.message?.includes("✅")) {
      setStatus({ 
        type: "success", 
        text: res.emailSent 
          ? "Thank you! Your message has been emailed to Mridul and recorded ✅" 
          : "Thank you! Your message has been received and saved ✅" 
      });
      setForm({ name: "", email: "", message: "" });
    } else if (res.isNetworkError) {
      setStatus({
        type: "warning",
        text: "Local MongoDB backend is not connected. You can email me directly below!",
        fallbackEmail: true
      });
    } else {
      setStatus({ 
        type: "error", 
        text: res?.message || "Something went wrong. Please try again or email directly." 
      });
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(links.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section className="py-20 md:py-28 relative" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20 mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Let's Build Something{" "}
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 bg-clip-text text-transparent">
              Exceptional
            </span>
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            Whether you have an inquiry about software engineering opportunities, AI architectures, or want to collaborate—feel free to drop a message.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Interactive Form Card (7 cols) */}
          <div className="md:col-span-7 bento-card p-7 sm:p-9 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Send a Message
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Integrated with MongoDB database backend
                  </p>
                </div>
                <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  API Active
                </span>
              </div>

              <form onSubmit={onSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    placeholder="e.g. John Doe"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    placeholder="e.g. john@example.com"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    placeholder="Tell me about your project, team, or opportunity..."
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-y placeholder:text-slate-400 dark:placeholder:text-slate-500"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:opacity-95 text-white shadow-lg shadow-violet-500/20 disabled:opacity-50 transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{loading ? "Sending Message..." : "Submit to MongoDB"}</span>
                  </button>
                </div>
              </form>

              {/* Status Alert Banner */}
              {status.type && (
                <div
                  className={`mt-4 p-3.5 rounded-xl text-xs flex items-start gap-2.5 ${
                    status.type === "success"
                      ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400"
                      : status.type === "warning"
                      ? "bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400"
                      : status.type === "info"
                      ? "bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400"
                      : "bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400"
                  }`}
                >
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p>{status.text}</p>
                    {status.fallbackEmail && (
                      <a
                        href={`mailto:${links.email}?subject=Inquiry from Portfolio&body=${encodeURIComponent(
                          `Hi Mridul,\n\nName: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
                        )}`}
                        className="inline-flex items-center gap-1 font-bold underline mt-1.5 text-blue-500 hover:text-blue-400"
                      >
                        Click here to send directly via Email Client <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 dark:border-white/10 text-[11px] text-slate-400 dark:text-slate-500">
              Form queries are processed by Express backend route <code>/api/contact</code> and stored in MongoDB Mongoose collections.
            </div>
          </div>

          {/* Right Info Bento Cards (5 cols) */}
          <div className="md:col-span-5 flex flex-col gap-6">
            
            {/* Direct Email Card with Quick Copy */}
            <div className="bento-card p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500">
                  Direct Inquiries
                </span>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-1 mb-2">
                  Have a quick question?
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                  Feel free to reach out directly through email. I respond promptly to engineering opportunities.
                </p>

                <div className="p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-between gap-2">
                  <span className="text-xs font-mono font-medium text-slate-800 dark:text-slate-200 truncate">
                    {links.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg bg-white dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/15 text-slate-700 dark:text-slate-200 transition-colors cursor-pointer shrink-0"
                    title="Copy Email Address"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/10">
                <a
                  href={`mailto:${links.email}`}
                  className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Open in default mail client</span>
                </a>
              </div>
            </div>

            {/* Profiles & Networks Card */}
            <div className="bento-card p-6">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500">
                Social Networks & Profiles
              </span>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-1 mb-4">
                Find Me Across Platforms
              </h4>

              <div className="space-y-2.5">
                {[
                  {
                    name: "GitHub",
                    url: links.github,
                    icon: GithubIcon,
                    detail: "mridulvermar",
                    color: "text-slate-800 dark:text-white"
                  },
                  {
                    name: "LinkedIn",
                    url: links.linkedin,
                    icon: LinkedinIcon,
                    detail: "in/mridul-verma-r",
                    color: "text-blue-500"
                  },
                  {
                    name: "LeetCode",
                    url: links.leetcode,
                    icon: LeetcodeIcon,
                    detail: "300+ Solved",
                    color: "text-amber-500"
                  }
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-xl bg-slate-100/70 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200/80 dark:border-white/10 transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className={`w-4 h-4 ${item.color}`} />
                        <div>
                          <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors">
                            {item.name}
                          </div>
                          <div className="text-[11px] text-slate-400">
                            {item.detail}
                          </div>
                        </div>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-500 transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Location & Status Card */}
            <div className="bento-card p-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">
                    {location}
                  </div>
                  <div className="text-[11px] text-emerald-500 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    {availability}
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
