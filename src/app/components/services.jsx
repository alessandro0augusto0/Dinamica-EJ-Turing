"use client"
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const services = [
  {
    title: "EJTuring",
    description:
      "Ajudamos empresas a otimizar seus processos tecnológicos, oferecendo suporte técnico especializado e consultoria estratégica para melhorar a eficiência e segurança dos sistemas.",
    logo: "/azul_curta.png",
  },
  {
    title: "EJTuring",
    description:
      "Criamos soluções digitais sob medida para atender às necessidades específicas de empresas e usuários. Desde aplicativos até sistemas empresariais, desenvolvemos softwares personalizados e prontos para uso.",
    logo: "/azul_curta.png",
  },
  {
    title: "EJTuring",
    description:
      "Fornecemos e realizamos manutenção em equipamentos de informática, garantindo a funcionalidade e longevidade dos dispositivos utilizados no ambiente corporativo e doméstico.",
    logo: "/azul_curta.png",
  },{
    title: "EJTuring",
    description:
      "Projetamos e fabricamos equipamentos eletrônicos inovadores, contribuindo para o avanço da tecnologia e fornecendo soluções robustas para diferentes setores.",
    logo: "/azul_curta.png",
  }
];

export default function Servicos() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 relative inline-block">
          Serviços
          <span className="block w-16 h-1 bg-yellow-400 mx-auto mt-1"></span>
        </h2>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
          Com uma abordagem personalizada, ajudamos nossos clientes a transformar ideias
          em realidade, ao mesmo tempo em que proporcionamos aos nossos membros uma
          experiência prática essencial para o mercado de trabalho.
        </p>
        <h3 className="mt-4 text-lg font-semibold text-[#0a1f44]">
          Conheça nossos serviços!
        </h3>
      </div>

      <div className="relative mt-6 w-full max-w-lg">
        <div className="bg-white p-6 rounded-lg shadow-2xl text-center transition-transform duration-500 ease-in-out transform">
          <div className="flex justify-center mb-4">
            <img src={services[currentIndex].logo} alt="Logo" className="h-12" />
          </div>
          <h3 className="text-lg font-semibold">{services[currentIndex].title}</h3>
          <p className="text-gray-600 mt-2">{services[currentIndex].description}</p>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-yellow-400 text-2xl p-3 rounded-full shadow-md hover:text-yellow-500 transition"
        >
          <FaChevronLeft />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-yellow-400 text-2xl p-3 rounded-full shadow-md hover:text-yellow-500 transition"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}
