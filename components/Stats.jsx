"use client";

import { Briefcase, CheckCircle, Code2, GitCommitHorizontal } from "lucide-react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

// Stats data with icons
const stats = [
  {
    num: 1,
    text: "Years of experience",
    icon: <Briefcase className="text-accent w-5 h-5" />,
  },
  {
    num: 26,
    text: "Projects completed",
    icon: <CheckCircle className="text-accent w-5 h-5" />,
  },
  {
    num: 12,
    text: "Technologies Mastered",
    icon: <Code2 className="text-accent w-5 h-5" />,
  },
  {
    num: 500,
    text: "Code commits",
    icon: <GitCommitHorizontal className="text-accent w-5 h-5" />,
  },
];

const Stats = () => {
  return (
    <section className="relative lg:block sm:hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="
          absolute 
          top-[-120px] 
          left-[3vw] 
          scale-[0.40] 
          xl:scale-75 
          z-30 
          backdrop-blur-lg 
          bg-white/5 
          px-6 py-4 
          rounded-2xl 
          border border-white/10 
          flex gap-4 flex-wrap 
          max-w-[80vw] 
          shadow-[0_8px_30px_rgba(0,0,0,0.2)]
        "
      >
        {stats.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 min-w-[140px]"
          >
            {/* Icon */}
            <div className="shrink-0">{item.icon}</div>

            {/* Number & Text */}
            <div>
              <h3 className="text-lg xl:text-xl font-bold text-accent">
                <CountUp end={item.num} duration={3} delay={0.2} />
              </h3>
              <p className="text-white/70 text-xs xl:text-sm leading-snug">
                {item.text}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Stats;
