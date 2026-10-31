import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { connectDB } from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from backend folder if available
dotenv.config({ path: path.resolve(__dirname, ".env") });
dotenv.config(); // Fallback to root or environment-injected vars

// Attempt initial DB connection
connectDB().catch((err) => console.warn("Initial DB connection deferred:", err.message));

const app = express();

// Allowed origins: localhost, any .vercel.app domain, or custom FRONTEND_URL
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  process.env.FRONTEND_URL
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (curl, mobile, server-to-server)
      if (!origin) return callback(null, true);
      if (
        allowedOrigins.includes(origin) ||
        origin.endsWith(".vercel.app") ||
        origin.includes("localhost")
      ) {
        return callback(null, true);
      }
      return callback(null, true); // Allow all valid origins for public portfolio
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
  })
);

app.use(express.json());

// Ensure database connection is ready for incoming requests
app.use(async (req, res, next) => {
  await connectDB();
  next();
});

// Root & Health Check Endpoints
app.get("/", (req, res) => {
  res.json({
    status: "online",
    service: "Mridul Verma Portfolio Backend",
    runtime: "Vercel Serverless Function",
    timestamp: new Date().toISOString()
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "healthy",
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// Routes
app.use("/api/contact", contactRoutes);
app.use("/api/chat", chatRoutes);

// Only listen on port in local development (not when run as a Vercel Serverless Function)
if (!process.env.VERCEL) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Portfolio backend server running on port ${PORT}`);
  });
}

export default app;
