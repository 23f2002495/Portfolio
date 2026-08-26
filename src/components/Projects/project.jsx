// Projects.jsx
"use client";

import { TypeAnimation } from "react-type-animation";
import React from "react";
import { motion } from "framer-motion";
import {
  aiProjects,
  webProjects,
  analyticsProjects,
} from "./projectsData";

import ProjectCard from "./projectCards";
import NotebookCard from "./notebookCards";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-32 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-24">

          <p className="text-primary uppercase tracking-widest text-sm">
            Portfolio
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Featured Projects
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            A collection of AI, Full Stack and Data Analytics projects
            showcasing practical problem solving, modern development
            practices and machine learning applications.
          </p>

        </div>



        {/* ================= AI ================= */}

        <section className="mb-40">

          <div className="mb-12">



            <h3 className="text-4xl font-bold mt-3">
              Building Intelligent Systems

            </h3>
                        <TypeAnimation
                sequence={[
                    "Artificial Intelligence",
                    1500,
                    "Deep Learning",
                    1500,
                    "Machine Learning",
                    1500,
                    "MLOps",
                    1000,
                    "RAG",
                    1000,
                    "LLMs",
                    1000,
                    "NLP",
                    1000,
                    "Computer Vision",
                    1500,
                ]}
                speed={65}
                deletionSpeed={65}
                wrapper="span"
                repeat={Infinity}
                className="text-2xl font-semibold text-purple-200"
            />

            <p className="text-gray-400 mt-4 max-w-2xl">
              Machine learning and deep learning projects focused on
              solving real-world engineering and educational problems.
            </p>

          </div>

          <div className="grid lg:grid-cols-2 gap-10">

                {aiProjects.map((project) => (
                    <ProjectCard
                    key={project.id}
                    title={project.title}
                    subtitle={project.subtitle}
                    description={project.description}
                    image={project.image}
                    tech={project.tech}
                    github={project.github}
                    demo={project.demo}
                    status={project.status}
                    />
                ))}

          </div>

        </section>



        {/* ================= WEB ================= */}

        <section className="mb-40">

          <div className="mb-12">


            <h3 className="text-4xl font-bold mt-3">
              Web Applications
            </h3>

                        <TypeAnimation
                sequence={[
                    "End to end deployment",
                    1500,
                    "Full Stack Development",
                    1500,
                    "Responsive Designs",
                    1500,
                ]}
                speed={65}
                deletionSpeed={65}
                wrapper="span"
                repeat={Infinity}
                className="text-2xl font-semibold text-purple-200"
            />


            <p className="text-gray-400 mt-4 max-w-2xl">
              End-to-end applications built using modern frontend,
              backend and database technologies.
            </p>

          </div>

          <div className="grid lg:grid-cols-2 gap-10">

            {webProjects.map((project) => (
                <ProjectCard
                key={project.id}
                title={project.title}
                subtitle={project.subtitle}
                description={project.description}
                image={project.image}
                tech={project.tech}
                github={project.github}
                demo={project.demo}
                status={project.status}
                />
            ))}
            

          </div>

        </section>



        {/* ================= DATA ================= */}

        <section>

          <div className="mb-12">

            <p className="text-primary uppercase tracking-widest text-sm">
              Data Analytics
            </p>

            <h3 className="text-4xl font-bold mt-3">
              Notebook Library
            </h3>

            <p className="text-gray-400 mt-4 max-w-2xl">
              Exploratory analysis, visualization and machine learning
              notebooks developed throughout coursework and personal
              experimentation.
            </p>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {analyticsProjects.map((project) => (
                <NotebookCard
                key={project.id}
                {...project}
                />
            ))}

          </div>

        </section>

      </div>
    </section>
  );
};

export default Projects;