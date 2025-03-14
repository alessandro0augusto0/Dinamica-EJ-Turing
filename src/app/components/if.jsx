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
    <section className="section-container bg-[#F3F4F6] !m-0 !p-0">
      <div className="content-wrapper !m-0 !p-0">
        <h1 className="section-title text-[#0a1f44]">IFSULDEMINAS</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="card-container h-[300px] bg-white" data-aos="fade-up">
            <h2 className="text-xl font-semibold text-[#0a1f44]">Sobre o IF</h2>
            <p className="text-[#0a1f44] mt-2 text-left">
              O Instituto Federal do Sul de Minas Gerais (IFSULDEMINAS) – Campus
              Poços de Caldas é uma instituição pública de ensino reconhecida
              pela excelência na educação profissional e tecnológica. Localizado
              na charmosa cidade de Poços de Caldas.
            </p>
          </div>

          <div className="card-container h-[300px] bg-white" data-aos="fade-up">
            <h2 className="text-xl font-semibold text-[#0a1f44]">
              Infraestrutura Moderna
            </h2>
            <p className="text-[#0a1f44] mt-2 text-left">
              O campus conta com instalações amplas e modernas, proporcionando
              um ambiente de aprendizagem confortável e equipado com tecnologias
              de ponta. Além de oferecer um ótimo suporte para os trabalhos da
              EJ Turing.
            </p>
          </div>

          <div className="card-container h-[300px] bg-white" data-aos="fade-up">
            <h2 className="text-xl font-semibold text-[#0a1f44]">EJ Turing</h2>
            <p className="text-[#0a1f44] mt-2 text-left">
              A parceria entre o IF e a EJ permite que os estudantes apliquem
              seus conhecimentos em projetos reais, desenvolvendo habilidades e
              técnicas gerenciais. Além disso, a EJ fortalece o nome do IF no
              mercado, contribuindo para a formação de profissionais mais
              preparados e experientes.
            </p>
          </div>
        </div>

        {/* Engenharia de Computação - Ajustado para evitar espaçamento extra */}
        <div className="content-wrapper !mt-0 !pt-0">
          <h1 className="section-title text-[#0a1f44] text-center mb-4 py-10">
            Engenharia de Computação
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            <div className="card-container bg-white shadow-lg rounded-lg overflow-hidden p-6">
              <div className="bg-[#162E50] p-3 flex justify-center">
                <img
                  src="/Eng_branco.png"
                  alt="Logo do Instituto Federal"
                  className="h-16"
                />
              </div>
              <div className="p-4">
                <p className="text-[#0a1f44] text-lg leading-relaxed text-center">
                  O curso de Engenharia de Computação do Instituto Federal
                  forma profissionais com sólidos conhecimentos em hardware
                  e software, capacitados para desenvolver e integrar
                  sistemas computacionais.
                </p>
              </div>
            </div>

            <div className="card-container bg-white shadow-lg rounded-lg overflow-hidden p-6">
              <div className="bg-[#162E50] p-3 flex justify-center">
                <img src="/EJ.png" alt="Logo EJ Turing" className="h-16" />
              </div>
              <div className="p-4">
                <p className="text-[#0a1f44] text-lg leading-relaxed text-center">
                  A EJ Turing agrega muito para o estudante de Engenharia de
                  Computação, proporcionando experiência prática,
                  desenvolvimento profissional e networking.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
