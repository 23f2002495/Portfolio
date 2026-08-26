"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { title: "About", id: "about" },
  { title: "Projects", id: "projects" },
  { title: "Experience", id: "experience" },
  { title: "Skills", id: "skills" },
  { title: "Contact", id: "contact" },
];

export default function MobileNav({ handleScroll }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative lg:hidden">

      {/* Hamburger */}

      <button
        onClick={() => setOpen(!open)}
        className="
          flex
          flex-col
          justify-center
          items-center
          w-10
          h-10
        "
      >
        <motion.span
          animate={{
            rotate: open ? 45 : 0,
            y: open ? 6 : 0,
          }}
          className="w-6 h-[2px] bg-white rounded-full"
        />

        <motion.span
          animate={{
            opacity: open ? 0 : 1,
          }}
          className="w-6 h-[2px] bg-white rounded-full my-1"
        />

        <motion.span
          animate={{
            rotate: open ? -45 : 0,
            y: open ? -6 : 0,
          }}
          className="w-6 h-[2px] bg-white rounded-full"
        />
      </button>

      {/* Dropdown */}

      <AnimatePresence>

        {open && (

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              y: -10,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              y: -10,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              absolute
              right-0
              mt-4

              w-64

              rounded-3xl

              bg-white/10
              backdrop-blur-2xl

              border
              border-white/10

              shadow-[0_8px_30px_rgba(0,0,0,0.35)]

              overflow-hidden

              z-50
            "
          >

            <div className="flex flex-col p-4">

              {links.map((link) => (

                <button
                  key={link.id}
                  onClick={() => {
                    handleScroll(link.id);
                    setOpen(false);
                  }}
                  className="
                    text-left

                    px-4
                    py-3

                    rounded-xl

                    text-white

                    transition-all
                    duration-300

                    hover:bg-white/10
                    hover:text-purple-300
                    hover:translate-x-1
                  "
                >
                  {link.title}
                </button>

              ))}

              <div className="my-3 border-t border-white/10"></div>

              <div className="px-4 py-2 flex justify-between items-center">

                <span className="text-gray-300">
                  Theme
                </span>

              </div>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </div>
  );
}