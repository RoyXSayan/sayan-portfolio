"use client";
import { motion } from "framer-motion";

const WelcomeTransition = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-black z-[99999] flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <motion.h1
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1.1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-accent"
      >
        Welcome to Sayan’s Portfolio 🚀
      </motion.h1>
    </motion.div>
  );
};

export default WelcomeTransition;
