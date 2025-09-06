"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiThreedotjs,
} from "react-icons/si";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

//about data
const about = {
  title: "About me",
  description:
    "Results-driven Full Stack Developer with a proven track record of designing, developing, and deploying scalable, secure, and high-performance web applications.  I deliver innovative solutions that drive business growth and user engagement.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Sayan Roy",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91) 629 557 4731",
    },
    {
      fieldName: "Experience",
      fieldValue: "1+ Years",
    },
    {
      fieldName: "Address",
      fieldValue: "Maynaguri,Jalpaiguri",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Email",
      fieldValue: "sayandwep@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English,Hindi,Bengali",
    },
  ],
};

//experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, nihil dignissimos.",
  items: [
    {
      company: "Tech Solutions Inc.",
      position: "Full Stack Developer",
      duration: "2022 - Present",
    },
    {
      company: "Web Design Studio",
      position: "Front-End Developer Intern",
      duration: "Summer 2021",
    },
    {
      company: "E-commerce Startup",
      position: "Freelance Web Developer",
      duration: "2020-2021",
    },
    {
      company: "Tech Academy",
      position: "Teaching Assistant",
      duration: "2019-2020",
    },
    {
      company: "Digital Agency",
      position: "UI/UX Designer",
      duration: "2018-2019",
    },
    {
      company: "Software Development Firm",
      position: "Junior Developer",
      duration: "2017-2018",
    },
  ],
};

//education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "A comprehensive educational journey designed to equip me with the skills and knowledge necessary for success in the evolving field of Web Development.",
  items: [
    {
      institution: "Online Course",
      degree: "Masters in Computer Application (AI)",
      duration: "2024-2026",
    },
    {
      institution: "Siliguri College",
      degree: "Bachelor in Computer Application (Honours)",
      duration: "2021-2024",
    },
    {
      institution: "Dhupguri High School",
      degree: "Higher Secondary",
      duration: "2020-2021",
    },
    {
      institution: "CBB High School",
      degree: "Matriculation",
      duration: "2014-2020",
    },
    {
      institution: "Bhor Academy",
      degree: "Primary School",
      duration: "2005-2014",
    },
  ],
};

//skills data
const skills = {
  title: "My skills",
  description:
    "I combine creativity and technical expertise to craft seamless digital experiences. I specialize in building responsive, user-friendly interfaces. I deliver innovative, full-stack solutions that blend functionality with aesthetics.",
  skillList: [
    { icon: <FaHtml5 />, name: "html 5", level: 95 },
    { icon: <FaCss3 />, name: "css 3", level: 90 },
    { icon: <FaJs />, name: "javascript", level: 85 },
    { icon: <SiMongodb />, name: "mongodb", level: 80 },
    { icon: <SiExpress />, name: "express.js", level: 75 },
    { icon: <FaReact />, name: "react.js", level: 90 },
    { icon: <SiNextdotjs />, name: "next.js", level: 85 },
    { icon: <SiTailwindcss />, name: "tailwind.css", level: 90 },
    { icon: <FaNodeJs />, name: "node.js", level: 80 },
    { icon: <SiThreedotjs />, name: "Three.js", level: 60 },
    { icon: <FaFigma />, name: "figma", level: 70 },
    { icon: <PiMicrosoftWordLogoFill />, name: "Ms Word", level: 95 },
  ],
};

const certifications = [
  {
    title: "Meta Front-End Developer",
    org: "Coursera",
    date: "2024",
  },
  {
    title: "JavaScript Algorithms & DS",
    org: "freeCodeCamp",
    date: "2023",
  },
  {
    title: "MongoDB for Developers",
    org: "MongoDB University",
    date: "2023",
  },
];

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { easeIn, motion } from "framer-motion";
import { PiMicrosoftWordLogoFill } from "react-icons/pi";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="education"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience" className="hidden">
              Experience
            </TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="certifications">Certifications</TabsTrigger>

            {/* Add your SVG here */}
            <DotLottieReact
              src="/assets/gif/lottie.lottie"
              loop
              autoplay
              className="hidden lg:block"
            />
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full hidden">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold ">{experience.title}</h3>
                <p className="text-white/60 mx-auto xl:max-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent "></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="text-white/60 mx-auto xl:max-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[350px] px-6">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent "></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ScrollArea className="h-[350px] px-6">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                    {skills.skillList.map((skill, index) => (
                      <motion.li
                        key={index}
                        className="bg-[#232329] rounded-xl p-5 flex flex-col items-center justify-center hover:shadow-lg transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <div className="text-5xl text-accent mb-4">
                          {skill.icon}
                        </div>
                        <p className="capitalize text-white mb-2">
                          {skill.name}
                        </p>
                        <div className="w-full bg-zinc-700 rounded-full h-2">
                          <div
                            className="bg-accent h-2 rounded-full transition-all duration-500"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-white/60 mt-1">
                          {skill.level}%
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Certifications */}
            <TabsContent value="certifications">
              <h3 className="text-4xl font-bold mb-4">Certifications</h3>
              <ScrollArea className="h-[350px]">
                <ul className="grid md:grid-cols-2 gap-6">
                  {certifications.map((cert, index) => (
                    <motion.li
                      key={index}
                      className="bg-[#232329] rounded-lg p-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <h4 className="text-xl font-semibold">{cert.title}</h4>
                      <p className="text-white/60">{cert.org}</p>
                      <span className="text-sm text-accent">{cert.date}</span>
                    </motion.li>
                  ))}
                </ul>
              </ScrollArea>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
