import React from "react";
import { portfolioData } from "../data/portfolioData";
import { Award, CheckCircle2, ExternalLink } from "lucide-react";

export default function Certifications() {
  return (
    <section className="py-16 relative" id="certifications">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 mb-3">
          <Award className="w-3.5 h-3.5" />
          <span>Accreditations</span>
        </div>
        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-8">
          Achievements & Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {portfolioData.certifications.map((c, i) => (
            <div className="bento-card p-5 flex flex-col justify-between" key={c.title || i}>
              <div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400">
                  {c.badge || "Verified"}
                </span>
                <h3 className="font-bold text-sm text-slate-900 dark:text-white mt-2 mb-1">
                  {c.title}
                </h3>
                <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold mb-2">
                  {c.issuer}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {c.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-xs">
                <span className="text-emerald-500 flex items-center gap-1 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Certified
                </span>
                {c.link && (
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 font-semibold hover:underline flex items-center gap-1"
                  >
                    View <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
