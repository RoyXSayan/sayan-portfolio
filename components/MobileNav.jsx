"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import {
  AiFillAppstore,
  AiOutlineFileText,
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineProject,
} from "react-icons/ai";
import { BiLayer } from "react-icons/bi";
import { LucideBookMarked } from "lucide-react";

const links = [
  {
    name: "home",
    path: "/",
    icon: <AiOutlineHome />,
  },
  {
    name: "services",
    path: "/services",
    icon: <AiFillAppstore />,
  },
  {
    name: "about",
    path: "/about",
    icon: <BiLayer />,
  },
  {
    name: "resume",
    path: "/resume",
    icon: <AiOutlineFileText />,
  },
  {
    name: "work",
    path: "/work",
    icon: <AiOutlineProject />,
  },
  {
    name: "blog",
    path: "/blog",
    icon: <LucideBookMarked />,
  },
  {
    name: "contact",
    path: "/contact",
    icon: <AiOutlineMail />,
  },
];

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false); // State for controlling the sheet visibility
  const pathname = usePathname();

  const handleLinkClick = () => {
    setIsOpen(false); // Close the sheet when a link is clicked
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger
        className="flex justify-center items-center"
        onClick={() => setIsOpen(true)} // Open the sheet when the trigger is clicked
      >
        <CiMenuFries className="text-[22px] text-accent mr-2" />
      </SheetTrigger>
      <SheetContent
        side="right"
        className="flex flex-col px-8 py-10 w-[85%] sm:w-[70%] max-w-xs bg-black/40 backdrop-blur-xl border-r border-white/10 shadow-xl animate-slide-in-from-left"
      >
        <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
        {/* Logo */}
        <div className="mb-20 pl-4">
          <Link href="/">
            <h1 className="text-4xl font-bold tracking-tight text-white">
              Sayan<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-6 pl-4 text-left">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className="group flex items-center gap-3 text-lg font-medium tracking-wide transition-all duration-300"
              onClick={handleLinkClick}
            >
              <span className="text-accent text-xl">{link.icon}</span>
              <span
                className={`relative text-white group-hover:text-accent ${
                  link.path === pathname ? "text-accent" : ""
                }`}
              >
                {link.name.charAt(0).toUpperCase() + link.name.slice(1)}
                <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-accent transition-all duration-300 group-hover:w-16" />
              </span>
            </Link>
          ))}
        </nav>

        {/* Optional Footer */}
        <div className="mt-auto pt-10 pl-4 text-sm text-white/50">
          <p>© {new Date().getFullYear()} Sayan Roy</p>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
