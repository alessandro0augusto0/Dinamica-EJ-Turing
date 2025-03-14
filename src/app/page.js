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
    <div className="w-full min-h-screen overflow-x-hidden">
      <Navbar />
      
      {/* Seção Início */}
      <section id="inicio" className="w-full min-h-screen pt-20">
        <Main />
      </section>

      {/* Seção Sobre */}
      <section id="sobre" className="w-full bg-gray-100 pt-20">
        <div className="w-full max-w-7xl mx-auto px-4">
          <Sobre />
        </div>
        
        <div className="w-full max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-yellow-500 mb-8 text-center">
            Venha nos conhecer e faça parte dessa transformação
          </h2>
          <Carrossel images={ejTuringImages} />
        </div>
        
        <div className="w-full max-w-7xl mx-auto px-4 py-15">
          <IfSUl />
        </div>
        
        <div className="w-full max-w-7xl mx-auto px-4 py-4">
          <h2 className="text-3xl font-bold text-yellow-500 text-center py-10">
            Fotos da WeekEng em parceria com a EJ Turing
          </h2>
          <Carrossel images={weekengImages} />
        </div>
      </section>

      {/* Seção Serviços */}
      <section id="servicos" className="w-full bg-gray-100 pt-20">
        <div className="w-full">
          <Services />
        </div>
      </section>

      {/* Seção Contato */}
      <section id="contato" className="w-full bg-gray-100 pt-20">
        <div className="w-full max-w-7xl mx-auto px-4 py-4">
          <Contato />
        </div>
      </section>

      <Footer />
    </div>
  );
}
