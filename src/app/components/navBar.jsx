// src/app/components/navBar.jsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const sections = ["inicio", "sobre", "servicos", "contato"];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#0a1f44]" : "bg-transparent"
      }`}
    >
      <div className="absolute inset-0 opacity-50 pointer-events-none"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Image src="/logo.png" alt="EJ Turing" width={40} height={40} />
            <span className="text-white font-bold ml-2">EJ Turing</span>
          </div>

          <div className="flex space-x-8">
            {sections.map((section, index) => (
              <a
                key={index}
                href={`#${section}`}
                className="relative group transition-all duration-300"
              >
                <span
                  className={`text-white cursor-pointer transition-colors duration-300 ${
                    isScrolled ? "text-yellow-500" : "hover:text-yellow-500"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </span>
                <span
                  className={`absolute left-0 bottom-0 h-0.5 bg-yellow-500 transition-all duration-300 ${
                    isScrolled ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;