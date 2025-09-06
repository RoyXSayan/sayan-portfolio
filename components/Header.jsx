"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-black/30 shadow-md">
      <div className="h-16 xl:h-16 flex items-center justify-between lg:px-4 sm:px-10 xl:px-8 max-w-7xl mx-auto w-full">
        {/* Left Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <h1 className="text-xl font-bold tracking-tight text-white ml-2">
              Sayan<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>

        {/* Center Navigation */}
        <div className="hidden xl:flex flex-1 justify-center items-center gap-12 text-sm">
          <Nav />
        </div>

        {/* Right "Hire Me" button and mobile nav */}
        <div className="flex items-center gap-4">
          {/* Desktop Hire Me Button */}
          <div className="hidden xl:block">
            <Link href="/contact">
              <Button className="gradient-button marquee h-4 text-sm">Hire me</Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="xl:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
