"use client";

import { motion } from "framer-motion";

export default function TimelineCard({
  year,
  icon,
  title,
  subtitle,
  isLast,
  left,
}) {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-8 items-start"
      initial={{
        opacity: 0,
        x: left ? -60 : 60,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* ---------- LEFT CONTENT ---------- */}

      <div
        className={`hidden md:block ${
          left ? "text-right pr-8" : "invisible"
        }`}
      >
        {left && (
          <>
            <p className="text-sm text-purple-300">{year}</p>

            <h3 className="text-2xl font-bold mt-1">{title}</h3>

            <p className="text-gray-300 mt-2">{subtitle}</p>
          </>
        )}
      </div>

      {/* ---------- TIMELINE ---------- */}

      <div className="flex flex-col items-center">

        <motion.div
          whileHover={{
            scale: 1.2,
          }}
          className="w-12 h-12 rounded-full
                     bg-purple-600
                     flex items-center justify-center
                     text-xl
                     shadow-[0_0_20px_rgba(168,85,247,0.5)]"
        >
          {icon}
        </motion.div>

        {!isLast && (
          <div className="w-[2px] h-28 bg-purple-500 mt-2" />
        )}
      </div>

      {/* ---------- RIGHT CONTENT ---------- */}

      <div
        className={`hidden md:block ${
          !left ? "pl-8" : "invisible"
        }`}
      >
        {!left && (
          <>
            <p className="text-sm text-purple-300">{year}</p>

            <h3 className="text-2xl font-bold mt-1">{title}</h3>

            <p className="text-gray-300 mt-2">{subtitle}</p>
          </>
        )}
      </div>

      {/* ---------- MOBILE LAYOUT ---------- */}

      <div className="md:hidden ml-16 -mt-12 pb-16">

        <p className="text-sm text-purple-300">{year}</p>

        <h3 className="text-xl font-bold mt-1">{title}</h3>

        <p className="text-gray-300 mt-2">{subtitle}</p>

      </div>
    </motion.div>
  );
}