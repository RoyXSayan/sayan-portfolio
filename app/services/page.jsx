"use client";

import { motion } from "framer-motion";

// Services Array with GIFs
const services = [
  {
    title: "Web Development",
    description:
      "Bring your ideas to life with our cutting-edge Web Development services! I specialize in crafting modern, user-friendly, and fully responsive websites tailored to your unique needs.",
    gif: "/assets/gif/Web-Dev.gif",
  },
  {
    title: "UI/UX Design",
    description:
      "Create impactful digital experiences with my UI/UX Design services! I specialize in designing intuitive, visually appealing, and user-centric interfaces that enhance user satisfaction and drive engagement.",
    gif: "/assets/gif/UI.gif",
  },
  {
    title: "Visual Branding Services",
    description:
      "Bring your brand to life with my Graphic Design Solutions! I specialize in creating eye-catching logos and stunning banners that leave a lasting impression. I also design cohesive visual identities that communicate your brand.",
    gif: "/assets/gif/graphics-designer.gif",
  },
  {
    title: "Data Management & MS Office Mastery",
    description:
      "Unlock efficiency with my Digital Office Solutions! I specialize in transforming tedious administrative tasks into streamlined, high-quality outputs using the power of Microsoft Office.",
    gif: "/assets/gif/office.gif",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[30px] px-4"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col justify-between p-5 glass-effect h-[350px] overflow-hidden mb-4"
            >
              {/* GIF or Moving Image */}
              <div className="flex justify-center mb-4">
                <img
                  src={service.gif}
                  alt={`${service.title} GIF`}
                  className="w-[180px] h-[180px] object-contain"
                />
              </div>

              {/* Title */}
              <h2 className="text-[22px] font-bold leading-none text-yellow-200 group-hover:text-yellow-300 transition-all duration-500 text-center mb-6">
                {service.title}
              </h2>

              {/* Description */}
              <p className="text-white/80 text-sm text-center mb-6">
                {service.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
