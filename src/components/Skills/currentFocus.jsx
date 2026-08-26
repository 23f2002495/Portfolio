"use client";

import { motion } from "framer-motion";
import { currentFocus } from "./skillsData";

export default function CurrentFocus() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
      }}
      className="
        mt-20
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-md
        p-8
      "
    >
      <div className="flex flex-col lg:flex-row items-center gap-10">

        {/* Left Side */}

        <div className="flex-1">

          <h3 className="text-2xl md:text-3xl font-bold text-white">
            🚀 Currently Working On
          </h3>

          <p className="mt-3 text-gray-400 leading-relaxed">
            I'm continuously expanding my knowledge by exploring
            modern AI systems, advanced machine learning techniques,
            and scalable software engineering practices.
          </p>

        </div>

        {/* Right Side */}

        <div className="flex-1 grid gap-4">

          {currentFocus.map((item, index) => (

            <motion.div
              key={item}
              initial={{
                opacity: 0,
                x: 20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
              }}
              className="
                flex
                items-center
                gap-3

                rounded-xl

                border
                border-white/10

                bg-black/20

                px-5
                py-4
              "
            >

              <span className="text-green-400 text-lg">
                ✓
              </span>

              <span className="text-gray-200">
                {item}
              </span>

            </motion.div>

          ))}

        </div>

      </div>
    </motion.div>
  );
}