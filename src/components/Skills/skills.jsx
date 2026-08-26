"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import CategorySelector from "./categorySelector";
import SkillsGrid from "./skillsGrid";
import CurrentFocus from "./currentFocus";
import CodingProfiles from "./codingProfiles";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("programming");

  return (
    <section
      id="skills"
      className="relative py-28 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* =========================
            Section Heading
        ========================== */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Skills
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-lg text-gray-400 leading-relaxed">
            Technologies, frameworks and tools I've used to build
            full-stack applications, machine learning systems and
            scalable software solutions.
          </p>
        </motion.div>

        {/* =========================
            Skills Container
        ========================== */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="
            mt-16

            rounded-[32px]

            border
            border-white/10

            bg-white/[0.03]

            backdrop-blur-xl

            shadow-[0_0_40px_rgba(139,92,246,0.08)]

            p-8
            md:p-12
          "
        >
          <CategorySelector
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />

          <SkillsGrid
            selectedCategory={selectedCategory}
          />
        </motion.div>

        {/* Current Focus */}

        <CurrentFocus />

        {/* Coding Profiles */}

        <CodingProfiles />

      </div>
    </section>
  );
}