export const projectsData = [
  {
    id: "campus-navigation",
    title: "Campus Navigation & Facility Management",
    subtitle: "Spatial Mapping & Autonomous Facility Booking Ecosystem",
    featured: true,
    time: "Jan 2026 – Present",
    category: "Full-Stack & Spatial Computing",
    bentoSpan: "col-span-12 lg:col-span-8",
    accent: "from-blue-600/20 via-indigo-600/10 to-transparent",
    badgeColor: "border-blue-500/30 text-blue-400 bg-blue-500/10",
    gradientText: "from-blue-400 to-indigo-400",
    description:
      "A comprehensive smart campus navigation and facility infrastructure system built for academic institutions. Solves multi-building indoor/outdoor route guidance, accessibility-first routing, and conflict-free facility scheduling.",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Spatial Graph / GIS",
      "Tailwind CSS",
      "REST APIs"
    ],
    keyFeatures: [
      "Interactive multi-floor block mapping with real-time waypoint rendering and step-by-step directions.",
      "Optimized Dijkstra shortest-path pathfinding calculating fastest routes between labs, seminar halls, and amenities.",
      "Real-time facility booking engine with automated collision detection and calendar management.",
      "Administrative dashboard for campus maintenance ticket logging, asset status, and occupancy tracking."
    ],
    myContribution:
      "Architected backend REST APIs and schema design in MongoDB; engineered spatial node-edge graph algorithms for indoor routing; developed high-performance touch-responsive client UI with Tailwind CSS.",
    github: "https://github.com/mridulvermar/campus_navigation_app",
    liveDemo: "https://campus-navigation-app-server.vercel.app/",
    stats: [
      { label: "Coverage", value: "Multi-Block" },
      { label: "Pathfinding", value: "< 50ms" },
      { label: "Scheduling", value: "Real-time" }
    ],
    thumbnail: {
      type: "svg-campus",
      primaryColor: "#3b82f6"
    }
  },
  {
    id: "farmer-ai",
    title: "Khrishipalan / Project Kisan (Farmer AI)",
    subtitle: "Deep Learning Crop Disease Diagnosis & Multilingual Voice Bot",
    featured: true,
    time: "Sep 2025 – Nov 2025",
    category: "AI & Computer Vision",
    bentoSpan: "col-span-12 lg:col-span-4",
    accent: "from-emerald-600/20 via-teal-600/10 to-transparent",
    badgeColor: "border-emerald-500/30 text-emerald-400 bg-emerald-500/10",
    gradientText: "from-emerald-400 to-teal-400",
    description:
      "Intelligent agricultural decision support system empowering farmers with instant leaf disease diagnosis using CNN computer vision models and a regional voice assistant.",
    techStack: [
      "PyTorch",
      "TensorFlow",
      "CNN",
      "Transfer Learning",
      "React.js",
      "Express.js",
      "OpenWeather API"
    ],
    keyFeatures: [
      "Deep Learning CNN model trained with transfer learning for high-accuracy disease identification from leaf photos.",
      "Multilingual voice-supported conversational assistant supporting Tamil, Hindi, and English for accessibility.",
      "Real-time weather analytics and mandi market price integration assisting crop timing decisions.",
      "Frictionless farmer workflow: Instant Photo Capture → Visual Diagnosis → Treatment Guidance."
    ],
    myContribution:
      "Engineered data preprocessing pipelines (normalization, augmentation) and trained CNN vision models; implemented inference API endpoints; integrated multilingual speech synthesis modules.",
    github: "https://github.com/nagasundharam/crop_disease_predictor",
    liveDemo: "https://github.com/nagasundharam/crop_disease_predictor",
    stats: [
      { label: "Model Accuracy", value: "High Precision" },
      { label: "Languages", value: "Tamil / Hindi / Eng" },
      { label: "Integration", value: "Weather & Mandi" }
    ],
    thumbnail: {
      type: "svg-ai-farmer",
      primaryColor: "#10b981"
    }
  },
  {
    id: "career-2-0",
    title: "Career 2.0 – Earn with Your Wisdom",
    subtitle: "AI-Powered Livelihood Platform for Seniors & Homemakers (Mavericks Hackathon)",
    featured: true,
    time: "Mavericks Hackathon 2026",
    category: "AI & Full-Stack Social Impact",
    bentoSpan: "col-span-12 lg:col-span-7",
    accent: "from-emerald-600/20 via-teal-600/10 to-transparent",
    badgeColor: "border-emerald-500/30 text-emerald-400 bg-emerald-500/10",
    gradientText: "from-emerald-400 via-teal-300 to-cyan-400",
    description:
      "An inclusive digital livelihood and micro-entrepreneurship platform created during the Mavericks Hackathon to empower senior citizens and homemakers across India. Enables experienced elders to monetize lifetime skills through consulting, traditional handmade delicacies, and artisanal crafts with personalized AI guidance.",
    techStack: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "Lucide React",
      "Recharts",
      "Axios",
      "AI Guidance",
      "Vercel"
    ],
    keyFeatures: [
      "AI-driven livelihood discovery assistant recommending personalized earning avenues based on user hobbies, wisdom, and time flexibility.",
      "Digital community marketplace showcasing homemade regional foods, handcrafted goods, and micro-mentorship sessions.",
      "Interactive visual earnings estimator and monthly income growth projection graphs powered by Recharts.",
      "Senior-first accessible UX with high contrast, large typography, simplified intuitive flows, and multi-persona toggling."
    ],
    myContribution:
      "Spearheaded end-to-end frontend architecture and AI livelihood assistant integration during the Mavericks Hackathon; designed accessible senior-first user workflows and responsive analytics dashboards.",
    github: "https://github.com/mridulvermar/mavericks_hackathon",
    liveDemo: "https://mavericks-hackathon-nine.vercel.app/",
    stats: [
      { label: "Target Audience", value: "Seniors & Homemakers" },
      { label: "Hackathon", value: "Mavericks 2026" },
      { label: "Deployment", value: "Vercel Live" }
    ],
    thumbnail: {
      type: "svg-career",
      primaryColor: "#10b981"
    }
  },
  {
    id: "career-outcome-system",
    title: "Career Outcome Analysis System",
    subtitle: "AI-Powered Career Prediction & Skill Gap Analytics Platform",
    featured: true,
    time: "2026",
    category: "AI & Predictive Analytics",
    bentoSpan: "col-span-12 lg:col-span-5",
    accent: "from-cyan-600/20 via-blue-600/10 to-transparent",
    badgeColor: "border-cyan-500/30 text-cyan-400 bg-cyan-500/10",
    gradientText: "from-cyan-400 via-blue-300 to-indigo-400",
    description:
      "An AI-driven career trajectory prediction and skill gap analysis platform designed to benchmark individual competencies against dynamic industry requirements. Features multi-axis radar chart diagnostics, market demand metrics, and tailored upskilling roadmaps.",
    techStack: [
      "React.js",
      "Material UI",
      "Recharts",
      "Framer Motion",
      "React Router",
      "AI Scoring Models",
      "Vercel"
    ],
    keyFeatures: [
      "AI-driven career prediction modeling student readiness and employment probability across modern tech roles.",
      "Multi-axis Recharts radar chart comparing current student skillset against target industry benchmarks.",
      "Strategic insights dashboard quantifying real-time Market Demand, Growth Potential, and emerging industry trends.",
      "Custom learning pathway recommendations with responsive glassmorphism Material UI interfaces."
    ],
    myContribution:
      "Architected the full frontend analytics engine, implemented interactive Recharts radar and trajectory visualizations, and structured the career outcome prediction assessment workflow.",
    github: "https://github.com/mridulvermar/career-outcome-system",
    liveDemo: "https://career-outcome-system-5yps.vercel.app/",
    stats: [
      { label: "Analytics", value: "Skill Gap Radar" },
      { label: "Insights", value: "Demand & Growth" },
      { label: "Deployment", value: "Vercel Live" }
    ],
    thumbnail: {
      type: "svg-career-outcome",
      primaryColor: "#06b6d4"
    }
  },
  {
    id: "mern-blog",
    title: "MERN Publishing & Tech Blog Platform",
    subtitle: "High-Performance Content Management & Discussion Engine",
    featured: true,
    time: "2025",
    category: "Full-Stack Web Development",
    bentoSpan: "col-span-12 lg:col-span-4",
    accent: "from-violet-600/20 via-purple-600/10 to-transparent",
    badgeColor: "border-violet-500/30 text-violet-400 bg-violet-500/10",
    gradientText: "from-violet-400 to-purple-400",
    description:
      "A modern developer blogging and content publishing platform equipped with rich markdown rendering, role-based access control, tag indexing, and interactive discussions.",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Auth",
      "Tailwind CSS"
    ],
    keyFeatures: [
      "Secure JSON Web Token (JWT) bearer authentication with role-based access for authors and readers.",
      "Markdown editor with instantaneous live preview, code syntax highlighting, and responsive typography.",
      "Optimized MongoDB compound indexing for instant search, tag aggregation, and fast pagination.",
      "Nested discussion threads, reading-time estimations, and responsive dark/light article view."
    ],
    myContribution:
      "Constructed MongoDB data schemas with indexing strategies; built secure RESTful authentication and authorization middleware; developed the clean client-side reader interface.",
    github: "https://github.com/mridulvermar",
    liveDemo: "https://github.com/mridulvermar",
    stats: [
      { label: "Auth", value: "JWT Protected" },
      { label: "Editor", value: "Live Markdown" },
      { label: "Queries", value: "Indexed Mongoose" }
    ],
    thumbnail: {
      type: "svg-blog",
      primaryColor: "#8b5cf6"
    }
  },
  {
    id: "cravely-food",
    title: "Cravely – Full Stack Food Ordering Platform",
    subtitle: "Real-Time Food Commerce with Live Order Tracking",
    featured: false,
    time: "Nov 2025 – Dec 2025",
    category: "MERN Stack Application",
    bentoSpan: "col-span-12 lg:col-span-4",
    accent: "from-amber-600/20 via-orange-600/10 to-transparent",
    badgeColor: "border-amber-500/30 text-amber-400 bg-amber-500/10",
    gradientText: "from-amber-400 to-orange-400",
    description:
      "A full-fledged food delivery platform featuring real-time WebSocket order tracking, role-based dashboards for customers and restaurants, and 30% query performance optimization.",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "WebSockets",
      "JWT Auth"
    ],
    keyFeatures: [
      "Architected responsive MERN application with cart, orders, and real-time live order tracking.",
      "Developed RESTful APIs using Express.js and implemented JWT authentication for secure access.",
      "Role-based access for customers, restaurant vendors, and platform administration.",
      "Optimized MongoDB queries and compound indexing to improve database performance by 30%."
    ],
    myContribution:
      "Designed database indexing, created order lifecycle state machine with WebSocket notifications, and implemented secure user authentication flow.",
    github: "https://github.com/mridulvermar/mern-food-ordering-app.git",
    liveDemo: "https://mern-food-ordering-app-five.vercel.app/",
    stats: [
      { label: "DB Speed", value: "+30% Optimized" },
      { label: "Updates", value: "Live WebSocket" },
      { label: "Roles", value: "RBAC System" }
    ],
    thumbnail: {
      type: "svg-food",
      primaryColor: "#f59e0b"
    }
  },
  {
    id: "devops-eks",
    title: "DevOps: Jenkins Pipeline for AWS EKS",
    subtitle: "Automated Terraform IaC & Container Orchestration Pipeline",
    featured: false,
    time: "January 2026",
    category: "Cloud & DevOps",
    bentoSpan: "col-span-12 lg:col-span-4",
    accent: "from-rose-600/20 via-pink-600/10 to-transparent",
    badgeColor: "border-rose-500/30 text-rose-400 bg-rose-500/10",
    gradientText: "from-rose-400 to-pink-400",
    description:
      "An automated enterprise CI/CD pipeline using Jenkins to provision, audit, and manage Terraform-based Amazon EKS Kubernetes clusters with Trivy vulnerability scanning.",
    techStack: [
      "Jenkins",
      "AWS EKS",
      "Terraform",
      "Docker",
      "Trivy",
      "AWS S3 & EC2",
      "CI/CD"
    ],
    keyFeatures: [
      "Automated Jenkins CI/CD pipeline managing Terraform-based AWS EKS cluster lifecycle.",
      "Integrated Trivy security scanning to detect Terraform IaC vulnerabilities prior to provisioning.",
      "Multi-stage pipeline: Plan → Security Scan → Manual Approval Gate → Apply → Destroy.",
      "Parameterized builds for isolated environment provisioning (dev/test) and reproducible runs."
    ],
    myContribution:
      "Penned declarative Jenkinsfile and Terraform modules; integrated Trivy vulnerability scanners; configured AWS IAM roles and cluster access controls.",
    github: "https://github.com/mridulvermar",
    liveDemo: "https://github.com/mridulvermar",
    stats: [
      { label: "Security", value: "Trivy Scanned" },
      { label: "Cloud", value: "AWS EKS" },
      { label: "Automation", value: "Terraform IaC" }
    ],
    thumbnail: {
      type: "svg-devops",
      primaryColor: "#f43f5e"
    }
  }
];

