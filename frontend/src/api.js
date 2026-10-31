export const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000";

export async function sendMessage(payload) {
  try {
    const res = await fetch(`${API_BASE}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const data = await res.json();
    return {
      success: res.ok,
      message: data.message || (res.ok ? "Message received ✅" : "Failed to send message"),
      data: data.data,
      emailSent: data.emailSent
    };
  } catch (err) {
    console.warn("Backend API unavailable or network error:", err.message);
    return {
      success: false,
      isNetworkError: true,
      message: "Backend server unreachable. You can reach Mridul directly via email."
    };
  }
}

export async function sendChatMessage(message, history = [], language = "en-IN") {
  try {
    const res = await fetch(`${API_BASE}/api/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, history, language })
    });

    const data = await res.json();
    return {
      success: res.ok,
      reply: data.reply || "Sorry, I couldn't process your request.",
      isFallback: data.isFallback,
      model: data.model,
      language: data.language || "en-IN"
    };
  } catch (err) {
    console.warn("Chatbot API unavailable or network error:", err.message);
    return {
      success: false,
      reply: "The portfolio backend is currently offline. You can reach Mridul directly at mridultechno2003@gmail.com!",
      isNetworkError: true,
      language: "en-IN"
    };
  }
}

export async function fetchChatModel() {
  try {
    const res = await fetch(`${API_BASE}/api/chat/model`);
    if (res.ok) {
      const data = await res.json();
      return data.model || "gemini-3.8-flash";
    }
  } catch (e) {
    // Backend offline or unreachable
  }
  return "gemini-3.8-flash";
}
