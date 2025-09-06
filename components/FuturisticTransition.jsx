"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const FuturisticTransition = ({ children }) => {
  const pathname = usePathname();
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    setIsAnimating(true);
    const timeout = setTimeout(() => setIsAnimating(false), 900);
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <div className="relative overflow-hidden">
      <AnimatePresence mode="wait">
        {isAnimating && (
          <motion.div
            key={pathname}
            initial={{ x: "-100%", skewX: "-20deg", opacity: 1 }}
            animate={{ x: "100%", skewX: "-20deg", opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full h-full z-[999] bg-gradient-to-br from-[#00ff99] to-black pointer-events-none blur-xl mix-blend-normal"
            style={{
              transformOrigin: "left center",
            }}
          />
        )}
      </AnimatePresence>

      {/* Content */}
      <motion.div
        key={pathname + "-content"}
        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.5, ease: "easeOut", delay: isAnimating ? 0.2 : 0 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default FuturisticTransition;
