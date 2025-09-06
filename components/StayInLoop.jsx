"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const StayInLoop = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mt-20 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg p-8 text-center space-y-4"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-white">
        Let’s Keep the Ideas Flowing 💡
      </h2>
      <p className="text-white/70 max-w-2xl mx-auto text-base md:text-lg">
        I share tips, insights, and dev logs. Get notified when new content drops—let’s stay in the loop.
      </p>
      <Link
        href="/contact"
        className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-black px-6 py-3 rounded-md text-sm font-semibold transition shadow-md"
      >
        Contact Me <ArrowRight size={16} />
      </Link>
    </motion.div>
  );
};

export default StayInLoop;
