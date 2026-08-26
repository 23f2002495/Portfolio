"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import { codingProfiles } from "./skillsData";
import LeetCodeStats from "./LeetCodeStats";
import Codechef from "./CodeChef";

export default function CodingProfiles() {
  return (
    <section className="mt-20">

      {/* Heading */}

      <div className="text-center mb-12">

        <h3 className="text-3xl font-bold text-white">
          Coding Profiles
        </h3>

        <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
          I actively solve algorithmic problems across multiple
          competitive programming platforms to strengthen my
          understanding of data structures, algorithms and
          problem-solving.
        </p>

      </div>

      {/* Cards */}

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

        {codingProfiles.map((profile, index) => (

          <motion.a
            key={profile.name}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"

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
              delay: index * 0.1,
            }}

            whileHover={{
              y: -8,
            }}

            className="
              group

              rounded-2xl

              border
              border-white/10

              bg-white/5
              backdrop-blur-md

              p-6

              transition-all
              duration-300

              hover:border-purple-500/40
              hover:bg-purple-500/10
            "
          >

            {/* Logo */}

            <img
              src={profile.icon}
              alt={profile.name}
              className="h-6 w-6 object-contain"
            />

            {/* Name */}

            <h4 className="mt-6 text-xl font-semibold text-white">
              {profile.name}
            </h4>

            {/* Description */}

            <p className="mt-2 text-gray-400 text-sm leading-relaxed">
              {profile.description}
            </p>

            {/* Username */}

            <div className="mt-6 text-sm text-purple-300">
              @{profile.username}
            </div>

            {profile.name === "CodeChef" && <Codechef />}
            {profile.name === "LeetCode" && <LeetCodeStats />}

            {/* Link */}

            <div className="mt-8 flex items-center gap-2 text-purple-400 group-hover:text-purple-300 transition-colors">

              <span className="font-medium">
                View Profile
              </span>

              <ExternalLink
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />

            </div>

          </motion.a>

        ))}

      </div>

    </section>
  );
}