"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importa os estilos do AOS

import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

export default function Contato() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duração da animação (em milissegundos)
      easing: "ease-in-out", // Tipo de transição
    });
  }, []);
  return (
    <section className="section-container bg-[#F3F4F6]">
      <div className="content-wrapper">
        <h2 className="section-title text-[#0a1f44]">Entre em Contato</h2>
        
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start justify-between gap-8">
          <div className="card-container w-full md:w-1/2 bg-white p-4">
            <h3 className="text-[#0a1f44] font-semibold text-lg mb-3">
              Fale com a gente!
            </h3>
            <form className="space-y-3">
              <input
                type="text"
                placeholder="Seu nome"
                className="w-full p-3 mb-4 border border-yellow-500 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-500"
              />
              <input
                type="email"
                placeholder="Seu e-mail"
                className="w-full p-3 mb-4 border border-yellow-500 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-500"
              />
              <textarea
                placeholder="Sua mensagem"
                className="w-full p-3 mb-4 border border-yellow-500 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-500"
                rows="4"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-yellow-500 border-yellow-500 text-white font-bold py-3 rounded-md hover:bg-[#0a1f44] transition cursor-pointer"
              >
                Enviar
              </button>
            </form>
          </div>
          
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-[#0a1f44] font-semibold text-lg mb-4">
              Redes Sociais
            </h3>
            <div className="flex space-x-4 mb-20">
              <a href="#" className="bg-blue-900 text-white p-3 rounded-full">
                <FaFacebookF size={18} />
              </a>
              <a href="#" className="bg-blue-900 text-white p-3 rounded-full">
                <FaLinkedinIn size={18} />
              </a>
              <a href="#" className="bg-blue-900 text-white p-3 rounded-full">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="bg-blue-900 text-white p-3 rounded-full">
                <FaGithub size={18} />
              </a>
            </div>

            <h3 className="text-[#0a1f44] font-semibold text-lg mb-2">
              Endereço
            </h3>
            <p className="text-[#0a1f44]">
              Av. Dirce Pereira Rosa, 300 - Jardim Esperança
              <br />
              Poços de Caldas - MG, 37713-100
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
