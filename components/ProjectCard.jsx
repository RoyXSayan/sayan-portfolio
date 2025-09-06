"use client";

import { motion } from "framer-motion";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 15 },
  },
};

const hoverEffect = {
  scale: 1.02,
  boxShadow: "0px 8px 32px rgba(0, 255, 150, 0.1)",
  transition: { type: "spring", stiffness: 200, damping: 15 },
};

const SingleProjectCard = ({ project }) => {
  return (
    <motion.div
      className="bg-[#111218] rounded-xl overflow-hidden shadow-xl border border-white/5 hover:border-accent transition-all duration-300"
      initial="hidden"
      whileInView="visible"
      whileHover={hoverEffect}
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
    >
      {/* Thumbnail */}
      <div className="relative h-[200px] sm:h-[230px] w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col justify-between gap-3">
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        <p className="text-sm text-white/60">{project.description}</p>

        {/* Stack Tags */}
        <div className="flex flex-wrap gap-2 mt-2">
          {project.stack.map((tech, i) => (
            <span
              key={i}
              className="text-xs font-medium bg-accent/10 text-accent px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex justify-between items-center mt-4">
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              className="text-sm text-white/60 hover:text-accent flex items-center gap-1"
            >
              <BsGithub /> View Code
            </Link>
          )}
          {project.live && (
            <Link
              href={project.live}
              target="_blank"
              className="bg-accent text-black px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1 hover:scale-105 transition-transform"
            >
              View Project <BsArrowUpRight />
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectCard = ({ projects = [] }) => {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section className="space-y-16 mt-12">
      {/* Featured */}
      {featured.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold text-white border-l-4 border-accent pl-4 mb-6">
            Featured Projects
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
            {featured.map((project, index) => (
              <SingleProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      )}

      {/* All Projects */}
      {others.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold text-white border-l-4 border-white/10 pl-4 mb-6">
            All Projects
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
            {others.map((project, index) => (
              <SingleProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectCard;
