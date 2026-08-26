"use client";

import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin, FaPinterest, FaTwitter } from "react-icons/fa";
import { useEffect, useState } from "react";
import Weather from "./Weather";

export default function Footer() {

  const [date, setDate] = useState("");

 useEffect(() => {
    const formatted = new Date().toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

    setDate(formatted);
  }, []);

  return (
    <footer className="mt-16 text-center">

      {/* 🧠 QUOTE */}
      <motion.p
        className="text-lg md:text-xl text-gray-300 italic"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        “The winner is just the looser who tried one more time.”
      </motion.p>

      {/* 🌐 SOCIALS */}
      <div className="flex justify-center gap-6 mt-8 text-2xl text-gray-400">
        
        <a href="#" className="hover:text-white hover:scale-110 transition">
          <FaGithub />
        </a>

        <a href="#" className="hover:text-white hover:scale-110 transition">
          <FaLinkedin />
        </a>

        <a href="#" className="hover:text-white hover:scale-110 transition">
          <FaTwitter />
        </a>

        <a href="#" className="hover:text-white hover:scale-110 transition">
          <FaInstagram />
        </a>

        <a href="#" className="hover:text-white hover:scale-110 transition">
          <FaPinterest />
        </a>


        <Weather />

      </div>

      {/* OPTIONAL SMALL TEXT */}
      <p className="text-gray-500 text-sm mt-6">
        © Rwmi. All rights reserved.
        Last updated: {date}
      </p>

    </footer>
  );
}