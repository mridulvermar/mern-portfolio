import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import { 
  Wrench, 
  Code, 
  Layout, 
  Server, 
  Database, 
  BrainCircuit, 
  Cloud,
  Sparkles,
  Zap,
  Check
} from "lucide-react";

export default function Skills() {
  const { skills } = portfolioData;

  const categoryMeta = {
    "Programming Languages": {
      icon: Code,
      accent: "text-blue-500",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
      desc: "Core languages for algorithmic problem solving and multi-paradigm software development."
    },
    "Frontend Development": {
      icon: Layout,
      accent: "text-indigo-500",
      bg: "bg-indigo-500/10",
      border: "border-indigo-500/20",
      desc: "Responsive, accessible, and fast client-side applications with modern design systems."
    },
    "Backend Development": {
      icon: Server,
      accent: "text-violet-500",
      bg: "bg-violet-500/10",
      border: "border-violet-500/20",
      desc: "Robust RESTful microservices, WebSocket channels, and token-based authentication."
    },
    "Databases": {
      icon: Database,
      accent: "text-emerald-500",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
      desc: "Document modeling, compound indexing, query optimization, and relational principles."
    },
    "AI and Machine Learning": {
      icon: BrainCircuit,
      accent: "text-cyan-500",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20",
      desc: "Deep learning models, CNN computer vision, transfer learning, and inference pipelines."
    },
    "Tools and Platforms": {
      icon: Cloud,
      accent: "text-rose-500",
      bg: "bg-rose-500/10",
      border: "border-rose-500/20",
      desc: "Containerization, AWS cloud architecture, CI/CD automated deployment pipelines."
    }
  };

  return (
    <section className="py-20 md:py-28 relative" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>Technical Skills</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Specialized Tech Stack &{" "}
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 bg-clip-text text-transparent">
              Tooling
            </span>
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            A comprehensive overview of the programming languages, frameworks, deep learning libraries, and infrastructure tools I leverage daily.
          </p>
        </div>

        {/* 6 Bento Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items], idx) => {
            const meta = categoryMeta[category] || {
              icon: Zap,
              accent: "text-blue-500",
              bg: "bg-blue-500/10",
              border: "border-blue-500/20",
              desc: "Technical competencies"
            };
            const Icon = meta.icon;

            return (
              <motion.div
                key={category}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bento-card p-6 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-xl ${meta.bg} ${meta.border} border flex items-center justify-center ${meta.accent}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-base text-slate-900 dark:text-white">
                        {category}
                      </h3>
                    </div>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400">
                      {items.length} tools
                    </span>
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-5">
                    {meta.desc}
                  </p>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <div
                        key={skill.name}
                        className="group relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100/80 dark:bg-slate-900/80 hover:bg-white dark:hover:bg-slate-800 border border-slate-200/80 dark:border-white/10 hover:border-blue-500/40 dark:hover:border-violet-500/40 transition-all duration-200 cursor-default shadow-xs"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-violet-400 group-hover:scale-125 transition-transform" />
                        <span className="text-xs font-medium text-slate-800 dark:text-slate-200">
                          {skill.name}
                        </span>
                        <span className="text-[10px] text-slate-400 dark:text-slate-500 ml-1 font-mono">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-500">
                  <span>Verified Competencies</span>
                  <span className="text-emerald-500 font-medium flex items-center gap-1">
                    <Check className="w-3 h-3" /> Active
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
