"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importa os estilos do AOS
  

export default function IfSUl() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duração da animação (em milissegundos)
      easing: "ease-in-out", // Tipo de transição
    });
  }, []);
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center text-center py-12 bg-gray-100">
      <h1 className="text-[#E0B60E] text-3xl font-bold mb-[36px]">
        IFSULDEMINAS
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-8 w-11/12 max-w-[1200px]">
        <div className="bg-white p-6 rounded-lg shadow-lg w-[280px] h-[380px]" data-aos="fade-up">
          <h2 className="text-xl font-semibold">Sobre o IF</h2>
          <p className="text-gray-700 mt-2 text-left">
            O Instituto Federal do Sul de Minas Gerais (IFSULDEMINAS) – Campus
            Poços de Caldas é uma instituição pública de ensino reconhecida pela
            excelência na educação profissional e tecnológica. Localizado na
            charmosa cidade de Poços de Caldas.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg w-[280px] h-[380px]" data-aos="fade-up">
          <h2 className="text-xl font-semibold">Infraestrutura Moderna</h2>
          <p className="text-gray-700 mt-2 text-left">
            O campus conta com instalações amplas e modernas, proporcionando um
            ambiente de aprendizagem confortável e equipado com tecnologias de
            ponta. Além de oferecer um ótimo suporte para os trabalhos da EJ
            Turing.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg w-[280px] h-[380px]" data-aos="fade-up">
          <h2 className="text-xl font-semibold">EJ Turing</h2>
          <p className="text-gray-700 mt-2 text-left">
            A parceria entre o IF e a EJ permite que os estudantes apliquem seus
            conhecimentos em projetos reais, desenvolvendo habilidades e
            técnicas gerenciais. Além disso, a EJ fortalece o nome do IF no
            mercado, contribuindo para a formação de profissionais mais
            preparados e experientes.
          </p>
        </div>
      </div>
    </section>
  );
}
