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

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="section-container bg-[#F3F4F6]">
      <div className="content-wrapper">
        <h2 className="section-title text-[#0a1f44] py-8">Nossos Serviços</h2>
        <div className="flex flex-col items-center justify-center">
          <div className="text-center max-w-2xl mx-auto">
            <p className="mt-4 text-[#0a1f44] text-lg">
              Com uma abordagem personalizada, ajudamos nossos clientes a transformar ideias em realidade.
            </p>
            <h3 className="mt-6 text-xl font-semibold text-[#0a1f44]">
              Conheça nossos serviços!
            </h3>
          </div>
          
          <div className="relative mt-10 w-full max-w-xl">
            <div className="card-container bg-white p-8">
              <div className="flex justify-center mb-6">
                <img src={services[currentIndex].logo} alt="Logo" className="h-12" />
              </div>
              <h3 className="text-xl font-semibold text-[#0a1f44] mb-4 text-center">
                {services[currentIndex].title}
              </h3>
              <p className="text-[#0a1f44] text-lg leading-relaxed text-center">
                {services[currentIndex].description}
              </p>
            </div>

            <button
              onClick={prevSlide}
              className="absolute -left-4 top-1/2 transform -translate-y-1/2 text-yellow-400 text-3xl p-3 rounded-full shadow-md hover:text-yellow-500 transition"
            >
              <FaChevronLeft />
            </button>

            <button
              onClick={nextSlide}
              className="absolute -right-4 top-1/2 transform -translate-y-1/2 text-yellow-400 text-3xl p-3 rounded-full shadow-md hover:text-yellow-500 transition"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
