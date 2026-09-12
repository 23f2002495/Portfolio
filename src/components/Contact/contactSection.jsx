"use client";

import { motion } from "framer-motion";
import ContactForm from "./contactForm";
import Footer from "./footer";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-24 px-6 md:px-20">

      {/* 🔥 HERO HEADER */}
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          Let’s Connect 
        </h1>
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          Have an idea, opportunity, or just want to connect?
          I’m always open to meaningful conversations.
        </p>
      </div>

      {/* 💬 MAIN GRID */}
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold text-white">
            Let’s talk 👋
          </h2>

          <p className="text-gray-400 leading-relaxed">
            I enjoy working on meaningful projects — whether it's machine learning systems,
            web applications, or creative ideas.
          </p>

          <p className="text-gray-400">
            If you have something interesting in mind, feel free to reach out.
          </p>

          {/* CONTACT INFO */}
          <div className="space-y-3 pt-4 text-gray-300">
            <p>📧 mitrarwiddhi@gmail.com</p>
            <p>📍 Kolkata , West Bengal , India</p>
          </div>

          {/* RESUME BUTTON */}
          <a
            href="/Resume (2).pdf"
            className="inline-block mt-4 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:scale-105 transition"
          >
            My Resume
          </a>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ContactForm />
        </motion.div>

      </div>

      {/* 🌈 DIVIDER */}
      <div className="mt-24 h-[1px] w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

      {/* 🔻 FOOTER */}
      <Footer />
    </section>
  );
}