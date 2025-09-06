"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const stairs = Array.from({ length: 6 });

const FuturisticStairReload = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setIsVisible(false), 700); // wait after load
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <div className="flex flex-col h-full">
            {stairs.map((_, i) => (
              <motion.div
                key={i}
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ delay: i * 0.15, duration: 0.6, ease: "easeInOut" }}
                className="flex-1 w-full"
                style={{
                  background: `linear-gradient(90deg, rgba(0,255,153,0.3), rgba(0,255,153,0.8))`,
                  boxShadow: `0 0 20px rgba(0,255,153,0.4)`,
                  backdropFilter: "blur(3px)",
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FuturisticStairReload;
