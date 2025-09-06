"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss, SiMongodb, SiExpress, SiNextdotjs,
} from "react-icons/si";

const skillCategories = {
  All: [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" />, level: 95 },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" />, level: 90 },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, level: 92 },
    { name: "React", icon: <FaReact className="text-blue-400" />, level: 90 },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" />, level: 85 },
    { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" />, level: 95 },
    { name: "Node.js", icon: <FaNode className="text-green-500" />, level: 88 },
    { name: "Express", icon: <SiExpress className="text-white" />, level: 85 },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" />, level: 87 },
    { name: "GitHub", icon: <FaGithub className="text-white" />, level: 90 },
  ],
  Frontend: [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" />, level: 95 },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" />, level: 90 },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, level: 92 },
    { name: "React", icon: <FaReact className="text-blue-400" />, level: 90 },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" />, level: 85 },
    { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" />, level: 95 },
  ],
  Backend: [
    { name: "Node.js", icon: <FaNode className="text-green-500" />, level: 88 },
    { name: "Express", icon: <SiExpress className="text-white" />, level: 85 },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" />, level: 87 },
  ],
  Tools: [
    { name: "GitHub", icon: <FaGithub className="text-white" />, level: 90 },
  ],
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.4, ease: "easeOut" },
  }),
};

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const displayedSkills = showAll
    ? skillCategories[activeTab]
    : skillCategories[activeTab].slice(0, 6);

  return (
    <section
      id="about"
      className="py-24 px-4 bg-gradient-to-b from-black via-zinc-900 to-black text-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-3xl xl:text-4xl font-bold mb-10 text-accent">
          Tech Stack & Tools
        </h3>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {Object.keys(skillCategories).map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveTab(category);
                setShowAll(false); // reset on tab switch
              }}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === category
                  ? "bg-accent text-black shadow-md"
                  : "bg-zinc-800 text-white hover:bg-zinc-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {displayedSkills.map((skill, i) => (
            <motion.div
              key={i}
              className="bg-zinc-800 rounded-xl p-5 hover:bg-zinc-700 transition"
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={i}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="text-3xl">{skill.icon}</div>
                <div className="text-lg font-medium">{skill.name}</div>
              </div>
              <div className="w-full h-3 bg-zinc-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-accent rounded-full"
                  style={{ width: `${skill.level}%` }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                />
              </div>
              <p className="text-sm text-right text-gray-300 mt-1">
                {skill.level}%
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* See more button */}
        {skillCategories[activeTab].length > 6 && (
          <div className="mt-6">
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-sm font-semibold text-accent hover:underline"
            >
              {showAll ? "See Less" : "See More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutMe;
