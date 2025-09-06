import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-white py-10 px-4 border-t border-zinc-800">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: Logo / Name */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-accent">Sayan Roy</h2>
          <p>Full Stack Developer</p>
         <hr/>
          <p className="text-sm text-gray-400 mt-1">
            &copy; {year} Sayan Roy. All rights reserved.
          </p>
        </div>

        {/* Center: Navigation */}
        <nav className="flex gap-6 text-sm font-medium text-gray-300">
          <Link href="#hero" className="hover:text-accent transition">Home</Link>
          <Link href="#about" className="hover:text-accent transition">About</Link>
          <Link href="#projects" className="hover:text-accent transition">Projects</Link>
          <Link href="#contact" className="hover:text-accent transition">Contact</Link>
        </nav>

        {/* Right: Social Icons */}
        <div className="flex gap-4 text-xl">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
