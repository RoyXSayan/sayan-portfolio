"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

//components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const titles = ["Software Developer", "Frontend Developer", "Freelancer", "UI/UX Designer"];

const Home = () => {
  const [currentTitle, setCurrentTitle] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % titles.length;
      const fullText = titles[i];

      if (!isDeleting && !pause) {
        setCurrentTitle(fullText.substring(0, currentTitle.length + 1));
        setTypingSpeed(150);

        if (currentTitle === fullText) {
          setPause(true);
          setTimeout(() => setIsDeleting(true), 1000); // pause before deleting
        }
      } else if (isDeleting) {
        setCurrentTitle(fullText.substring(0, currentTitle.length - 1));
        setTypingSpeed(50);

        if (currentTitle === "") {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setPause(true);
          setTimeout(() => setPause(false), 500); // pause before next loop
        }
      } else if (pause) {
        setTimeout(() => setPause(false), 500); // pause at the start of each loop
      }
    };

    const timer = setTimeout(() => {
      handleType();
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentTitle, isDeleting, pause, typingSpeed, loopNum]);

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl lg:text-2xl font-medium text-gray-300">Hi, Myself</span>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Sayan Roy<br />
              <span className="text-accent text-3xl lg:text-4xl">And I'm a </span>
              <span className="text-teal-400 text-3xl lg:text-4xl">{currentTitle}</span>
              <span className="blinking-cursor">|</span>
             
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies.
            </p>
            {/* Buttons and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* Photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
