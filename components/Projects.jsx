"use client";

import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with Next.js and Tailwind CSS.",
    tech: ["Next.js", "Tailwind"],
    image: "/assets/portfolio.png",
    github: "https://github.com/yourusername/portfolio",
    demo: "https://yourportfolio.com",
  },
  {
    title: "LMS App",
    description:
      "Learning Management System with student tracking and payments.",
    tech: ["React", "Node.js", "MongoDB"],
    image: "/assets/lms.png",
    github: "https://github.com/yourusername/lms-app",
    demo: "https://lmsapp.com",
  },
  {
    title: "VibeChat",
    description:
      "Real-time chat app with Socket.IO, message status, and secure auth.",
    tech: ["Socket.io", "MongoDB", "React"],
     image: "/assets/Chat App.png",
    github: "https://github.com/yourusername/ecommerce-api",
    demo: "https://ecommerce-api.com",
  },
];

const allTags = ["All", ...new Set(projects.flatMap((p) => p.tech))];

const Projects = () => {
  const [selectedTag, setSelectedTag] = useState("All");

  const filtered =
    selectedTag === "All"
      ? projects
      : projects.filter((p) => p.tech.includes(selectedTag));

  return (
    <section
      id="projects"
      className="py-24 px-4 bg-gradient-to-b from-black via-zinc-900 to-black text-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl xl:text-4xl font-bold mb-10 text-accent"
        >
          Projects & Portfolio
        </motion.h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${
                  selectedTag === tag
                    ? "bg-accent text-black shadow-md"
                    : "bg-zinc-800 text-gray-300 hover:text-accent hover:border-accent border border-zinc-700"
                }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-accent/30 hover:scale-[1.02] transition-all duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2 mb-4 justify-center">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="bg-zinc-700 px-2 py-1 text-sm rounded text-white/90"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex justify-center gap-6">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline flex items-center gap-1 text-sm"
                    >
                      <FaGithub /> GitHub
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline flex items-center gap-1 text-sm"
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
