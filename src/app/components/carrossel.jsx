// src/app/components/carrossel.jsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image"; // Importe o componente Image do Next.js

export default function Carrossel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Troca automática de imagens a cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  // Navegação com teclas < >
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        prevImage();
      } else if (event.key === "ArrowRight") {
        nextImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  return (
    <div className="flex items-center justify-center w-full max-w-6xl mx-auto">
      {/* Botão de navegação para a esquerda */}
      <button
        onClick={prevImage}
        className="p-4 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition duration-300"
        aria-label="Imagem anterior"
      >
        &larr;
      </button>

      <div className="flex items-center justify-center mx-4 w-full">
        {/* Foto anterior */}
        <motion.div
          className="w-48 h-48 mx-2 opacity-80 hover:opacity-100 transition duration-300"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.8 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={images[(currentIndex - 1 + images.length) % images.length]}
            alt="Imagem anterior"
            width={192}
            height={192}
            className="w-full h-full object-cover rounded-lg shadow-lg"
            loading="lazy" // Lazy loading para melhorar o desempenho
          />
        </motion.div>

        {/* Foto principal */}
        <div className="relative w-full max-w-2xl mx-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={images[currentIndex]}
                alt="Imagem atual"
                width={800}
                height={600}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
                loading="lazy" // Lazy loading para melhorar o desempenho
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Próxima foto */}
        <motion.div
          className="w-48 h-48 mx-2 opacity-80 hover:opacity-100 transition duration-300"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.8 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={images[(currentIndex + 1) % images.length]}
            alt="Próxima imagem"
            width={192}
            height={192}
            className="w-full h-full object-cover rounded-lg shadow-lg"
            loading="lazy" // Lazy loading para melhorar o desempenho
          />
        </motion.div>
      </div>

      {/* Botão de navegação para a direita */}
      <button
        onClick={nextImage}
        className="p-4 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition duration-300"
        aria-label="Próxima imagem"
      >
        &rarr;
      </button>
    </div>
  );
}