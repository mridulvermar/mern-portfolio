import express from "express";
import ContactMessage from "../models/ContactMessage.js";
import { sendContactNotification } from "../utils/sendEmail.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // 1. Save message to MongoDB
    const saved = await ContactMessage.create({
      name: name.trim(),
      email: email.trim(),
      message: message.trim()
    });

    // 2. Send email notification to Mridul Verma
    const emailResult = await sendContactNotification({
      name: name.trim(),
      email: email.trim(),
      message: message.trim()
    });

    return res.status(201).json({
      message: "Message received ✅",
      data: saved,
      emailSent: emailResult.sent
    });
  } catch (err) {
    console.error("Error in contact route:", err);
    return res.status(500).json({
      message: "Server error",
      error: err.message
    });
  }
});

export default router;
