" use client";

import { motion } from "framer-motion";
import { FolderGit2, ExternalLink } from "lucide-react";
import Image from "next/image";



const statusStyles = {
  completed:
    "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",

  progress:
    "bg-amber-500/10 text-amber-400 border border-amber-500/20",

  upcoming:
    "bg-sky-500/10 text-sky-400 border border-sky-500/20",
};

const ProjectCard = ({
  title,
  subtitle,
  description,
  image,
  tech,
  github,
  demo,
  status,
}) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm"
    >
      {/* Image */}

      <div className="relative h-72 overflow-hidden">

          <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
          />

      </div>

      {/* Content */}

      <div className="p-7">

        <p className="text-primary uppercase text-sm tracking-widest">
          {subtitle}
        </p>

        <h3 className="mt-2 text-2xl font-bold">
          {title}
        </h3>

        <p className="mt-4 text-gray-400 leading-relaxed">
          {description}
        </p>

        {/* Tech Stack */}

        <div className="mt-6 flex flex-wrap gap-2">

          {tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 px-3 py-1 text-sm"
            >
              {item}
            </span>
          ))}

        </div>

        {/* Footer */}

        <div className="mt-8 flex items-center justify-between">

          <span
            className={`rounded-full px-4 py-1 text-sm ${
              statusStyles[status.type]
            }`}
          >
            {status.text}
          </span>

          <div className="flex gap-4">

            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
            >
                Github
              <FolderGit2 className="w-5 h-5 hover:text-primary transition" />
            </a>

            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
            >
                Demo
              <ExternalLink className="w-5 h-5 hover:text-primary transition" />
            </a>

          </div>

        </div>

      </div>
    </motion.div>
  );
};

export default ProjectCard;