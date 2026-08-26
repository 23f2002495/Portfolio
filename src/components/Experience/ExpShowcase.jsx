"use client";

import { AnimatePresence, motion } from "framer-motion";

import Timeline from "./Timeline";
import ExpCard from "./ExpCard";

export default function ExpShowcase({
  experiences,
  activeIndex,
  progress,
}) {

  const currentExperience = experiences[activeIndex];

  return (

    <>

      {/* ================= HEADER ================= */}

      <div
        className="
          mx-auto
          max-w-7xl
          px-6
          pt-24
          md:px-12
          lg:px-16
        "
      >

        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-violet-400">
          Journey
        </p>

        <div className="flex items-end justify-between">

          <div className="max-w-3xl">

            <h2 className="text-5xl font-bold leading-tight text-white md:text-6xl">

              The milestones that

              <br />

              shaped my journey.

            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">

              Every experience added something new—
              technical expertise,
              leadership,
              creativity,
              and the confidence to build larger ideas.

            </p>

          </div>

        </div>

      </div>

      {/* ================= STICKY AREA ================= */}

      <div
        className="
          sticky
          top-0
          h-screen
        "
      >

        <div
          className="
            mx-auto
            flex
            h-full
            max-w-7xl
            flex-col
            px-6
            pt-10
            pb-12
            md:px-12
            lg:px-16
          "
        >

          {/* Year */}

          <motion.h1

            key={currentExperience.year}

            initial={{
              opacity:0,
              y:20,
            }}

            animate={{
              opacity:1,
              y:0,
            }}

            exit={{
              opacity:0,
              y:-20,
            }}

            transition={{
              duration:0.35,
            }}

            className="
              mb-8
              hidden
              self-end
              text-8xl
              font-bold
              text-white
              lg:block
            "

          >

            {currentExperience.year}

          </motion.h1>

          {/* Timeline */}

          <Timeline

            experiences={experiences}

            activeIndex={activeIndex}

            progress={progress}

          />

          {/* Card */}

          <div
            className="
              flex-1
              flex
              items-center
              justify-center
              mt-8
            "
          >

            <AnimatePresence mode="wait">

              <motion.div

                key={currentExperience.title}

                initial={{
                  opacity:0,
                  y:40,
                }}

                animate={{
                  opacity:1,
                  y:0,
                }}

                exit={{
                  opacity:0,
                  y:-40,
                }}

                transition={{
                  duration:0.4,
                }}

                className="
                  w-full
                  max-w-5xl
                "

              >

                <ExpCard
                  experience={currentExperience}
                />

              </motion.div>

            </AnimatePresence>

          </div>

        </div>

      </div>

    </>

  );

}