const fs = require("fs");
const path = require("path");

// helper to create folder
function makeDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// helper to create file with content
function makeFile(filePath, content = "") {
  makeDir(path.dirname(filePath));
  fs.writeFileSync(filePath, content, "utf8");
}

// ROOT folders
makeDir("backend");
makeDir("frontend");

// ---------------- BACKEND ----------------
makeDir("backend/config");
makeDir("backend/models");
makeDir("backend/routes");

makeFile(
  "backend/package.json",
  `{
  "name": "portfolio-backend",
  "version": "1.0.0",
  "main": "server.js",
  "type": "module",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "mongoose": "^8.5.3"
  },
  "devDependencies": {
    "nodemon": "^3.1.4"
  }
}`
);

makeFile(
  "backend/.env",
  `PORT=5000
MONGO_URI=your_mongodb_connection_string_here
`
);

makeFile(
  "backend/config/db.js",
  `import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected:", conn.connection.host);
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  }
};
`
);

makeFile(
  "backend/models/ContactMessage.js",
  `import mongoose from "mongoose";

const contactMessageSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 60 },
    email: { type: String, required: true, trim: true, maxlength: 80 },
    message: { type: String, required: true, trim: true, maxlength: 1000 }
  },
  { timestamps: true }
);

export default mongoose.model("ContactMessage", contactMessageSchema);
`
);

makeFile(
  "backend/routes/contactRoutes.js",
  `import express from "express";
import ContactMessage from "../models/ContactMessage.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const saved = await ContactMessage.create({ name, email, message });

    return res.status(201).json({
      message: "Message received ✅",
      data: saved
    });
  } catch (err) {
    return res.status(500).json({
      message: "Server error",
      error: err.message
    });
  }
});

export default router;
`
);

makeFile(
  "backend/server.js",
  `import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Portfolio Backend Running ✅");
});

app.use("/api/contact", contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running on port", PORT));
`
);

// ---------------- FRONTEND ----------------
makeDir("frontend/public");
makeDir("frontend/src/components");
makeDir("frontend/src/data");
makeDir("frontend/src/styles");

makeFile(
  "frontend/package.json",
  `{
  "name": "portfolio-frontend",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.1",
    "vite": "^5.4.1"
  }
}`
);

makeFile(
  "frontend/.env",
  `VITE_API_BASE=http://localhost:5000
`
);

makeFile(
  "frontend/vite.config.js",
  `import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()]
});
`
);

makeFile(
  "frontend/index.html",
  `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Portfolio</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
`
);

// Resume placeholder
makeFile(
  "frontend/public/resume.pdf",
  "PUT YOUR RESUME PDF HERE (replace this file with real resume.pdf)"
);

makeFile(
  "frontend/src/styles/global.css",
  `:root {
  --bg: #0b1220;
  --card: rgba(255, 255, 255, 0.06);
  --border: rgba(255, 255, 255, 0.12);
  --text: rgba(255, 255, 255, 0.92);
  --muted: rgba(255, 255, 255, 0.70);
  --brand: #7c3aed;
}

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  font-family: ui-sans-serif, system-ui, Arial;
  background: radial-gradient(circle at top, rgba(124, 58, 237, 0.25), transparent 40%),
              var(--bg);
  color: var(--text);
}

a { color: inherit; text-decoration: none; }
.container { width: min(1100px, 92%); margin: auto; }

.section { padding: 70px 0; }
.section h2 { font-size: 28px; margin-bottom: 18px; }

.subtitle {
  color: var(--muted);
  margin-bottom: 25px;
  line-height: 1.6;
}

.card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 18px;
  backdrop-filter: blur(10px);
}

.grid { display: grid; gap: 18px; }

.btn {
  display: inline-flex;
  gap: 10px;
  align-items: center;
  padding: 12px 16px;
  border-radius: 14px;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.06);
  color: var(--text);
  cursor: pointer;
  transition: 0.2s;
}

.btn:hover {
  transform: translateY(-2px);
  border-color: rgba(124, 58, 237, 0.8);
}

.badge {
  display: inline-block;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(124, 58, 237, 0.15);
  border: 1px solid rgba(124, 58, 237, 0.35);
  font-size: 13px;
}

.small { color: var(--muted); font-size: 14px; }

.nav {
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(11, 18, 32, 0.65);
  border-bottom: 1px solid var(--border);
  backdrop-filter: blur(12px);
}

.nav-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 0;
}

.nav-links { display: flex; gap: 14px; flex-wrap: wrap; }

.nav-links a {
  padding: 8px 12px;
  border-radius: 12px;
  color: var(--muted);
}

.nav-links a:hover {
  border: 1px solid var(--border);
  color: var(--text);
}

.hero { padding: 80px 0 40px 0; }

.hero h1 {
  font-size: clamp(32px, 4vw, 54px);
  margin-bottom: 12px;
}

.hero p {
  max-width: 820px;
  color: var(--muted);
  line-height: 1.7;
  font-size: 16px;
}

.hero-actions { margin-top: 18px; display: flex; gap: 12px; flex-wrap: wrap; }

.footer {
  padding: 30px 0;
  border-top: 1px solid var(--border);
  color: var(--muted);
  text-align: center;
}

input, textarea {
  width: 100%;
  margin-top: 10px;
  padding: 12px 14px;
  border-radius: 14px;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.05);
  color: var(--text);
  outline: none;
}

textarea { min-height: 120px; resize: vertical; }

@media (min-width: 850px) {
  .grid-2 { grid-template-columns: 1fr 1fr; }
  .grid-3 { grid-template-columns: repeat(3, 1fr); }
}
`
);

