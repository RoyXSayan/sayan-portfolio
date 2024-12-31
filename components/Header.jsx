"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { useEffect, useState } from "react";

const Header = () => {


  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Sayan<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* Desktop Navigation and Hire Me Button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <div className="marquee-container">
              <Button className="gradient-button marquee">Hire me</Button>
            </div>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="xl:hidden flex items-center gap-4">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
