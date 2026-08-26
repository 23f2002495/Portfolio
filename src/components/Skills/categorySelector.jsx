"use client";

import { motion } from "framer-motion";
import { skillCategories } from "./skillsData";

export default function CategorySelector({
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {skillCategories.map((category) => {
        const isActive = selectedCategory === category.id;

        return (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`
              relative px-6 py-3 border-r-2 transition-all duration-300
              ${
                isActive
                  ? "border-purple-500 text-white"
                  : "border-white/10 bg-white/5 text-gray-300 hover:border-purple-500/40 hover:text-white hover:bg-white/10"
              }
            `}
          >
            {isActive && (
              <motion.div
                layoutId="activeSkillCategory"
                className="absolute inset-0 border border-purple-500 border-r-2 bg-purple-600"
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 30,
                }}
              />
            )}

            <span className="relative z-10">{category.title}</span>
          </button>

          
        );
      })}
    </div>
  );
}