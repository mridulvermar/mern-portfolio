import React, { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon, FileText, Menu, X, Sparkles } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Navbar() {
  const { theme, isDark, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check current section
      const sections = ["contact", "education", "experience", "projects", "skills", "about"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(section);
          return;
        }
      }
      setActiveSection("hero");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-white/80 dark:bg-[#07090e]/85 backdrop-blur-md border-b border-slate-200/80 dark:border-white/10 shadow-sm shadow-slate-900/5"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Branding */}
          <a
            href="#"
            className="flex items-center gap-2 group cursor-pointer"
            aria-label="Home"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 text-white font-bold text-sm shadow-md shadow-violet-500/20 group-hover:scale-105 transition-transform duration-200">
              MV
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white dark:border-[#07090e]" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-slate-900 dark:text-white text-base leading-tight group-hover:text-blue-500 transition-colors">
                Mridul Verma R
              </span>
              <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                AI & Fullstack
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/70 dark:bg-slate-900/60 p-1.5 rounded-full border border-slate-200/60 dark:border-white/10 backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-white dark:bg-white/15 text-blue-600 dark:text-white shadow-sm"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Actions: Theme Toggle & Resume */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-700 dark:text-slate-200 transition-all duration-200 cursor-pointer shadow-sm hover:scale-105"
              title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-400 animate-spin-slow" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600" />
              )}
            </button>

            {/* Resume Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Mridul_Verma_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-blue-600 to-violet-600 text-white hover:opacity-95 shadow-md shadow-violet-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu & Theme Buttons */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-lg border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-slate-700 dark:text-slate-200"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="p-2 rounded-lg border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-slate-800 dark:text-slate-200"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden mt-3 p-4 rounded-2xl bg-white dark:bg-[#0c1017] border border-slate-200 dark:border-white/10 shadow-xl backdrop-blur-xl animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col gap-1.5">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2 border-t border-slate-200 dark:border-white/10 mt-1 flex items-center justify-between">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Mridul_Verma_Resume.pdf"
                  className="w-full text-center inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-blue-600 to-violet-600 text-white"
                >
                  <FileText className="w-4 h-4" />
                  <span>Download Resume (PDF)</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
