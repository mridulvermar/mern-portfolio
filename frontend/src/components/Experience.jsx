import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import { 
  Briefcase, 
  Award, 
  Calendar, 
  MapPin, 
  ExternalLink, 
  CheckCircle, 
  Sparkles,
  Terminal,
  ShieldCheck,
  Cpu,
  Layers
} from "lucide-react";

export default function Experience() {
  const { experience, certifications, links } = portfolioData;

  const certIcons = {
    "LeetCode": Terminal,
    "NPTEL": Cpu,
    "Oracle University": Layers,
    "Cisco Networking Academy": ShieldCheck
  };

  return (
    <section className="py-20 md:py-28 relative" id="experience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Experience &{" "}
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            Practical industry internship experience in machine learning pipelines, coupled with certified benchmarks in algorithms and cloud systems.
          </p>
        </div>

        {/* Bento Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Main Experience Bento Card (8 cols) */}
          {experience.map((exp, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="md:col-span-8 bento-card p-7 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                      {exp.type}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      AI & Machine Learning Focus
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                  {exp.role}
                </h3>
                <div className="text-base font-semibold text-blue-600 dark:text-blue-400 mb-5">
                  {exp.company}
                </div>

                <div className="space-y-3 mb-6">
                  {exp.highlights.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Leveraged */}
              <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 mr-1">
                  Skills Applied:
                </span>
                {exp.skills.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* DevOps Milestone Bento Card (4 cols) */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="md:col-span-4 bento-card p-7 sm:p-8 flex flex-col justify-between bg-gradient-to-br from-indigo-500/5 via-violet-500/5 to-transparent"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-500">
                  <Cpu className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-500 border border-violet-500/20">
                  DevOps Practice
                </span>
              </div>

              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                AWS EKS & Jenkins Automation
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                Designed multi-stage Jenkins CI/CD pipeline automating Terraform-based AWS EKS cluster provisioning with Trivy static security analysis and gated approval workflows.
              </p>

              <div className="p-3 rounded-xl bg-slate-100/70 dark:bg-slate-900/50 border border-slate-200/80 dark:border-white/10 text-[12px] space-y-1.5 text-slate-700 dark:text-slate-300 font-mono">
                <div className="text-emerald-500 font-bold">✓ Terraform IaC Provisioning</div>
                <div className="text-blue-500 font-bold">✓ Trivy Security Vulnerability Scan</div>
                <div className="text-violet-500 font-bold">✓ Automated Environment Lifecycle</div>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-xs text-slate-400">
              <span>Security Scanned</span>
              <span className="text-slate-800 dark:text-slate-200 font-semibold">Jan 2026</span>
            </div>
          </motion.div>

          {/* Certifications Subheading */}
          <div className="md:col-span-12 mt-4 mb-1">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-500" />
              <span>Verified Certifications & Accreditations</span>
            </h3>
          </div>

          {/* 4 Certification Bento Cards (3 cols each on md) */}
          {certifications.map((cert, idx) => {
            const Icon = certIcons[cert.issuer] || Award;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="md:col-span-6 lg:col-span-3 bento-card p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400">
                      {cert.badge}
                    </span>
                  </div>

                  <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1 leading-snug">
                    {cert.title}
                  </h4>
                  <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-3">
                    {cert.issuer}
                  </div>

                  <p className="text-[12px] text-slate-600 dark:text-slate-400 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 dark:border-white/10 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 dark:text-slate-500">
                    {cert.category}
                  </span>
                  {cert.link ? (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-blue-500 hover:text-blue-400 flex items-center gap-1"
                    >
                      Verify <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-xs font-semibold text-emerald-500 flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" /> Credentialed
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
