import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import { GraduationCap, Calendar, MapPin, Award, BookOpen, CheckCircle2 } from "lucide-react";

export default function Education() {
  const { education } = portfolioData;

  return (
    <section className="py-20 md:py-28 relative" id="education">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Education &{" "}
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 bg-clip-text text-transparent">
              Foundations
            </span>
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            Computer science degree specialization at Bannari Amman Institute of Technology paired with strong mathematical foundations.
          </p>
        </div>

        {/* Bento Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {education.map((edu, idx) => {
            const isDegree = idx === 0;
            return (
              <motion.div
                key={edu.degree}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className={`${
                  isDegree ? "md:col-span-7" : "md:col-span-5"
                } bento-card p-7 sm:p-8 flex flex-col justify-between`}
              >
                <div>
                  {/* Top Metadata */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20">
                      {edu.score}
                    </span>
                    <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {edu.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {edu.location}
                      </span>
                    </div>
                  </div>

                  {/* Degree Name */}
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                    {edu.degree}
                  </h3>
                  <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-4">
                    {edu.institute}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {edu.highlight}
                  </p>

                  {/* Key Coursework */}
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Key Curriculum & Focus Areas:</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.courses.map((c) => (
                        <span
                          key={c}
                          className="text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 font-medium"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1 text-emerald-500 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Verified Transcript
                  </span>
                  <span className="font-semibold text-slate-700 dark:text-slate-300">
                    {isDegree ? "Undergraduate Degree" : "Higher Secondary"}
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
