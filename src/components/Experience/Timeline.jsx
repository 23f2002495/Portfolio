"use client";

import { motion, useTransform } from "framer-motion";

export default function Timeline({
  experiences,
  activeIndex,
  progress,
}) {

  // Smooth progress line
  const lineWidth = useTransform(
    progress,
    [0, 1],
    ["0%", "100%"]
  );

  return (

    <div className="w-full">

      {/* ================= YEARS ================= */}

      <div className="mb-8 flex justify-between">

        {experiences.map((experience, index) => (

          <motion.div

            key={`${experience.year}-${index}`}

            animate={{

              scale: index === activeIndex ? 1.1 : 1,

              opacity: index === activeIndex ? 1 : 0.35,

            }}

            transition={{

              type: "spring",

              stiffness: 250,

              damping: 20,

            }}

          >

            <p
              className={`
                text-lg
                font-semibold

                ${
                  index === activeIndex
                    ? "text-violet-300"
                    : "text-zinc-600"
                }
              `}
            >

              {experience.year}

            </p>

          </motion.div>

        ))}

      </div>

      {/* ================= TIMELINE ================= */}

      <div className="relative">

        {/* Background Line */}

        <div
          className="
            absolute
            top-4
            left-0
            h-[4px]
            w-full
            rounded-full
            bg-zinc-800
          "
        />

        {/* Animated Line */}

        <motion.div

          style={{
            width: lineWidth,
          }}

          className="
            absolute
            top-4
            left-0
            h-[4px]
            rounded-full
            bg-violet-500
          "

        />

        {/* Timeline Nodes */}

        <div className="relative flex justify-between">

          {experiences.map((experience, index) => {

            const completed = index <= activeIndex;

            const current = index === activeIndex;

            return (

              <motion.div

                key={experience.title}

                animate={{

                  scale: current ? 1.25 : 1,

                }}

                transition={{

                  type: "spring",

                  stiffness: 300,

                  damping: 18,

                }}

              >

                <div
                  className={`
                    h-8
                    w-8
                    rounded-full
                    border-4
                    transition-all
                    duration-300

                    ${
                      completed
                        ? "border-violet-300 bg-violet-500 shadow-[0_0_20px_rgba(168,85,247,0.8)]"
                        : "border-zinc-700 bg-zinc-900"
                    }
                  `}
                />

              </motion.div>

            );

          })}

        </div>

      </div>

    </div>

  );

}