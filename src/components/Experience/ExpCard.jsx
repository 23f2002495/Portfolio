"use client";

import { ArrowUpRight } from "lucide-react";

export default function ExpCard({ experience }) {

  return (

    <div
      className="
        relative
        overflow-hidden

        rounded-3xl

        border
        border-white/10

        backdrop-blur-xl

        shadow-2xl
      "
    >

      {/* Glow */}

      <div
        className="
          absolute
          -right-20
          -top-20

          h-72
          w-72

          rounded-full

          bg-violet-500/10

          blur-[120px]
        "
      />

      {/* Left Accent */}

      <div
        className="
          absolute
          left-0
          top-0

          h-full
          w-1.5

          bg-gradient-to-b
          from-violet-300
          via-violet-500
          to-fuchsia-500
        "
      />

      <div className="relative p-10">

        {/* Top */}

        <div className="flex items-center justify-between">

          <span
            className="
              rounded-full
              bg-violet-500/10
              px-4
              py-2

              text-sm
              font-medium

              tracking-wider

              text-violet-300
            "
          >
            {experience.category}
          </span>

          <ArrowUpRight
            className="
              text-zinc-500
            "
          />

        </div>

        {/* Title */}

        <h2
          className="
            mt-8

            text-4xl
            font-bold

            text-white
          "
        >
          {experience.title}
        </h2>

        {/* Description */}

        <p
          className="
            mt-6

            max-w-3xl

            text-lg

            leading-8

            text-zinc-400
          "
        >
          {experience.description}
        </p>

        {/* Divider */}

        <div
          className="
            my-8

            h-px

            bg-white/10
          "
        />

        {/* Skills */}

        <div className="flex flex-wrap gap-3">

          {experience.skills.map((skill) => (

            <span
              key={skill}
              className="
                rounded-full

                border
                border-white/10

                bg-white/5

                px-4
                py-2

                text-sm

                text-zinc-300
              "
            >
              {skill}
            </span>

          ))}

        </div>

      </div>

    </div>

  );

}