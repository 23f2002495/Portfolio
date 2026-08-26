"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function SkillChip({ name , icon }) {
  return (
    <motion.div
      whileHover={{
        y: -4,
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.97,
      }}
      transition={{
        type: "spring",
        stiffness: 350,
        damping: 20,
      }}
      className="
        px-5
        py-2.5
        rounded-full

        border
        border-white/10

        bg-white/5
        backdrop-blur-md

        text-sm
        md:text-base

        font-medium
        text-gray-200

        cursor-default

        hover:border-purple-500/40
        hover:bg-purple-500/10
        hover:text-white

        transition-colors
        duration-300
      "
    >
      <div className="flex items-center gap-2">
        <Image
          src={icon}
          alt={name}
          width={18}
          height={18}
        />
        <span>{name}</span>
      </div>
    </motion.div>
  );
}