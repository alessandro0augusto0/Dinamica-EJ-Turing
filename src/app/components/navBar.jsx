// src/app/components/navBar.jsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const sections = ["inicio", "sobre", "servicos", "contato"];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar o menu no mobile


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detecta qual seção está visível
      const sectionElements = sections.map(section => ({
        id: section,
        element: document.getElementById(section)
      }));

      const currentSection = sectionElements.find(({ element }) => {
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Função para alternar o menu no mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
            <Image src="/logo.png" alt="EJ Turing" width={60} height={60} />
          </div>

          {/* Botão de menu (hamburger) para dispositivos móveis */}
          <button
            className={`md:hidden ${isScrolled ? "text-white" : "text-[#0a1f44]"}`}
            onClick={toggleMenu}
          >
            {/* Muda o ícone do botão com base no estado isMenuOpen */}
            {isMenuOpen ? (
              // Ícone "X"
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Ícone hamburger
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          {/* Links de navegação (visíveis apenas em telas maiores) */}
          <div className="hidden md:flex space-x-8">
            {sections.map((section, index) => (
              <a
                key={index}
                href={`#${section}`}
                className="relative group transition-all duration-300"
              >
                <span
                  className={`cursor-pointer transition-colors duration-300 
                    ${isScrolled 
                      ? "text-white hover:text-yellow-500" 
                      : "text-[#0a1f44] hover:text-yellow-500"
                    } 
                    ${activeSection === section ? "text-yellow-500" : ""}`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </span>
                <span
                  className={`absolute left-0 bottom-0 h-0.5 bg-yellow-500 transition-all duration-300 ${
                    activeSection === section ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Menu no mobile (exibido quando o estado isMenuOpen for true) */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-[#0a1f44]`}>
        <div className="flex flex-col items-center py-4 space-y-4">
          {sections.map((section, index) => (
            <a
              key={index}
              href={`#${section}`}
              className={`cursor-pointer transition-colors duration-300 
                ${isScrolled ? "text-white" : "text-[#0a1f44]"}
                ${activeSection === section ? "text-yellow-500" : "hover:text-yellow-500"}`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;