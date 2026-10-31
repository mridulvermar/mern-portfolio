import React from "react";

export default function ProjectThumbnail({ type, primaryColor = "#3b82f6", title }) {
  if (type === "svg-campus") {
    return (
      <div className="relative w-full h-48 md:h-56 bg-slate-900/60 dark:bg-slate-950/70 rounded-xl overflow-hidden border border-slate-700/30 flex items-center justify-center p-4">
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] opacity-25" />
        
        {/* Spatial Map Graphic */}
        <svg viewBox="0 0 400 220" className="w-full h-full max-h-48 drop-shadow-lg" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Campus blocks */}
          <rect x="30" y="30" width="80" height="60" rx="8" fill="#1e293b" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="3 3" />
          <text x="70" y="65" fill="#93c5fd" fontSize="11" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">Block A (CS)</text>

          <rect x="290" y="40" width="80" height="70" rx="8" fill="#1e293b" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="3 3" />
          <text x="330" y="80" fill="#a5b4fc" fontSize="11" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">Library</text>

          <rect x="160" y="130" width="90" height="60" rx="8" fill="#1e293b" stroke="#0ea5e9" strokeWidth="1.5" />
          <text x="205" y="165" fill="#7dd3fc" fontSize="11" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">Main Admin</text>

          {/* Navigation Paths */}
          <path d="M110 60 H205 V130" stroke="#3b82f6" strokeWidth="2.5" strokeDasharray="4 4" className="animate-pulse" />
          <path d="M250 160 H330 V110" stroke="#6366f1" strokeWidth="2.5" />
          
          {/* Waypoint Nodes */}
          <circle cx="110" cy="60" r="5" fill="#60a5fa" />
          <circle cx="205" cy="60" r="4" fill="#3b82f6" />
          <circle cx="205" cy="130" r="6" fill="#38bdf8" />
          <circle cx="330" cy="110" r="5" fill="#818cf8" />

          {/* User Location Radar */}
          <circle cx="110" cy="60" r="14" stroke="#60a5fa" strokeWidth="1.5" opacity="0.6">
            <animate attributeName="r" values="5;18;5" dur="2.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.8;0;0.8" dur="2.5s" repeatCount="indefinite" />
          </circle>

          {/* Badge Overlay */}
          <rect x="20" y="175" width="120" height="26" rx="13" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" />
          <text x="80" y="192" fill="#38bdf8" fontSize="10" fontFamily="sans-serif" textAnchor="middle">⚡ Dijkstra Path: 120m</text>
        </svg>
      </div>
    );
  }

  if (type === "svg-career") {
    return (
      <div className="relative w-full h-48 md:h-56 bg-slate-900/60 dark:bg-slate-950/70 rounded-xl overflow-hidden border border-emerald-500/20 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />

        <svg viewBox="0 0 400 220" className="w-full h-full max-h-48 drop-shadow-lg" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Main Container Window */}
          <rect x="30" y="16" width="340" height="188" rx="12" fill="#0a1917" stroke="#059669" strokeWidth="1.5" />
          
          {/* Window Controls */}
          <circle cx="48" cy="30" r="3.5" fill="#ef4444" />
          <circle cx="60" cy="30" r="3.5" fill="#f59e0b" />
          <circle cx="72" cy="30" r="3.5" fill="#10b981" />
          
          {/* Header Title Pill */}
          <rect x="86" y="21" width="168" height="18" rx="9" fill="#064e3b" stroke="#10b981" strokeWidth="0.8" />
          <text x="170" y="33" fill="#a7f3d0" fontSize="9" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">
            Career 2.0 • Senior Livelihood
          </text>

          {/* Hackathon Badge */}
          <rect x="264" y="21" width="94" height="18" rx="9" fill="#1e1b4b" stroke="#818cf8" strokeWidth="0.8" />
          <text x="311" y="33" fill="#c7d2fe" fontSize="8" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">
            🏆 Mavericks 2026
          </text>

          {/* Left Panel: Senior Persona & AI Advisor Match */}
          <rect x="42" y="48" width="148" height="106" rx="8" fill="#0f2923" stroke="#10b981" strokeWidth="1" />
          
          {/* Senior Profile Circle */}
          <circle cx="66" cy="72" r="14" fill="#065f46" stroke="#34d399" strokeWidth="1" />
          <text x="66" y="77" fontSize="13" textAnchor="middle">👵</text>
          
          <text x="88" y="69" fill="#ecfdf5" fontSize="10" fontFamily="sans-serif" fontWeight="bold">Radha M. (64)</text>
          <text x="88" y="81" fill="#6ee7b7" fontSize="8" fontFamily="sans-serif">Culinary & Craft Wisdom</text>

          {/* AI Advisor Match Box */}
          <rect x="48" y="93" width="136" height="53" rx="6" fill="#042f2e" stroke="#059669" strokeWidth="0.8" />
          <text x="56" y="106" fill="#fde047" fontSize="8.5" fontFamily="sans-serif" fontWeight="bold">✨ AI Advisor: 96% Match</text>
          <text x="56" y="119" fill="#d1fae5" fontSize="8" fontFamily="sans-serif">• Traditional Andhra Pickles</text>
          <text x="56" y="131" fill="#d1fae5" fontSize="8" fontFamily="sans-serif">• Cultural Storytelling & Mentoring</text>
          <text x="56" y="142" fill="#5eead4" fontSize="7.5" fontFamily="sans-serif" fontWeight="bold">₹600 / hour • High Demand</text>

          {/* Right Panel: Recharts Analytics Simulator */}
          <rect x="198" y="48" width="160" height="106" rx="8" fill="#0b2420" stroke="#14b8a6" strokeWidth="1" />
          <text x="210" y="64" fill="#2dd4bf" fontSize="9" fontFamily="sans-serif" fontWeight="bold">📊 Recharts Earnings Model</text>
          <text x="210" y="78" fill="#f0fdfa" fontSize="13" fontFamily="sans-serif" fontWeight="extrabold">₹18,500 <tspan fill="#6ee7b7" fontSize="8" fontWeight="normal">/ mo projected</tspan></text>
          
          {/* Chart Grid Lines */}
          <line x1="210" y1="94" x2="348" y2="94" stroke="#134e4a" strokeWidth="0.8" strokeDasharray="2 2" />
          <line x1="210" y1="112" x2="348" y2="112" stroke="#134e4a" strokeWidth="0.8" strokeDasharray="2 2" />
          <line x1="210" y1="130" x2="348" y2="130" stroke="#134e4a" strokeWidth="0.8" />

          {/* Growth Bars */}
          <rect x="220" y="115" width="18" height="15" rx="3" fill="#0d9488" />
          <rect x="248" y="103" width="18" height="27" rx="3" fill="#059669" />
          <rect x="276" y="92" width="18" height="38" rx="3" fill="#10b981" />
          <rect x="304" y="82" width="18" height="48" rx="3" fill="#34d399" />

          {/* Trendline Sparkline */}
          <path d="M229 115 L257 103 L285 92 L313 82" stroke="#facc15" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="313" cy="82" r="2.5" fill="#facc15" />

          {/* Labels */}
          <text x="229" y="141" fill="#99f6e4" fontSize="7.5" fontFamily="sans-serif" textAnchor="middle">W1</text>
          <text x="257" y="141" fill="#99f6e4" fontSize="7.5" fontFamily="sans-serif" textAnchor="middle">W2</text>
          <text x="285" y="141" fill="#99f6e4" fontSize="7.5" fontFamily="sans-serif" textAnchor="middle">W3</text>
          <text x="313" y="141" fill="#99f6e4" fontSize="7.5" fontFamily="sans-serif" textAnchor="middle">W4</text>

          {/* Bottom Telemetry Bar */}
          <rect x="42" y="162" width="316" height="26" rx="6" fill="#03211e" stroke="#14b8a6" strokeWidth="0.8" />
          <text x="200" y="178" fill="#5eead4" fontSize="9" fontFamily="sans-serif" textAnchor="middle">
            🤝 Community Marketplace • Senior-First Accessibility • Vercel Live
          </text>
        </svg>
      </div>
    );
  }

  if (type === "svg-ai-farmer") {
    return (
      <div className="relative w-full h-48 md:h-56 bg-slate-900/60 dark:bg-slate-950/70 rounded-xl overflow-hidden border border-emerald-500/20 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />

        <svg viewBox="0 0 400 220" className="w-full h-full max-h-48 drop-shadow-lg" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Crop Leaf Silhouette */}
          <path d="M200 30 C270 50 300 120 270 180 C230 190 200 185 200 185 C200 185 170 190 130 180 C100 120 130 50 200 30 Z" 
                fill="#064e3b" stroke="#10b981" strokeWidth="2" opacity="0.8" />
          <path d="M200 30 V185" stroke="#34d399" strokeWidth="1.5" strokeDasharray="3 3" />
          
          {/* CNN Detection Bounding Box */}
          <rect x="150" y="70" width="100" height="75" rx="6" stroke="#fbbf24" strokeWidth="2" strokeDasharray="5 3" />
          <circle cx="150" cy="70" r="3" fill="#fbbf24" />
          <circle cx="250" cy="70" r="3" fill="#fbbf24" />
          <circle cx="150" cy="145" r="3" fill="#fbbf24" />
          <circle cx="250" cy="145" r="3" fill="#fbbf24" />

          {/* Diagnosis Tag */}
          <rect x="155" y="48" width="125" height="20" rx="4" fill="#1e293b" stroke="#fbbf24" strokeWidth="1" />
          <text x="217" y="62" fill="#fde047" fontSize="10" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">CNN: Blight (98.4%)</text>

          {/* Multilingual Speech Wave */}
          <g transform="translate(40, 160)">
            <rect width="110" height="28" rx="14" fill="#022c22" stroke="#10b981" strokeWidth="1" />
            <text x="55" y="18" fill="#6ee7b7" fontSize="10" fontFamily="sans-serif" textAnchor="middle">🎙️ தமிழ் / हिंदी / Eng</text>
          </g>

          {/* Weather & Mandi Tag */}
          <g transform="translate(250, 160)">
            <rect width="115" height="28" rx="14" fill="#0f172a" stroke="#0ea5e9" strokeWidth="1" />
            <text x="57" y="18" fill="#7dd3fc" fontSize="10" fontFamily="sans-serif" textAnchor="middle">⛅ Live Mandi & Rain</text>
          </g>
        </svg>
      </div>
    );
  }

  if (type === "svg-blog") {
    return (
      <div className="relative w-full h-48 md:h-56 bg-slate-900/60 dark:bg-slate-950/70 rounded-xl overflow-hidden border border-violet-500/20 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-[radial-gradient(#8b5cf6_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />

        <svg viewBox="0 0 400 220" className="w-full h-full max-h-48 drop-shadow-lg" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Browser / Reader Window */}
          <rect x="40" y="25" width="320" height="170" rx="10" fill="#0f172a" stroke="#8b5cf6" strokeWidth="1.5" />
          <circle cx="60" cy="40" r="4" fill="#ef4444" />
          <circle cx="75" cy="40" r="4" fill="#f59e0b" />
          <circle cx="90" cy="40" r="4" fill="#10b981" />
          
          <line x1="40" y1="52" x2="360" y2="52" stroke="#334155" strokeWidth="1" />

          {/* Article Header & Typography */}
          <rect x="65" y="68" width="160" height="14" rx="4" fill="#a78bfa" />
          <rect x="65" y="92" width="260" height="6" rx="3" fill="#475569" />
          <rect x="65" y="104" width="220" height="6" rx="3" fill="#475569" />
          <rect x="65" y="116" width="240" height="6" rx="3" fill="#475569" />

          {/* Syntax Highlighted Code Block */}
          <rect x="65" y="132" width="270" height="46" rx="6" fill="#1e1b4b" stroke="#6366f1" strokeWidth="1" />
          <text x="80" y="150" fill="#c084fc" fontSize="9" fontFamily="monospace">const auth = jwt.verify(token);</text>
          <text x="80" y="165" fill="#38bdf8" fontSize="9" fontFamily="monospace">return res.status(200).json(post);</text>

          {/* JWT Badge */}
          <rect x="250" y="32" width="95" height="16" rx="8" fill="#312e81" stroke="#818cf8" strokeWidth="1" />
          <text x="297" y="44" fill="#c7d2fe" fontSize="9" fontFamily="sans-serif" textAnchor="middle">🔒 JWT Secured</text>
        </svg>
      </div>
    );
  }

  if (type === "svg-career-outcome" || type === "svg-ai-bot") {
    return (
      <div className="relative w-full h-48 md:h-56 bg-slate-900/60 dark:bg-slate-950/70 rounded-xl overflow-hidden border border-cyan-500/20 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />

        <svg viewBox="0 0 400 220" className="w-full h-full max-h-48 drop-shadow-lg" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Main Container Window */}
          <rect x="25" y="15" width="350" height="190" rx="12" fill="#0b1329" stroke="#0ea5e9" strokeWidth="1.5" />
          
          {/* Window Controls */}
          <circle cx="45" cy="30" r="3.5" fill="#ef4444" />
          <circle cx="57" cy="30" r="3.5" fill="#f59e0b" />
          <circle cx="69" cy="30" r="3.5" fill="#10b981" />
          
          {/* Header Title Pill */}
          <rect x="85" y="21" width="180" height="18" rx="9" fill="#082f49" stroke="#38bdf8" strokeWidth="0.8" />
          <text x="175" y="33" fill="#bae6fd" fontSize="9" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">
            Career Outcome Analysis • Skill Gap Radar
          </text>

          {/* Vercel Badge */}
          <rect x="278" y="21" width="85" height="18" rx="9" fill="#1e1b4b" stroke="#818cf8" strokeWidth="0.8" />
          <text x="320" y="33" fill="#c7d2fe" fontSize="8" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">
            ▲ Vercel Live
          </text>

          {/* Left Panel: Recharts Radar Chart Simulation */}
          <rect x="38" y="48" width="168" height="110" rx="8" fill="#0f172a" stroke="#1e293b" strokeWidth="1" />
          <text x="48" y="62" fill="#38bdf8" fontSize="8.5" fontFamily="sans-serif" fontWeight="bold">
            🕸️ Profile vs Target Competency
          </text>

          {/* Concentric Radar Webs (Center at 122, 108) */}
          <polygon points="122,76 150,92 150,124 122,140 94,124 94,92" stroke="#1e293b" strokeWidth="1" fill="none" />
          <polygon points="122,86 141,97 141,119 122,130 103,119 103,97" stroke="#334155" strokeWidth="1" fill="none" />
          <line x1="122" y1="76" x2="122" y2="140" stroke="#334155" strokeWidth="0.8" strokeDasharray="2 2" />
          <line x1="94" y1="92" x2="150" y2="124" stroke="#334155" strokeWidth="0.8" strokeDasharray="2 2" />
          <line x1="94" y1="124" x2="150" y2="92" stroke="#334155" strokeWidth="0.8" strokeDasharray="2 2" />

          {/* Target Benchmark Polygon (Purple) */}
          <polygon points="122,78 147,94 144,120 122,136 98,122 96,95" 
                   stroke="#818cf8" strokeWidth="1.2" fill="#6366f1" fillOpacity="0.2" />

          {/* User Profile Polygon (Cyan/Teal with Vertex Dots) */}
          <polygon points="122,82 142,98 138,114 122,126 102,118 106,94" 
                   stroke="#22d3ee" strokeWidth="1.8" fill="#06b6d4" fillOpacity="0.4" />
          <circle cx="122" cy="82" r="2.5" fill="#67e8f9" />
          <circle cx="142" cy="98" r="2.5" fill="#67e8f9" />
          <circle cx="138" cy="114" r="2.5" fill="#67e8f9" />
          <circle cx="122" cy="126" r="2.5" fill="#67e8f9" />
          <circle cx="102" cy="118" r="2.5" fill="#67e8f9" />
          <circle cx="106" cy="94" r="2.5" fill="#67e8f9" />

          {/* Radar Axis Labels */}
          <text x="122" y="73" fill="#94a3b8" fontSize="6.5" fontFamily="sans-serif" textAnchor="middle">DSA</text>
          <text x="156" y="93" fill="#94a3b8" fontSize="6.5" fontFamily="sans-serif">System</text>
          <text x="154" y="127" fill="#94a3b8" fontSize="6.5" fontFamily="sans-serif">Fullstack</text>
          <text x="122" y="148" fill="#94a3b8" fontSize="6.5" fontFamily="sans-serif" textAnchor="middle">Cloud</text>
          <text x="73" y="127" fill="#94a3b8" fontSize="6.5" fontFamily="sans-serif">AI/ML</text>
          <text x="75" y="93" fill="#94a3b8" fontSize="6.5" fontFamily="sans-serif">Soft</text>

          {/* Right Panel: Metrics & AI Strategic Insights */}
          <rect x="214" y="48" width="150" height="110" rx="8" fill="#0f172a" stroke="#1e293b" strokeWidth="1" />
          <text x="224" y="63" fill="#a5b4fc" fontSize="8.5" fontFamily="sans-serif" fontWeight="bold">
            📈 Strategic Insights
          </text>

          {/* Market Demand Gauge */}
          <rect x="224" y="70" width="62" height="34" rx="4" fill="#1e1b4b" stroke="#6366f1" strokeWidth="0.8" />
          <text x="255" y="82" fill="#c7d2fe" fontSize="7" fontFamily="sans-serif" textAnchor="middle">Demand</text>
          <text x="255" y="97" fill="#a5b4fc" fontSize="10.5" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">High (88%)</text>

          {/* Growth Potential Gauge */}
          <rect x="292" y="70" width="62" height="34" rx="4" fill="#042f2e" stroke="#14b8a6" strokeWidth="0.8" />
          <text x="323" y="82" fill="#99f6e4" fontSize="7" fontFamily="sans-serif" textAnchor="middle">Growth</text>
          <text x="323" y="97" fill="#5eead4" fontSize="10.5" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">92% Pot.</text>

          {/* Recommendation Chip */}
          <rect x="224" y="112" width="130" height="38" rx="6" fill="#082f49" stroke="#0284c7" strokeWidth="0.8" />
          <text x="230" y="124" fill="#fde047" fontSize="7.5" fontFamily="sans-serif" fontWeight="bold">⚡ Upskill Recommendation:</text>
          <text x="230" y="135" fill="#e0f2fe" fontSize="7.5" fontFamily="sans-serif">• Cloud Infrastructure & Docker</text>
          <text x="230" y="145" fill="#7dd3fc" fontSize="7" fontFamily="sans-serif">Target Role Fit: 86% → 95%</text>

          {/* Bottom Telemetry Bar */}
          <rect x="38" y="165" width="326" height="24" rx="6" fill="#031b29" stroke="#0ea5e9" strokeWidth="0.8" />
          <text x="201" y="180" fill="#7dd3fc" fontSize="8.5" fontFamily="sans-serif" textAnchor="middle">
            🧠 AI Career Prediction • Recharts Radar • Material UI • Vercel Deployed
          </text>
        </svg>
      </div>
    );
  }

  if (type === "svg-food") {
    return (
      <div className="relative w-full h-48 md:h-56 bg-slate-900/60 dark:bg-slate-950/70 rounded-xl overflow-hidden border border-amber-500/20 flex items-center justify-center p-4">
        <svg viewBox="0 0 400 220" className="w-full h-full max-h-48 drop-shadow-lg" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="40" y="30" width="320" height="150" rx="12" fill="#1e1e24" stroke="#f59e0b" strokeWidth="1.5" />
          <circle cx="100" cy="90" r="30" fill="#78350f" stroke="#f59e0b" strokeWidth="2" />
          <text x="100" y="96" fill="#fde68a" fontSize="20" textAnchor="middle">🍲</text>
          <text x="155" y="80" fill="#fef3c7" fontSize="13" fontWeight="bold">Cravely Live Dispatch</text>
          <text x="155" y="100" fill="#d97706" fontSize="11">Order #8492 • In Preparation</text>
          
          <rect x="155" y="115" width="170" height="8" rx="4" fill="#374151" />
          <rect x="155" y="115" width="115" height="8" rx="4" fill="#f59e0b" />
          
          <rect x="40" y="155" width="320" height="25" rx="6" fill="#111827" />
          <text x="200" y="171" fill="#fbbf24" fontSize="10" textAnchor="middle">🚀 MongoDB +30% Query Optimization</text>
        </svg>
      </div>
    );
  }

  // Default devops fallback
  return (
    <div className="relative w-full h-48 md:h-56 bg-slate-900/60 dark:bg-slate-950/70 rounded-xl overflow-hidden border border-rose-500/20 flex items-center justify-center p-4">
      <svg viewBox="0 0 400 220" className="w-full h-full max-h-48 drop-shadow-lg" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="30" y="40" width="75" height="50" rx="8" fill="#1f1d2b" stroke="#f43f5e" strokeWidth="1.5" />
        <text x="67" y="70" fill="#fda4af" fontSize="11" textAnchor="middle" fontWeight="bold">Plan</text>

        <path d="M105 65 H145" stroke="#f43f5e" strokeWidth="2" strokeDasharray="3 3" />

        <rect x="145" y="40" width="85" height="50" rx="8" fill="#1f1d2b" stroke="#f43f5e" strokeWidth="1.5" />
        <text x="187" y="65" fill="#fda4af" fontSize="10" textAnchor="middle" fontWeight="bold">Trivy Scan</text>
        <text x="187" y="78" fill="#10b981" fontSize="9" textAnchor="middle">0 Critical</text>

        <path d="M230 65 H270" stroke="#f43f5e" strokeWidth="2" />

        <rect x="270" y="40" width="95" height="50" rx="8" fill="#1f1d2b" stroke="#10b981" strokeWidth="1.5" />
        <text x="317" y="65" fill="#6ee7b7" fontSize="10" textAnchor="middle" fontWeight="bold">AWS EKS</text>
        <text x="317" y="78" fill="#93c5fd" fontSize="9" textAnchor="middle">Provisioned</text>

        <rect x="50" y="140" width="300" height="36" rx="8" fill="#111827" stroke="#374151" strokeWidth="1" />
        <text x="200" y="162" fill="#cbd5e1" fontSize="10" textAnchor="middle">⚙️ Automated Terraform Pipeline & Jenkinsfile</text>
      </svg>
    </div>
  );
}

