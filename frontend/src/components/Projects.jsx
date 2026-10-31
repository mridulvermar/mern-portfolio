import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData } from "../data/projectsData";
import ProjectThumbnail from "./ProjectThumbnail";
import { 
  FolderGit2, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  X,
  Code,
  ArrowUpRight,
  UserCheck
} from "lucide-react";
import { GithubIcon } from "./Icons";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("all"); // "all" | "ai" | "fullstack" | "cloud"

  const filteredProjects = projectsData.filter((p) => {
    if (filter === "all") return true;
    if (filter === "ai") return p.category.toLowerCase().includes("ai") || p.category.toLowerCase().includes("nlp");
    if (filter === "fullstack") return p.category.toLowerCase().includes("full-stack") || p.category.toLowerCase().includes("mern");
    if (filter === "cloud") return p.category.toLowerCase().includes("cloud") || p.category.toLowerCase().includes("devops");
    return true;
  });

  return (
    <section className="py-20 md:py-28 relative" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20 mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Featured Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Bento Project{" "}
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 bg-clip-text text-transparent">
                Showcase
              </span>
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-400 max-w-2xl">
              Real-world systems combining modern web frameworks, custom deep learning architectures, and cloud CI/CD automation.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-100 dark:bg-slate-900/60 p-1.5 rounded-2xl border border-slate-200 dark:border-white/10 self-start md:self-end">
            {[
              { id: "all", label: "All Projects" },
              { id: "ai", label: "AI & ML" },
              { id: "fullstack", label: "Full-Stack" },
              { id: "cloud", label: "DevOps / Cloud" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
                  filter === tab.id
                    ? "bg-white dark:bg-white/15 text-blue-600 dark:text-white shadow-xs font-semibold"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              whileHover={{ y: -4 }}
              className={`${project.bentoSpan} bento-card p-6 sm:p-7 flex flex-col justify-between group`}
            >
              <div>
                {/* Visual Thumbnail */}
                <div className="mb-5 overflow-hidden rounded-xl">
                  <ProjectThumbnail 
                    type={project.thumbnail.type} 
                    primaryColor={project.thumbnail.primaryColor}
                    title={project.title}
                  />
                </div>

                {/* Top Metadata */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${project.badgeColor}`}>
                    {project.category}
                  </span>
                  <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">
                    {project.time}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors mb-1">
                  {project.title}
                </h3>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-3">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Contribution Highlight Box */}
                <div className="p-3.5 rounded-xl bg-slate-100/70 dark:bg-slate-900/50 border border-slate-200/80 dark:border-white/5 mb-5 text-xs text-slate-600 dark:text-slate-300">
                  <div className="flex items-center gap-1.5 font-bold text-slate-900 dark:text-white mb-1">
                    <UserCheck className="w-3.5 h-3.5 text-blue-500" />
                    <span>My Contribution:</span>
                  </div>
                  <p className="leading-relaxed text-[12px]">
                    {project.myContribution}
                  </p>
                </div>
              </div>

              {/* Card Footer: Links & Action */}
              <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-800 dark:text-white transition-all cursor-pointer"
                    title="View GitHub Repository"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-600/10 text-blue-600 dark:text-blue-400 hover:bg-blue-600/20 border border-blue-500/20 transition-all cursor-pointer"
                    title="Open Live Demo / Details"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Demo</span>
                  </a>
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Deep Dive</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Project Deep-Dive Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/60 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 16 }}
                transition={{ duration: 0.25 }}
                className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-[#0c1017] border border-slate-200 dark:border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/15 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Thumbnail */}
                <div className="mb-6">
                  <ProjectThumbnail 
                    type={selectedProject.thumbnail.type} 
                    primaryColor={selectedProject.thumbnail.primaryColor}
                    title={selectedProject.title}
                  />
                </div>

                {/* Modal Header */}
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${selectedProject.badgeColor}`}>
                    {selectedProject.category}
                  </span>
                  <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">
                    {selectedProject.time}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-2">
                  {selectedProject.title}
                </h3>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4">
                  {selectedProject.subtitle}
                </p>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                {/* Key Features Breakdown */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-violet-500" />
                    <span>Key Architectural Features</span>
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.keyFeatures.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* My Contribution */}
                <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 mb-6">
                  <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-blue-600 dark:text-blue-400 mb-1">
                    <UserCheck className="w-4 h-4" />
                    <span>My Specific Contribution (Mridul Verma R)</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {selectedProject.myContribution}
                  </p>
                </div>

                {/* Tech Stack List */}
                <div className="mb-8">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 font-mono text-slate-800 dark:text-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal Actions */}
                <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-slate-200 dark:border-white/10">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold border border-slate-300 dark:border-white/10 bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-800 dark:text-white transition-all"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View GitHub Repository</span>
                  </a>

                  <a
                    href={selectedProject.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-md shadow-violet-500/20 hover:opacity-95 transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Open Live Demo</span>
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
