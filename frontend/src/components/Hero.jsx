import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import { 
  ArrowRight, 
  FileDown, 
  Mail, 
  Sparkles, 
  Terminal, 
  BrainCircuit, 
  Layers,
  MapPin,
  ExternalLink
} from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from "./Icons";

export default function Hero() {
  const { name, designations, summary, links, location, availability } = portfolioData;
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % designations.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [designations.length]);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden" id="hero">
      {/* Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-blue-600/15 via-violet-600/20 to-purple-500/10 rounded-full blur-[110px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Hero Column (8 cols on lg) */}
          <motion.div 
            className="lg:col-span-8 flex flex-col items-start"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            {/* Status Pill */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium border border-blue-500/20 bg-blue-500/10 text-blue-600 dark:text-blue-400 mb-6 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{availability}</span>
              <span className="text-slate-400 dark:text-slate-600">•</span>
              <span className="inline-flex items-center gap-1 text-slate-600 dark:text-slate-400">
                <MapPin className="w-3 h-3 text-slate-400" />
                {location}
              </span>
            </motion.div>

            {/* Main Greeting & Name */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.08] mb-4">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 dark:from-blue-400 dark:via-indigo-300 dark:to-violet-400 bg-clip-text text-transparent">
                {name}
              </span>
            </h1>

            {/* Rotating Designation Cycler */}
            <div className="h-12 sm:h-14 mb-5 flex items-center overflow-hidden">
              <span className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-700 dark:text-slate-300 mr-2 sm:mr-3">
                I build
              </span>
              <AnimatePresence mode="wait">
                <motion.div
                  key={roleIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="text-xl sm:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-blue-600 dark:from-violet-400 dark:to-cyan-400 flex items-center gap-2"
                >
                  <span>{designations[roleIndex]}</span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Professional Summary Description */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed mb-8">
              {summary}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer group"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Mridul_Verma_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm border border-slate-300 dark:border-white/15 bg-white/70 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-800 dark:text-white backdrop-blur-md shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <FileDown className="w-4 h-4 text-violet-500" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-all cursor-pointer"
              >
                <span>Get In Touch</span>
              </a>
            </div>

            {/* Social Connector Links */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Connect:
              </span>
              
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 hover:text-blue-500 transition-all hover:scale-105"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 hover:text-blue-500 transition-all hover:scale-105"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={links.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode Profile"
                className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 hover:text-amber-500 transition-all hover:scale-105 font-mono text-xs font-bold"
                title="LeetCode (300+ Solved)"
              >
                <LeetcodeIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${links.email}`}
                aria-label="Send Email"
                className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 hover:text-violet-500 transition-all hover:scale-105"
                title="Email Me"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Bento Hero Visual Sidecar (4 cols on lg) */}
          <motion.div 
            className="lg:col-span-4 grid grid-cols-1 gap-4"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            {/* Quick Tech Snapshot Bento Card */}
            <div className="bento-card p-6 relative">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-500">
                    <BrainCircuit className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Core Architecture
                  </span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-500 dark:text-violet-400 font-semibold border border-violet-500/20">
                  Full-Stack + AI
                </span>
              </div>

              <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Production-Ready AI & Web Engineering
              </h2>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                Specialized in training custom deep learning models (CNNs/Transformers) and embedding them into high-performance MERN microservices.
              </p>

              <div className="flex flex-wrap gap-1.5">
                {["PyTorch", "React 18", "Node.js", "Express", "MongoDB", "AWS EKS", "Tailwind"].map((t) => (
                  <span
                    key={t}
                    className="text-[11px] px-2.5 py-1 rounded-md bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* LeetCode & DSA Bento Card */}
            <div className="bento-card p-5 flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-500">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl font-extrabold text-slate-900 dark:text-white leading-none mb-1">
                    300+ Problems
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    LeetCode Algorithmic Problem Solving
                  </div>
                </div>
              </div>
              <a
                href={links.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-amber-500 hover:text-amber-400 flex items-center gap-1"
              >
                Profile <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Academic Standout Bento Card */}
            <div className="bento-card p-5 flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-violet-500/15 border border-violet-500/30 flex items-center justify-center text-violet-500">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl font-extrabold text-slate-900 dark:text-white leading-none mb-1">
                    8.74 CGPA
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    B.E. CSE @ Bannari Amman Inst.
                  </div>
                </div>
              </div>
              <span className="text-[11px] font-bold px-2 py-1 rounded-md bg-violet-500/10 text-violet-500 dark:text-violet-400 border border-violet-500/20">
                2023–2027
              </span>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
