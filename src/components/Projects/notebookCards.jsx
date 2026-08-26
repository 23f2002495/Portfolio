" use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const NotebookCard = ({
  title,
  description,
  image,
  tech,
  notebook,
}) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
    >
      {/* Notebook Preview */}

      <div className="overflow-hidden h-44">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}

      <div className="p-5">

        <h3 className="text-xl font-semibold">
          {title}
        </h3>

        <p className="mt-3 text-sm text-gray-400 leading-relaxed">
          {description}
        </p>

        {/* Tech Stack */}

        <div className="mt-5 flex flex-wrap gap-2">

          {tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 px-3 py-1 text-xs"
            >
              {item}
            </span>
          ))}

        </div>

        {/* Footer */}

        <div className="mt-6 flex justify-end">

          <a
            href={notebook}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary transition group-hover:translate-x-1"
          >
            View Notebook

            <ExternalLink className="w-4 h-4" />

          </a>

        </div>

      </div>
    </motion.div>
  );
};

export default NotebookCard;