makeFile(
  "frontend/src/data/portfolioData.js",
  `export const portfolioData = {
  name: "Mridul Verma R",
  title: "AI & Fullstack Engineer",
  summary:
    "AI and Full Stack Developer with hands-on experience building end-to-end applications using MERN Stack and deploying ML models to production. Strong foundation in DSA, REST APIs, and CI/CD.",

  links: {
    email: "your-email@gmail.com",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/in/",
    leetcode: "https://leetcode.com/"
  },

  skills: {
    Programming: ["Java", "Python", "JavaScript (ES6)"],
    Frontend: ["React.js", "HTML", "CSS"],
    Backend: ["Node.js", "Express.js", "REST APIs", "JWT Auth"],
    Database: ["MongoDB", "Mongoose"],
    "AI / ML": ["CNN", "Transfer Learning"],
    "Tools & DevOps": ["Git/GitHub", "AWS (Basics)", "CI/CD (Basics)"]
  },

  projects: [
    {
      name: "Farmer AI Assistant",
      time: "Sep 2025 – Nov 2025",
      points: [
        "CNN-based crop disease identification system",
        "Voice-supported multilingual chatbot",
        "Integrated market prices and weather insights"
      ]
    }
  ],

  experience: [
    {
      role: "AI/ML Developer Intern",
      company: "ShadowFox",
      location: "Erode, India",
      time: "Oct 2025 – Nov 2025",
      points: [
        "Built end-to-end ML workflow: data preprocessing → training → deployment"
      ]
    }
  ],

  education: [
    {
      degree: "B.E. CSE",
      institute: "Bannari Amman Institute of Technology",
      time: "Aug 2023 – May 2027",
      score: "CGPA: 8.74"
    }
  ],

  certifications: [
    "300+ LeetCode Problems Solved",
    "NPTEL: Responsible and Safe AI Systems",
    "Oracle AI Foundations Associate (2025)"
  ]
};
`
);

makeFile(
  "frontend/src/api.js",
  `export const API_BASE = import.meta.env.VITE_API_BASE;

export async function sendMessage(payload) {
  const res = await fetch(\`\${API_BASE}/api/contact\`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  return res.json();
}
`
);

makeFile(
  "frontend/src/main.jsx",
  `import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
`
);

makeFile(
  "frontend/src/App.jsx",
  `import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Education from "./components/Education.jsx";
import Certifications from "./components/Certifications.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
    </>
  );
}
`
);

// Components
makeFile(
  "frontend/src/components/Navbar.jsx",
  `export default function Navbar() {
  const nav = [
    ["About", "about"],
    ["Skills", "skills"],
    ["Projects", "projects"],
    ["Experience", "experience"],
    ["Education", "education"],
    ["Certifications", "certifications"],
    ["Contact", "contact"]
  ];

  return (
    <header className="nav">
      <div className="container nav-inner">
        <div style={{ fontWeight: 700 }}>Mridul.dev</div>

        <nav className="nav-links">
          {nav.map(([label, id]) => (
            <a key={id} href={\`#\${id}\`}>
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
`
);

