"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importa os estilos do AOS

export default function Sobre() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duração da animação (em milissegundos)
      easing: "ease-in-out", // Tipo de transição
    });
  }, []);

  return (
    <section className="section-container bg-[#F3F4F6]">
      <div className="content-wrapper">
        <h1 className="section-title text-[#0a1f44]">Sobre</h1>
        <div className="border-b-4 border-yellow-500 w-36 mx-auto mb-6"></div>
        <h2 className="section-subtitle">EJ Turing</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8" data-aos="zoom-in">
          <div className="card-container h-[340px] bg-white">
            <h2 className="text-xl font-semibold text-[#0a1f44]">Quem somos</h2>
            <p className="text-[#0a1f44] mt-2 text-left">
              Somos a EJ Turing, uma Empresa Júnior formada por estudantes
              apaixonados por inovação e excelência. Nossa missão é conectar
              teoria e prática, oferecendo soluções de alta qualidade para
              empresas e empreendedores, enquanto desenvolvemos habilidades
              essenciais para o mercado de trabalho.
            </p>
          </div>

          <div className="card-container h-[340px] bg-white">
            <h2 className="text-xl font-semibold text-[#0a1f44]">Propósito</h2>
            <p className="text-[#0a1f44] mt-2 text-left">
              Como parte do Movimento Empresa Júnior (MEJ), operamos com a
              dedicação e profissionalismo de uma empresa real, mas com um
              propósito único: gerar impacto e transformar talentos em futuros
              líderes. Cada projeto que realizamos representa um compromisso com a
              inovação, o aprendizado e a entrega de valor para nossos clientes.
            </p>
          </div>

          <div className="card-container h-[340px] bg-white">
            <h2 className="text-xl font-semibold text-[#0a1f44]">Valores</h2>
            <p className="text-[#0a1f44] mt-2 text-left">
              • Comprometimento
              <br />
              • Ética
              <br />
              • Inovação
              <br />
              • Responsabilidade
              <br />
              • Transparência
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}