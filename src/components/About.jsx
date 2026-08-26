"use client";

import { motion } from "framer-motion";
import Timeline from "./about-timeline";


import {
  GraduationCap,
  BrainCircuit,
  Clapperboard,
} from "lucide-react";

const cards = [
  {
    title: "Civil Engineering",
    subtitle: "B.Tech • NIT Durgapur",
    icon: GraduationCap,
  },
  {
    title: "Data Science",
    subtitle: "IIT Madras",
    icon: BrainCircuit,
  },
  {
    title: "Actor & Secretary",
    subtitle: "Enteract",
    icon: Clapperboard,
  },
];

export default function About() {

  return (
    <section
      id="about"
      className="min-h-screen px-8 lg:px-20 py-32"
    >
      <div className="max-w-7xl mx-auto">

        {/* Small Heading */}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            uppercase
            tracking-[0.35em]
            text-sm
            text-purple-300
          "
        >
          About Me
        </motion.p>

        {/* Big Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="
            text-5xl
            md:text-7xl
            font-black
            mt-4
            leading-tight
          "
        >
          One man
          <br />

          <span className="text-purple-300">
            many hats.
          </span>
        </motion.h2>

        {/* Intro */}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="
            mt-10
            max-w-3xl
            text-lg
            leading-8
            text-zinc-400
          "
        >
          Engineering taught me to think logically.
          Artificial Intelligence taught me to build
          intelligently. Theatre taught me to communicate
          fearlessly.

          <br />
          <br />

          Together, they've shaped how I solve problems,
          lead teams and create meaningful experiences.
        </motion.p>

        {/* Divider */}

        <div className="h-px bg-white/10 my-16"></div>

        {/* Section Heading */}

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="
            text-3xl
            font-bold
            mb-12
          "
        >
          I wear many hats.
        </motion.h3>

        {/* Cards */}

        <div className="grid md:grid-cols-3 gap-8">

          {cards.map((card, index) => {

            const Icon = card.icon;
            return (
            <motion.div
              key={card.title}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
              }}
            >

              <div
                className="
                  group

                  block

                  rounded-3xl

                  border
                  border-white/10

                  bg-white/5
                  backdrop-blur-xl

                  p-8

                  transition-all
                  duration-300

                  hover:-translate-y-3
                  hover:border-purple-400
                  hover:shadow-[0_15px_40px_rgba(139,92,246,0.25)]
                  cursor-pointer
                "

                onClick={() => {
                    document.getElementById("experience")?.scrollIntoView({
                      behavior: "smooth",
                    });
                }}

              >

                <Icon
                  size={44}
                  strokeWidth={1.8}
                  className="
                    text-purple-300
                    transition-all
                    duration-300
                    group-hover:scale-110
                    group-hover:rotate-6
                  "
                />

                <h4
                  className="
                    mt-6
                    text-2xl
                    font-bold
                  "
                >
                  {card.title}
                </h4>

                <p
                  className="
                    mt-3
                    text-zinc-400
                  "
                >
                  {card.subtitle}
                </p>

                <div
                  className="
                    cursor-pointer
                    mt-10

                    flex
                    items-center
                    gap-2

                    text-purple-300
                    font-medium
                  "
                >
                  Explore

                  <span
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-4
                    "
                  >
                    →
                  </span>

                </div>

              </div>

            </motion.div>
          );

        })}

        </div>

        {/* Quote */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{ once: true }}
          transition={{
            delay: 0.3,
          }}
          className="
            text-center

            my-28
          "
        >

          <p
            className="
              text-4xl
              md:text-5xl

              italic

              font-light

              text-zinc-300
            "
          >
            "Perhaps
            <span className="text-purple-300">
              {" "}all of them.
            </span>
            "
          </p>

        </motion.div>

        {/* Journey */}

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
        >

          <p
            className="
              uppercase
              tracking-[0.3em]
              text-sm
              text-purple-300
            "
          >
            Journey
          </p>

          <h3
            className="
              text-5xl
              font-black
              mt-4
              mb-16
            "
          >
            Every chapter
            <br />
            shaped the next.
          </h3>

          <Timeline />

        </motion.div>

      </div>
    </section>
  );
}