"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importa os estilos do AOS

export default function About_Eng() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duração da animação (em milissegundos)
      easing: "ease-in-out", // Tipo de transição
    });
  }, []);

  return (
    <main className="flex flex-col items-center justify-center p-8">
      {/* Título */}
      <h1 className="text-3xl font-bold text-yellow-500 mb-8">
        Engenharia de Computação
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
        {/* Card 1 */}
        <div 
          className="bg-white shadow-lg rounded-lg overflow-hidden"
          data-aos="fade-up" // Animação de subida
        >
          <div style={{ backgroundColor: '#162E50' }} className="p-4 flex justify-center">
            <img
              src="/Eng_branco.png"
              alt="Logo do Instituto Federal"
              className="h-16"
            />
          </div>
          <div className="p-6 text-gray-700">
            <p>
              O curso de Engenharia de Computação do Instituto Federal forma
              profissionais com sólidos conhecimentos em hardware e software,
              capacitados para desenvolver e integrar sistemas computacionais.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div 
          className="bg-white shadow-lg rounded-lg overflow-hidden"
          data-aos="fade-up" // Animação de subida
        >
          <div style={{ backgroundColor: '#162E50' }} className="p-4 flex justify-center">
            <img
              src="/EJ.png"
              alt="Logo EJ Turing"
              className="h-16"
            />
          </div>
          <div className="p-6 text-gray-700">
            <p>
              A EJ Turing agrega muito para o estudante de Engenharia de
              Computação, proporcionando experiência prática, desenvolvimento
              profissional e networking.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