makeFile(
  "frontend/src/components/Hero.jsx",
  `import { portfolioData } from "../data/portfolioData";

export default function Hero() {
  const { name, title, summary, links } = portfolioData;

  return (
    <section className="hero">
      <div className="container">
        <div className="card">
          <h1>{name}</h1>
          <div className="badge" style={{ marginBottom: 12 }}>{title}</div>
          <p>{summary}</p>

          <div className="hero-actions">
            <a className="btn" href="/resume.pdf" target="_blank" rel="noreferrer">
              📄 Resume
            </a>
            <a className="btn" href={links.github} target="_blank" rel="noreferrer">
              💻 GitHub
            </a>
            <a className="btn" href={links.linkedin} target="_blank" rel="noreferrer">
              🔗 LinkedIn
            </a>
            <a className="btn" href={links.leetcode} target="_blank" rel="noreferrer">
              🧠 LeetCode
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
`
);

makeFile(
  "frontend/src/components/About.jsx",
  `import { portfolioData } from "../data/portfolioData";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <h2>About</h2>
        <p className="subtitle">{portfolioData.summary}</p>
      </div>
    </section>
  );
}
`
);

makeFile(
  "frontend/src/components/Skills.jsx",
  `import { portfolioData } from "../data/portfolioData";

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section className="section" id="skills">
      <div className="container">
        <h2>Skills</h2>

        <div className="grid grid-2">
          {Object.keys(skills).map((group) => (
            <div className="card" key={group}>
              <h3 style={{ marginBottom: 10 }}>{group}</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {skills[group].map((s) => (
                  <span className="badge" key={s}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
`
);

makeFile(
  "frontend/src/components/Projects.jsx",
  `import { portfolioData } from "../data/portfolioData";

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <h2>Projects</h2>
        <p className="subtitle">Some of my best work built using MERN + AI + DevOps concepts.</p>

        <div className="grid grid-3">
          {portfolioData.projects.map((p) => (
            <div className="card" key={p.name}>
              <h3 style={{ marginBottom: 6 }}>{p.name}</h3>
              <div className="small" style={{ marginBottom: 12 }}>{p.time}</div>

              <ul style={{ paddingLeft: 18, color: "var(--muted)", lineHeight: 1.7 }}>
                {p.points.map((pt, idx) => (
                  <li key={idx}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
`
);

makeFile(
  "frontend/src/components/Experience.jsx",
  `import { portfolioData } from "../data/portfolioData";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <h2>Experience</h2>

        <div className="grid">
          {portfolioData.experience.map((e) => (
            <div className="card" key={e.role}>
              <h3>{e.role}</h3>
              <div className="small">
                {e.company} • {e.location} • {e.time}
              </div>

              <ul style={{ paddingLeft: 18, marginTop: 12, color: "var(--muted)", lineHeight: 1.7 }}>
                {e.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
`
);

makeFile(
  "frontend/src/components/Education.jsx",
  `import { portfolioData } from "../data/portfolioData";

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <h2>Education</h2>

        <div className="grid grid-2">
          {portfolioData.education.map((ed) => (
            <div className="card" key={ed.degree}>
              <h3>{ed.degree}</h3>
              <div className="small">{ed.institute}</div>
              <div className="small">{ed.time}</div>
              <div className="badge" style={{ marginTop: 10 }}>{ed.score}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
`
);

makeFile(
  "frontend/src/components/Certifications.jsx",
  `import { portfolioData } from "../data/portfolioData";

export default function Certifications() {
  return (
    <section className="section" id="certifications">
      <div className="container">
        <h2>Achievements & Certifications</h2>

        <div className="grid grid-2">
          {portfolioData.certifications.map((c) => (
            <div className="card" key={c}>
              ✅ {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
`
);

makeFile(
  "frontend/src/components/Contact.jsx",
  `import { useState } from "react";
import { sendMessage } from "../api";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const onChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const res = await sendMessage(form);

    if (res?.message?.includes("✅")) {
      setStatus("Message sent ✅");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus(res?.message || "Something went wrong ❌");
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <h2>Contact</h2>
        <p className="subtitle">Send me a message. It will be saved in MongoDB.</p>

        <div className="card">
          <form onSubmit={onSubmit}>
            <input
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={onChange}
            />
            <input
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={onChange}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={onChange}
            />
            <button className="btn" type="submit" style={{ marginTop: 12 }}>
              ✉️ Send Message
            </button>

            {status && <p className="small" style={{ marginTop: 12 }}>{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
`
);

makeFile(
  "frontend/src/components/Footer.jsx",
  `export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        © {new Date().getFullYear()} Mridul Verma • Built with MERN
      </div>
    </footer>
  );
}
`
);

console.log("✅ MERN Portfolio files created successfully!");
console.log("Next steps:");
console.log("1) cd backend && npm install && npm run dev");
console.log("2) cd frontend && npm install && npm run dev");
console.log("3) Replace frontend/public/resume.pdf with your real resume PDF");
