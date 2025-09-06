"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaBook } from "react-icons/fa";

const learningPath = [
  {
    title: "Mastering Full-Stack Development",
    platform: "Self Learning",
    date: "2023 – Present",
    description:
      "Working on real-world projects using React, Next.js, Tailwind CSS, Node.js, and MongoDB. Implemented payment systems, user auth, and dashboards.",
    icon: <FaGraduationCap />,
  },
  {
    title: "Exploring AI & Machine Learning",
    platform: "MCA in AI",
    date: "2024 – Present",
    description:
      "Learning about deep learning, computer vision, and AI-powered apps. Hands-on with Python, TensorFlow, and real-time data processing.",
    icon: <FaBook />,
  },
];

const LearningJourney = () => {
  return (
    <section id="learning" className="py-20 px-4 bg-black text-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-12 text-accent">Learning Journey</h2>

        <div className="relative border-l-2 border-accent pl-6">
          {learningPath.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="mb-12"
            >
              <div className="absolute -left-[20px] bg-accent text-black w-9 h-9 flex items-center justify-center rounded-full shadow-lg">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <span className="text-sm text-gray-400 block mb-2">
                {item.platform} | {item.date}
              </span>
              <p className="text-gray-300 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningJourney;
