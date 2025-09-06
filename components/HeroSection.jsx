"use client";

import { useState, useEffect } from "react";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import "@/app/home.css";

const TITLES = [
  "Web Developer",
  "Frontend Developer",
  "Backend Developer",
  "Freelancer",
  "UI/UX Designer",
  "Full Stack Developer",
];

const HeroSection = () => {
  const [currentTitle, setCurrentTitle] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [pause, setPause] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleType = () => {
      const currentIndex = loopNum % TITLES.length;
      const fullText = TITLES[currentIndex];

      if (pause) return;

      if (!isDeleting) {
        const nextTitle = fullText.substring(0, currentTitle.length + 1);
        setCurrentTitle(nextTitle);
        setTypingSpeed(150);

        if (nextTitle === fullText) {
          setPause(true);
          setTimeout(() => {
            setIsDeleting(true);
            setPause(false);
          }, 1000);
        }
      } else {
        const nextTitle = fullText.substring(0, currentTitle.length - 1);
        setCurrentTitle(nextTitle);
        setTypingSpeed(50);

        if (nextTitle === "") {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setPause(true);
          setTimeout(() => setPause(false), 500);
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentTitle, isDeleting, pause, typingSpeed, loopNum]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center xl:text-left order-2 xl:order-none"
          >
            <span className="text-xl lg:text-2xl font-medium text-gray-300 block mb-2">
              Hi, I'm
            </span>
            <h2 className="gradient-text text-4xl lg:text-5xl font-bold mb-3 animate-gradient">
              Sayan Roy
              <br />
            </h2>

            <h2 className="text-2xl lg:text-2xl font-bold mb-2 flex justify-center lg:justify-start items-center whitespace-nowrap">
              <span className="text-white text-2xl lg:text-2xl">
                I'm a&nbsp;
              </span>
              <span
                className="text-accent text-2xl lg:text-2xl flex items-center"
                style={{
                  display: "inline-flex",
                  minWidth: "18ch",
                  textAlign: "left",
                  whiteSpace: "nowrap",
                }}
              >
                {currentTitle}
                <span
                  className={`blinking-cursor ${isLoading ? "hidden" : "block"}`}
                >
                  |
                </span>
              </span>
            </h2>

            <p className="max-w-[600px] mb-5 text-white/80">
              I excel at crafting elegant digital experiences and am proficient
              in various programming languages and technologies.
            </p>

            {/* Buttons and Social Links */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="/assets/Sayan_Roy_Resume.pdf"
                download="Sayan_Roy_CV.pdf"
                className={`btn flex items-center gap-2 ${
                  isLoading ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
                }`}
                aria-label="Download CV"
              >
               <FaDownload className="text-lg text-white group-hover:text-white relative z-10" />

                <strong>Download CV</strong>
                <div id="container-stars">
                  <div id="stars"></div>
                </div>
                <div id="glow">
                  <div className="circle"></div>
                  <div className="circle"></div>
                </div>
              </a>

              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500 focus:ring-2 focus:ring-accent"
                />
              </div>
            </div>
          </motion.div>

          {/* Photo Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="order-1 xl:order-none"
          >
            <Photo />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;