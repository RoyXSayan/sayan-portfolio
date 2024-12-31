"use client";

import { useState } from "react";
import emailjs from "emailjs-com"; // Import EmailJS
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import toast from "react-hot-toast";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaSpinner,
  FaPaperPlane,
} from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+91) 629 557 4731",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "sayandwep@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Maynaguri, Jalpaiguri 735224",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, // Formspree Service ID
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, // Formspree Template ID
        {
          from_name: `${formData.firstname} ${formData.lastname}`,
          firstname: formData.firstname,
          lastname: formData.lastname,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        },
         process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      toast.success("Message Sent Successfully!");

      // Reset the form fields
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  const isFormValid = Object.values(formData).every(
    (value) => value.trim() !== ""
  );

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[45%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 p-4 sm:p-8 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-2xl sm:text-4xl text-accent">
                Let's work together
              </h3>
              <p className="text-white/60 text-sm sm:text-base">
                Transform ideas into reality with tailored solutions crafted
                just for you. Let’s build something extraordinary together!
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  type="text"
                  placeholder="First Name"
                />
                <Input
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  type="text"
                  placeholder="Last Name"
                />
                <Input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Email address"
                />
                <Input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="text"
                  placeholder="Phone number"
                />
              </div>
              <Select
                onValueChange={(value) =>
                  setFormData({ ...formData, service: value })
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Web Development">
                      Web Development
                    </SelectItem>
                    <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                    <SelectItem value="Logo Design">
                      Visual Branding Services
                    </SelectItem>
                    <SelectItem value="MS-Office">
                      Data Management & MS Office Mastery
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="h-auto"
                placeholder="Type your message here."
              />
              <Button
                type="submit"
                size="md"
                variant="primary"
                disabled={loading || !isFormValid}
                className={`w-full sm:max-w-[200px] mx-auto xl:mx-0 mt-0 bg-accent text-primary rounded-full ${
                  loading || !isFormValid
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-primary hover:text-white"
                } transition duration-300 ease-in-out`}
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <FaSpinner className="animate-spin" />
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <FaPaperPlane />
                    Send Message
                  </div>
                )}
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-2 xl:order-none mb-6 xl:mb-0">
            <ul className="flex flex-col gap-6">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-lg sm:text-xl">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60 text-sm sm:text-base">{item.title}</p>
                      <h3 className="text-base sm:text-lg">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
