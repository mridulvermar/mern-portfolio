import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import { 
  User, 
  Sparkles, 
  Target, 
  MapPin, 
  Award, 
  Code2, 
  GraduationCap, 
  Briefcase,
  Cpu,
  CheckCircle2
} from "lucide-react";

export default function About() {
  const { summary, metrics, location, availability } = portfolioData;

  return (
    <section className="py-20 md:py-28 relative" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20 mb-3">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Engineering Systems that are{" "}
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 bg-clip-text text-transparent">
              Functional & Smart
            </span>
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            A look into my background, core engineering principles, and how I bridge machine learning with web infrastructure.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          
          {/* Bento Card 1: Narrative (8 cols) */}
          <motion.div 
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
            className="md:col-span-8 bento-card p-7 sm:p-9 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-5 text-blue-600 dark:text-blue-400">
                <Sparkles className="w-5 h-5" />
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  The Full-Stack & Machine Learning Fusion
                </h3>
              </div>
              
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base mb-4">
                I am a Computer Science student and engineer at Bannari Amman Institute of Technology with an obsession for high-impact software. Rather than treating artificial intelligence as an isolated notebook experiment, I specialize in taking trained models—whether computer vision CNNs or multilingual NLP transformers—and containerizing them into robust, responsive MERN applications.
              </p>
              
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                From automating AWS infrastructure deployments with Jenkins and Terraform to designing real-time WebSocket order tracking with MongoDB query optimizations, my work centers on resilience, clean abstractions, and tangible user value.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Primary Focus</span>
                <p className="font-semibold text-sm text-slate-900 dark:text-white mt-0.5">AI + MERN Architecture</p>
              </div>
              <div>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">DSA Foundations</span>
                <p className="font-semibold text-sm text-slate-900 dark:text-white mt-0.5">300+ LeetCode Solved</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Engineering Ethos</span>
                <p className="font-semibold text-sm text-slate-900 dark:text-white mt-0.5">Production-Ready & Scalable</p>
              </div>
            </div>
          </motion.div>

          {/* Bento Card 2: Principles & Focus (4 cols) */}
          <motion.div 
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
            className="md:col-span-4 bento-card p-7 sm:p-8 flex flex-col justify-between bg-gradient-to-b from-blue-500/5 via-violet-500/5 to-transparent"
          >
            <div>
              <div className="flex items-center gap-2 mb-4 text-violet-600 dark:text-violet-400">
                <Target className="w-5 h-5" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Engineering Principles
                </h3>
              </div>

              <ul className="space-y-4">
                {[
                  {
                    title: "End-to-End Ownership",
                    desc: "From dataset collection & model tuning to API design and frontend UI delivery."
                  },
                  {
                    title: "Algorithmic Precision",
                    desc: "Rigorous attention to Big-O space/time complexity in queries, routing, and state."
                  },
                  {
                    title: "Security & Observability",
                    desc: "Trivy vulnerability scans, JWT auth guardrails, and role-based permissions."
                  }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white">{item.title}</h4>
                      <p className="text-[12px] text-slate-500 dark:text-slate-400 leading-normal">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 p-3 rounded-xl bg-violet-500/10 border border-violet-500/20 text-xs text-violet-700 dark:text-violet-300 font-medium flex items-center gap-2">
              <Cpu className="w-4 h-4 text-violet-500 shrink-0" />
              <span>Building software that solves real agricultural and spatial challenges.</span>
            </div>
          </motion.div>

          {/* 4 Metric Bento Cards (3 cols each on md) */}
          {metrics.map((metric, idx) => (
            <motion.div
              key={metric.id}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="md:col-span-3 bento-card p-6 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500">
                  {metric.label}
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white my-1 bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 bg-clip-text text-transparent">
                  {metric.value}
                </div>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                {metric.detail}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
