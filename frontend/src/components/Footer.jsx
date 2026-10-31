import React from "react";
import { portfolioData } from "../data/portfolioData";
import { ArrowUp, Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from "./Icons";

export default function Footer() {
  const { name, links } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <footer className="py-14 border-t border-slate-200/80 dark:border-white/10 bg-slate-50/50 dark:bg-[#07090e]/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-white/10">
          {/* Logo Branding */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 text-white font-bold text-xs shadow-md shadow-violet-500/20">
              MV
            </div>
            <div>
              <span className="font-bold text-base text-slate-900 dark:text-white">
                {name}
              </span>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                AI & Full-Stack Engineer • MERN Architecture
              </p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-5 text-xs font-medium text-slate-600 dark:text-slate-400">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-blue-600 dark:hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-600 dark:text-slate-300 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-600 dark:text-slate-300 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={links.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-600 dark:text-slate-300 transition-colors"
              aria-label="LeetCode"
            >
              <LeetcodeIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${links.email}`}
              className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-600 dark:text-slate-300 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-blue-600/10 text-blue-600 dark:text-blue-400 hover:bg-blue-600/20 border border-blue-500/20 transition-all cursor-pointer ml-2"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-500 gap-3">
          <p>
            © {new Date().getFullYear()} Mridul Verma R. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Designed with Bento Grid aesthetics • Built with React 18, Vite & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
