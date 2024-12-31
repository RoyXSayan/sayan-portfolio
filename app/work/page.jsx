"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "My Portfolio",
    description:
      "Crafted with precision and creativity, my portfolio is built using Next.js, Tailwind CSS, Framer Motion, and GSAP. It seamlessly combines performance, responsiveness, and engaging animations to deliver a visually stunning and interactive experience that reflects my passion for modern web development.",
    stack: [{ name: "Next.js" }, { name: "Tailwind.Css" }, { name: "Framer-motion" }, {name: "GSAP"}],
    image: "/assets/work/thumb1.png",
    video: "/assets/video/portfolio.mp4",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "mern stack",
    title: "Foodi",
    description:
      "A feature-rich food ordering app built with the MERN stack (MongoDB, Express.js, React.js, Node.js). Foodi offers a seamless user experience, allowing customers to browse menus, add items to their cart, and place orders with ease. Designed with responsiveness and scalability in mind.",
    stack: [{ name: "MongoDB" }, { name: "Express.js" }, { name: "React.js" }, { name: "Node.js" }],
    image: "/assets/foodie.png",
    video: "",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "fullstack",
    title: "VibeChat",
    description:
      "VibeChat is a real-time chat application designed for seamless and interactive communication. Built using the MERN stack (MongoDB, Express, React, Node.js), it leverages Socket.io for instant message delivery and real-time updates.",
    stack: [{ name: "MERN" },{ name: "Socket.io"}, { name: "Tailwind.css" }, { name: "Daisy UI" }],
    image: "/assets/Chat App.png",
    video: null,
    live: "",
    github: "",
  },
  {
    num: "",
    category: "",
    title: "Coming Soon",
    description:"More projects coming soon...",
    stack: [],
    image: "",
    video: "/assets/video/DREAMS.mp4",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* Outline number */}
              <div className="text-6xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* Project title */}
              <h2 className="text-4xl font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize tracking-wider">
                {project.title}
              </h2>

              {/* Project category */}
              <h3 className="text-lg font-semibold text-accent/70 capitalize tracking-wide">
                {project.category} Project
              </h3>
              
              {/* Project description */}
              <p className="text-white/60">{project.description}</p>
              {/* Stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              {/* Border */}
              <div className="border border-white/20"></div>
              {/* Buttons */}
              <div className="flex items-center gap-4">
                {/* Live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* Github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    {/* Overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    {/* Media: Image or Video */}
                    <div className="relative w-full h-full bg-black">
                      {project.video ? (
                        <video
                          src={project.video}
                          className="object-contain w-full h-full"
                          autoPlay
                          loop
                          muted // Ensure autoplay works in most browsers
                          playsInline // Optional: Ensures it works well on mobile
                        ></video>
                      ) : (
                        <Image
                          src={project.image}
                          fill
                          className="object-contain"
                          alt=""
                        />
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* Slider Buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
