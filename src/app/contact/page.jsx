"use client";

import { useState } from "react";
import AnimatedBackground from "../../components/ui/AnimatedBackground";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");
    try {
      const res = await fetch("/contact/route", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("Thank you! Your message has been sent.");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus(`Error: ${data.error}`);
      }
    } catch (err) {
      setStatus(`Error: ${err.message}`);
    }
  };

  return (
    <div className="relative min-h-screen px-6 md:px-12 py-20 overflow-hidden bg-[url('/images/bg-fruits.png')] bg-cover bg-center bg-opacity-5">
      <AnimatedBackground />

      <h1 className="text-4xl md:text-5xl font-display font-extrabold text-primary mb-8 drop-shadow-lg">
        Contact Us
      </h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto flex flex-col gap-6 bg-white/80 backdrop-blur-md p-8 rounded-lg shadow-lg"
      >
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
          rows={5}
          className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button
          type="submit"
          className="bg-primary text-white px-6 py-3 rounded-lg shadow-lg hover:bg-primary/90 transition-colors duration-300"
        >
          Send Message
        </button>
        {status && <p className="text-textSecondary mt-2">{status}</p>}
      </form>
    </div>
  );
}
