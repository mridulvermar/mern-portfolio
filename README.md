# Mridul Verma R — AI & Full-Stack Developer Portfolio

<div align="center">

![React](https://img.shields.io/badge/React_18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite_5-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB_Atlas-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Google Gemini](https://img.shields.io/badge/Google_Gemini_AI-4285F4?style=for-the-badge&logo=google&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue)
![Vercel](https://img.shields.io/badge/Vercel_Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)

<br/>

**A modern, production-grade personal software engineer portfolio engineered with Bento Grid layouts, glassmorphism aesthetics, a multilingual voice-enabled Gemini AI chatbot (English, Hindi, Tamil), real-time email dispatch, and interactive engineering deep-dives.**

[Live Demo](https://mern-portfolio-five-rho.vercel.app/) • [Report Bug](https://github.com/mridulvermar/mern-portfolio/issues) • [Request Feature](https://github.com/mridulvermar/mern-portfolio/issues)

</div>

---

## 🌟 Key Highlights

- **Bento Grid Architecture:** Inspired by modern editorial design with spacious rounded cards, electric blue/violet gradients, and balanced 12-column layouts.
- **Multilingual AI Voice Assistant:** Powered by Google Gemini (`gemini-3.8-flash`) and the Web Speech API. Supports speech-to-text (STT) mic input, text-to-speech (TTS) voice playback, and auto-detects English, Hindi (हिन्दी), and Tamil (தமிழ்).
- **Dark & Light Mode System:** Smooth CSS variable transitions with system theme detection and persistent manual toggling via `localStorage`.
- **Instant Email Contact System:** Integrated with Nodemailer over Gmail SMTP; delivers user inquiries directly to the developer's inbox with `replyTo` verification.
- **Project Deep-Dive Modals:** Staggered Framer Motion reveals, custom vector graphics per project, technology pills, and direct repository/live demo links.
- **Accessible & Responsive:** Fluid responsiveness across mobile, tablet, laptop, and ultra-wide screens with full support for reduced-motion preferences.

---

## 🚀 Featured Engineering Projects

| Project | Category | Live Demo | Repository | Highlights |
| :--- | :--- | :---: | :---: | :--- |
| **Career Outcome Analysis System** | AI & Predictive Analytics | [Live Demo](https://career-outcome-system-5yps.vercel.app/) | [GitHub](https://github.com/mridulvermar/career-outcome-system) | AI-powered career prediction, multi-axis Recharts radar skill gap analysis, and market demand analytics. |
| **Career 2.0 — Earn with Your Wisdom** | AI & Social Impact | [Live Demo](https://mavericks-hackathon-nine.vercel.app/) | [GitHub](https://github.com/mridulvermar/mavericks_hackathon) | Livelihood platform built during Mavericks Hackathon empowering senior citizens and homemakers with AI guidance. |
| **Campus Navigation & Facility System** | Spatial Computing & GIS | [Live Demo](https://campus-navigation-app-server.vercel.app/) | [GitHub](https://github.com/mridulvermar/campus_navigation_app) | Indoor/outdoor campus navigation using Dijkstra shortest-path pathfinding (<50ms) & automated room booking. |
| **Khrishipalan (Farmer AI Assistant)** | Computer Vision & NLP | [Details](https://github.com/nagasundharam/crop_disease_predictor) | [GitHub](https://github.com/nagasundharam/crop_disease_predictor) | Deep Learning CNN leaf disease classifier (>95% accuracy) with regional voice assistant in Tamil, Hindi, and English. |
| **Cravely Food Ordering Platform** | Full-Stack MERN | [Live Demo](https://mern-food-ordering-app-five.vercel.app/) | [GitHub](https://github.com/mridulvermar/mern-food-ordering-app.git) | Real-time WebSocket order tracking, role-based access control, and 30% MongoDB query performance optimization. |
| **Jenkins AWS EKS CI/CD Pipeline** | Cloud & DevOps | [Details](https://github.com/mridulvermar) | [GitHub](https://github.com/mridulvermar) | Automated Terraform IaC provisioning for Kubernetes with Trivy vulnerability scanning and manual approval gates. |

---

## 🛠️ Technology Stack

### Frontend
- **Framework:** React 18 with Vite
- **Styling:** Tailwind CSS v4 & custom CSS variables
- **Motion & Transitions:** Framer Motion
- **Icons:** Lucide React & custom SVG brand icons
- **Speech & Voice:** Web Speech API (SpeechRecognition & SpeechSynthesis)
- **Data Visualizations:** Custom responsive SVG system graphics & Recharts

### Backend
- **Runtime:** Node.js & Express.js
- **Database:** MongoDB Atlas with Mongoose ODM
- **AI Engine:** Google Gemini Generative AI SDK (`@google/genai`)
- **Email Service:** Nodemailer with Gmail SMTP
- **Security & Networking:** CORS middleware, sanitized request validation

---

## 📂 Project Architecture

```plaintext
mern-portfolio/
├── backend/
│   ├── config/
│   │   └── db.js                 # Resilient MongoDB Atlas connection
│   ├── routes/
│   │   ├── chatRoutes.js         # Gemini AI multilingual endpoint & guardrails
│   │   └── contactRoutes.js      # Contact message handler & email dispatcher
│   ├── utils/
│   │   └── sendEmail.js          # Nodemailer SMTP transporter & templates
│   ├── .env.example              # Environment variables template
│   ├── server.js                 # Express server bootstrap
│   └── package.json
│
├── frontend/
│   ├── public/
│   │   ├── favicon.svg           # High-resolution vector favicon
│   │   └── resume.pdf            # Mridul Verma R's downloadable resume
│   ├── src/
│   │   ├── components/
│   │   │   ├── About.jsx         # Biography, education highlights, and milestones
│   │   │   ├── Chatbot.jsx       # Voice-enabled Gemini AI chat modal
│   │   │   ├── Contact.jsx       # Contact form with validation & status feedback
│   │   │   ├── Education.jsx     # Degree timelines, coursework, and honors
│   │   │   ├── Experience.jsx    # ShadowFox internship & verified credentials
│   │   │   ├── Footer.jsx        # Social handles, back-to-top, and copyright
│   │   │   ├── Hero.jsx          # Animated designation cycler & CTA buttons
│   │   │   ├── Icons.jsx         # Custom SVG brand icons (GitHub, LinkedIn, LeetCode)
│   │   │   ├── Navbar.jsx        # Glassmorphism header with theme toggle
│   │   │   ├── Projects.jsx      # Bento Grid project showcase & modal deep-dives
│   │   │   ├── ProjectThumbnail.jsx # Custom SVG project preview graphics
│   │   │   └── Skills.jsx        # 6 Categorized technical skill matrices
│   │   ├── context/
│   │   │   └── ThemeContext.jsx  # Dark/light theme provider & state persistence
│   │   ├── data/
│   │   │   ├── portfolioData.js  # Verified bio, skills, experience, and certificates
│   │   │   └── projectsData.js   # Project metadata, tech stacks, and live URLs
│   │   ├── styles/
│   │   │   └── global.css        # Tailwind directives & glassmorphism utilities
│   │   ├── App.jsx               # Root layout & component composition
│   │   └── main.jsx              # React DOM entry point
│   ├── vite.config.js
│   └── package.json
│
├── .gitignore                    # Secrets & build artifact exclusion
└── README.md
```

---

## ⚡ Getting Started Locally

### 1. Prerequisites
- **Node.js** (v18.0.0 or higher recommended)
- **npm** or **pnpm**
- **MongoDB Atlas** cluster connection string
- **Google Gemini API Key** (from [Google AI Studio](https://aistudio.google.com/app/apikey))
- **Gmail App Password** (optional, for email delivery via [Google Account Security](https://myaccount.google.com/apppasswords))

### 2. Clone the Repository
```bash
git clone https://github.com/mridulvermar/mern-portfolio.git
cd mern-portfolio
```

### 3. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory (refer to `.env.example`):
```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/portfolio

# Email Notification Configuration (Gmail SMTP)
EMAIL_SERVICE=gmail
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_16_character_app_password
EMAIL_RECEIVER=your_email@gmail.com

# Google Gemini Generative AI
GEMINI_API_KEY=your_gemini_api_key_here
GEMINI_MODEL=gemini-3.8-flash
```

Start the backend server:
```bash
npm start
# Server will run on http://localhost:5000
```

### 4. Frontend Setup
In a new terminal window:
```bash
cd frontend
npm install
npm run dev
# Vite dev server will run on http://localhost:5173
```

---

## 🌐 API Reference

### Contact API
- **Endpoint:** `POST /api/contact`
- **Payload:**
  ```json
  {
    "name": "Alex Mercer",
    "email": "alex@example.com",
    "subject": "Software Engineering Opportunity",
    "message": "Hi Mridul, we'd like to discuss an opportunity..."
  }
  ```
- **Response:** `200 OK` (Message saved to MongoDB and notification email sent).

### AI Chatbot API
- **Endpoint:** `POST /api/chat`
- **Payload:**
  ```json
  {
    "message": "Tell me about Mridul's Career Outcome Analysis System",
    "preferredLang": "en-IN"
  }
  ```
- **Response:**
  ```json
  {
    "reply": "Mridul's Career Outcome Analysis System is an AI-powered platform...",
    "lang": "en-IN"
  }
  ```
- **Supported Languages:**
  - `en-IN` (English)
  - `hi-IN` (हिन्दी)
  - `ta-IN` (தமிழ்)

---

## 🔒 Security & Privacy

- Sensitive credentials (`.env`, database URIs, API keys, and email passwords) are excluded from version control via `.gitignore`.
- The AI assistant includes prompt guardrails enforcing strict scope boundaries—it will only answer questions regarding Mridul's verified profile, skills, education, and career opportunities.

---

## 👨‍💻 Author

**Mridul Verma R**  
*AI & Full-Stack Engineer*  
- **Email:** [mridultechno2003@gmail.com](mailto:mridultechno2003@gmail.com)  
- **LinkedIn:** [linkedin.com/in/mridul-verma-r/](https://www.linkedin.com/in/mridul-verma-r/)  
- **GitHub:** [github.com/mridulvermar](https://github.com/mridulvermar)  
- **LeetCode:** [leetcode.com/u/mridultechno2003/](https://leetcode.com/u/mridultechno2003/) (300+ Problems Solved)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

