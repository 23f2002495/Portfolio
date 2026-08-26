"use client";

import { AnimatePresence, motion } from "framer-motion";

import { skillCategories } from "./skillsData";
import SkillChip from "./skillChip";

export default function SkillsGrid({ selectedCategory }) {
  const activeCategory = skillCategories.find(
    (category) => category.id === selectedCategory
  );

  if (!activeCategory) return null;

  return (
    <div className="mt-12 min-h-[240px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory.id}
          initial={{
            opacity: 0,
            x: 40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          exit={{
            opacity: 0,
            x: -40,
          }}
          transition={{
            duration: 0.35,
          }}
          className="flex flex-wrap justify-center gap-4"
        >
          {activeCategory.skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.05,
                duration: 0.3,
              }}
            >
              <SkillChip name={skill.name} icon={skill.icon} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}