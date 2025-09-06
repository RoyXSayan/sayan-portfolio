"use client";

import Image from "next/image";
import { FaDownload, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const AboutPage = () => {
  const personalInfo = [
    { label: "Name", value: "Sayan Roy" },
    { label: "Email", value: "sayandwep@gmail.com" },
    { label: "Phone", value: "(+91) 629 557 4731" },
    { label: "Address", value: "Maynaguri, Jalpaiguri" },
    { label: "Nationality", value: "Indian" },
    { label: "Freelance", value: "Available" },
  ];

  const education = [
    { degree: "MCA in AI", institution: "Online University", duration: "2024–2026" },
    { degree: "BCA (Hons)", institution: "Siliguri College", duration: "2021–2024" },
    { degree: "Higher Secondary", institution: "Dhupguri High School", duration: "2020–2021" },
  ];

  const skills = {
    Backend: ["PHP", "Node.js", "C", "Express.js", "Laravel", "Python", "Java"],
    "Database & Cloud": ["MySQL", "Vercel", "Firebase", "PostgreSQL", "Supabase", "MongoDB"],
    Frontend: ["JavaScript", "HTML/CSS", "Bootstrap", "TailwindCSS", "TypeScript", "React.js", "jQuery", "Framer"],
    "Mobile Development": ["Flutter", "React Native", "Kotlin"],
  };

  const hobbies = ["Coding", "Gaming", "Design", "Music", "Tech Blogging"];
  const languages = ["English", "Hindi", "Bengali"];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen w-full px-4 sm:px-8 md:px-16 py-12 text-white space-y-12"
    >
      {/* Top Section */}
      <div className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-xl overflow-hidden border-2 border-accent shadow-md w-full max-w-[320px] mx-auto md:mx-0"
        >
          <Image
            src="/assets/profile.jpg"
            alt="Sayan Roy"
            width={320}
            height={380}
            className="object-cover rounded-xl w-full h-auto"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-4 text-center md:text-left"
        >
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="text-white/70 leading-relaxed text-lg">
            I’m Sayan Roy, a passionate Full Stack Developer who thrives in
            building modern, responsive, and interactive web applications. With
            a solid foundation in both frontend and backend technologies, I aim
            to deliver digital products that are not only functional but also
            beautiful and user-focused. Whether it's creating sleek UIs with
            React and TailwindCSS or designing scalable APIs with Node.js and
            MongoDB, I enjoy the full cycle of web development. Apart from
            coding, I love exploring new tech, gaming, and sharing what I learn
            with others.
          </p>

          {/* Buttons & Social Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
            <a
              href="/SayanRoyCV.pdf"
              download
              className="flex items-center gap-2 bg-green-700 text-white px-5 py-2 rounded-md hover:scale-105 transition-transform shadow-md"
            >
              <FaDownload className="text-lg" /> Download CV
            </a>

            <div className="flex gap-4 text-xl">
              <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <FaLinkedin />
              </a>
              <a href="mailto:sayandwep@gmail.com" className="hover:text-accent transition-colors">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Info Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm"
      >
        <Section title="Personal Information" center>
          <div className="flex flex-col space-y-3">
            {personalInfo.map((item, i) => (
              <div key={i} className="flex justify-between bg-white/5 px-4 py-2 rounded-md">
                <span className="text-white/60">{item.label}</span>
                <span className="font-semibold">{item.value}</span>
              </div>
            ))}
          </div>
        </Section>

        <div className="flex flex-col gap-y-6">
          <Section title="Languages" center>
            <div className="flex flex-wrap justify-center gap-2">
              {languages.map((lang, i) => (
                <span key={i} className="bg-white/10 px-3 py-1 rounded-md">{lang}</span>
              ))}
            </div>
          </Section>

          <Section title="Interests & Hobbies" center>
            <div className="flex flex-wrap justify-center gap-2">
              {hobbies.map((hobby, i) => (
                <span key={i} className="bg-white/10 px-3 py-1 rounded-md">{hobby}</span>
              ))}
            </div>
          </Section>
        </div>

        <Section title="Education" center>
          <div className="flex flex-col space-y-3">
            {education.map((edu, i) => (
              <div key={i} className="bg-white/5 p-3 rounded-md">
                <p className="font-semibold">{edu.degree}</p>
                <p className="text-white/60">{edu.institution}</p>
                <p className="text-white/40 text-xs">{edu.duration}</p>
              </div>
            ))}
          </div>
        </Section>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="space-y-6"
      >
        <h2 className="text-2xl font-bold">Skills & Expertise</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skills).map(([category, skillList], i) => (
            <div key={i}>
              <h3 className="text-white/80 mb-3 font-semibold">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {skillList.map((skill, j) => (
                  <div key={j} className="px-4 py-2 rounded-md border border-white/10 bg-white/5 text-sm">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-16 rounded-xl border border-white/10 bg-white/5 p-8 shadow-md text-center space-y-4"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-accent">Want to see what I can do?</h2>
        <p className="text-white/80 text-lg max-w-2xl mx-auto">
          Explore my recent projects to see how I bring ideas to life through clean code and creative design.
        </p>
        <div className="flex justify-center gap-6 mt-6 flex-wrap">
          <a href="/work" className="bg-accent text-black font-semibold px-6 py-3 rounded-md hover:bg-accent/90 transition">
            View Projects
          </a>
          <a href="/contact" className="border border-accent text-accent font-semibold px-6 py-3 rounded-md hover:bg-accent hover:text-black transition">
            Contact Me
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Section = ({ title, center = false, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="w-full"
  >
    <h3 className={`text-lg font-bold mb-3 text-accent ${center ? "text-center" : "text-left"}`}>
      {title}
    </h3>
    {children}
  </motion.div>
);

export default AboutPage;
