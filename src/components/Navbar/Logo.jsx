"use client";

import { motion } from "framer-motion";
import { useLenis } from "@/context/LenisContext";

export default function Logo() {
  const lenis = useLenis();

  const handleHome = () => {
    lenis.current?.scrollTo("#hero", {
      duration: 1.6,
      offset: 0,
    });
  };

  return (
    <motion.button
      onClick={handleHome}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.2 }}
      className="
        flex-shrink-0

        text-3xl
        md:text-4xl

        font-extrabold
        tracking-tight

        cursor-pointer
        select-none

        hover:text-purple-300
        transition-colors
        duration-300
      "
    >
      Rwiddhi
    </motion.button>
  );
}