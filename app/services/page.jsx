"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Web Development",
    description:
      "Transform your ideas into reality with fast, responsive, and scalable websites using modern technologies.",
    gif: "/assets/gif/Web-Dev.gif",
  },
  {
    title: "UI/UX Design",
    description:
      "Design beautiful and intuitive user experiences that keep users engaged and improve usability.",
    gif: "/assets/gif/UI.gif",
  },
  {
    title: "Visual Branding",
    description:
      "Craft cohesive brand identities with custom logos, social media kits, and eye-catching designs.",
    gif: "/assets/gif/graphics-designer.gif",
  },
  {
    title: "Data & Office Solutions",
    description:
      "Simplify operations with tailored solutions for Excel, Google Sheets, and Microsoft Office tools.",
    gif: "/assets/gif/office.gif",
  },
];

const Services = () => {
  return (
    <section className="min-h-screen w-full py-12 text-white font-primary">
      <div className="container max-w-6xl mx-auto px-4 space-y-16">
        {/* Heading */}
        <div className="text-center space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-accent"
          >
            My Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/70 max-w-3xl mx-auto text-base md:text-lg"
          >
            I offer a range of creative and technical services to bring your
            ideas to life — from development and design to branding and
            automation.
          </motion.p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md shadow-md hover:shadow-[0_0_20px_#00ff99] transition-all"
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={service.gif}
                  alt={`${service.title} gif`}
                  width={100}
                  height={100}
                  className="rounded-lg"
                />
              </div>

              <h2 className="text-xl font-bold text-center text-yellow-400">
                {service.title}
              </h2>

              <p className="text-gray-300 text-sm text-center mt-2">
                {service.description}
              </p>

              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-5 bg-accent transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto border border-white/10 bg-white/5 backdrop-blur-md p-10 rounded-xl text-center space-y-5 shadow-md"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-accent">
            Let’s Collaborate on Your Next Project 🚀
          </h2>
          <p className="text-white/70 text-base md:text-lg">
            Whether it’s a website, brand identity, or a custom solution — I’d
            love to help bring your vision to life.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-black px-6 py-3 rounded-md text-sm font-semibold transition shadow-md"
          >
            Contact Me →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
