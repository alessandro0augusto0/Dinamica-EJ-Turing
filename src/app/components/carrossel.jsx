// src/app/components/carrossel.jsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Carrossel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000); // aqui troca de foto a cada 5s

    return () => clearInterval(interval);
  }, [currentIndex]);

  // teclas < > para trocar de fotos
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
      <button
        onClick={prevImage}
        className="p-4 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition duration-300"
      >
        &larr;
      </button>

      <div className="flex items-center justify-center mx-4 w-full">
        {/* Foto anterior */}
        <motion.img
          src={images[(currentIndex - 1 + images.length) % images.length]}
          alt="Previous"
          className="w-48 h-48 object-cover rounded-lg shadow-lg mx-2 opacity-80 hover:opacity-100 transition duration-300"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.8 }}
          transition={{ duration: 0.5 }}
        />

        {/* Foto principal */}
        <div className="relative w-full max-w-2xl mx-4">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt="Current"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
        </div>

        {/* Próxima foto */}
        <motion.img
          src={images[(currentIndex + 1) % images.length]}
          alt="Next"
          className="w-48 h-48 object-cover rounded-lg shadow-lg mx-2 opacity-80 hover:opacity-100 transition duration-300"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.8 }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <button
        onClick={nextImage}
        className="p-4 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition duration-300"
      >
        &rarr;
      </button>
    </div>
  );
}