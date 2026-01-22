import { useState } from "react";
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
