"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaSpinner,
  FaPaperPlane,
} from "react-icons/fa";

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
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: `${formData.firstname} ${formData.lastname}`,
          ...formData,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      toast.success("Message Sent Successfully!");
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
      id="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.4 } }}
      className="py-20 px-4 bg-gradient-to-t from-black via-zinc-900 to-black text-white"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-6 text-accent">
          Contact Me
        </h2>
        <p className="text-center text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
          Have a project idea, job opportunity, or just want to say hello? Fill
          out the form or connect with me below.
        </p>

        {/* Contact Form */}
        <div className="flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 p-6 bg-[#1c1c1f] rounded-xl w-full lg:w-2/3"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                placeholder="First Name"
              />
              <Input
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
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
                  <SelectLabel>Service</SelectLabel>
                  <SelectItem value="Web Development">
                    Web Development
                  </SelectItem>
                  <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                  <SelectItem value="Branding">Visual Branding</SelectItem>
                  <SelectItem value="MS Office">MS Office Mastery</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message here."
              className="min-h-[120px]"
            />
            <Button
              type="submit"
              disabled={loading || !isFormValid}
              className={`bg-accent text-primary w-full sm:max-w-xs mx-auto rounded-full ${
                loading || !isFormValid
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-white hover:text-black"
              } transition`}
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <FaSpinner className="animate-spin" /> Sending...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <FaPaperPlane /> Send Message
                </div>
              )}
            </Button>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
