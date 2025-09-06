"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SearchAndFilter from "@/components/SearchAndFilter";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { Tag, Search } from "lucide-react";

const allProjects = [
  {
    title: "My Portfolio",
    category: "Frontend",
    description:
      "Crafted with Next.js, Tailwind CSS, Framer Motion, and GSAP. Fully responsive, animated, and performance-optimized.",
    stack: ["Next.js", "Tailwind", "GSAP"],
    image: "/assets/work/image.png",
    github: "https://github.com/RoyXSayan/sayan-portfolio",
    live: "https://sayan-portfolio-delta.vercel.app/",
    featured: true,
  },
  {
    title: "Foodi App",
    category: "MERN",
    description:
      "Feature-rich food ordering app with cart, order tracking, and admin dashboard built using MERN stack.",
    stack: ["MongoDB", "Express", "React", "Node"],
    image: "/assets/foodie.png",
    github: "",
    live: "",
    featured: true,
  },
  {
    title: "VibeChat",
    category: "Fullstack",
    description:
      "Real-time chat app with Socket.IO, message status, and secure auth.",
    stack: ["Socket.io", "MongoDB", "React"],
    image: "/assets/Chat App.png",
    github: "",
    live: "",
    featured: false,
  },
  {
    title: "Course LMS",
    category: "Fullstack",
    description:
      "A full-featured learning platform with roles, payment, reviews, and progress tracking.",
    stack: ["Next.js", "Stripe", "MongoDB"],
    image: "/assets/lms.png",
    github: "",
    live: "",
    featured: false,
  },
  {
    title: "File-Share",
    category: "Frontend",
    description:
      "A minimal portfolio UI built with modern design principles and motion effects.",
    stack: ["React", "Tailwind", "Framer Motion"],
    image: "/assets/work/image2.png",
    github: "",
    live: "",
    featured: false,
  },
  {
    title: "AI Assistant UI",
    category: "Frontend",
    description:
      "Chatbot frontend inspired by modern AI apps with animations and dark mode.",
    stack: ["Next.js", "Tailwind"],
    image: "/assets/work/thumb1.png",
    github: "",
    live: "",
    featured: false,
  },
];

const categories = ["All", "Frontend", "Fullstack", "MERN", "Others"];

const Work = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredProjects = allProjects.filter((project) => {
    const matchesCategory = filter === "All" || project.category === filter;
    const matchesSearch = project.title
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
      className="min-h-screen py-6 px-4 w-full max-w-7xl mx-auto"
    >
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-accent">Projects & Portfolio</h2>
        <p className="text-white/60 text-base max-w-xl mx-auto mt-2">
          A showcase of my recent work and applications that demonstrate my
          skills and experience.
        </p>
      </div>

      {/* Search + Filter */}
      <SearchAndFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        filterOptions={categories}
      />

      {/* Projects */}
      <div className="w-full max-w-7xl mx-auto px-2 mb-20">
        <ProjectCard projects={filteredProjects} />
      </div>

      {/* CTA Box */}
      <motion.div
        className="bg-gradient-to-br from-[#1a1a1c] to-[#121212] border border-white/10 p-8 rounded-xl text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold mb-4 text-white">
          Interested in my work?
        </h3>
        <p className="text-white/60 mb-6">
          I'm always working on new projects. Feel free to check out my GitHub
          for more examples of my code.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="https://github.com/RoyXSayan" target="_blank">
            <Button className="w-full sm:w-auto">View GitHub</Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" className="w-full sm:w-auto">
              Discuss a Project
            </Button>
          </Link>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Work;
