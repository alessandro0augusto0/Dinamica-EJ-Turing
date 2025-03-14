"use client";

import Image from "next/image";
import Navbar from "./components/navBar";
import Main from "./components/main";
import Services from "./components/services";
import Footer from "./components/footer";
import About_Eng from "./components/about_eng_comp";
import Contato from "./components/contato";
import Carrossel from "./components/carrossel";
import Sobre from "./components/sobre";
import IfSUl from "./components/if";

const ejTuringImages = [
  "/images/ej-turing/foto1.jpg",
  "/images/ej-turing/foto2.jpg",
  "/images/ej-turing/foto3.jpg",
  "/images/ej-turing/foto4.jpg",
  "/images/ej-turing/foto5.jpg",
  "/images/ej-turing/foto6.jpg",
];

const weekengImages = [
  "/images/weekeng/foto1.jpg",
  "/images/weekeng/foto2.jpg",
  "/images/weekeng/foto3.jpg",
  "/images/weekeng/foto4.jpg",
  "/images/weekeng/foto5.jpg",
  "/images/weekeng/foto6.jpg",
];

export default function Home() {
  return (
    <>
      <Navbar />
      {/* Página 1 - Início */}
      <Main />

      {/* Página 2 - Sobre (Preencher) */}
      <section id="sobre-1" className="flex items-center justify-center bg-gray-100">
        <Sobre />
      </section>
      <section id="sobre-2" className="flex flex-col items-center justify-center bg-gray-100 py-8">
        <h2 className="text-3xl font-bold text-yellow-500 mb-8">
          Venha nos conhecer e faça parte dessa transformação
        </h2>
        <Carrossel images={ejTuringImages} />
      </section>
      <section id="sobre-2" className="flex items-center justify-center bg-gray-100">
        <IfSUl />
      </section>
      <section id="sobre-3" >
        <About_Eng />
      </section>
      <section id="sobre-4" className="flex flex-col items-center justify-center py-8">
        <h2 className="text-3xl font-bold text-yellow-500 mb-8">
          Fotos da WeekEng em parceria com a EJ Turing
        </h2>
        <Carrossel images={weekengImages} />
      </section>

      {/* Página 7 - Serviços */}
      <section id="servicos">
        <Services />
      </section>

      {/* Página 8 - Contato (Preencher) */}
      <section id="contato" >
        <Contato />
      </section>

      <Footer />
    </>
  );
}
