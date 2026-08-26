"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  const formData = new FormData(e.target);

  const payload = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  try {
    const res = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (data.success) {
      setSuccess(true);
    }
  } catch (err) {
    console.error(err);
  }

  setLoading(false);
};

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-xl space-y-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <h3 className="text-xl font-semibold text-white">
        Send a message , I will get back to you as soon as possible.
      </h3>

      {/* NAME */}
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none"
      />

      {/* EMAIL */}
      <input
        type="email"
        name="email"
        placeholder="Your Email Address"
        required
        className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none"
      />

      {/* MESSAGE */}
      <textarea
        rows="4"
        placeholder="Tell me about your project or idea..."
        name="message"
        required
        className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none"
      />

      {/* BUTTON */}
      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:scale-105 transition disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send Message 🚀"}
      </button>

      {/* SUCCESS MESSAGE */}
      {success === true && (
        <p className="text-green-400 text-sm">
          Message sent successfully ✅
        </p>
      )}
    </motion.form>
  );
}