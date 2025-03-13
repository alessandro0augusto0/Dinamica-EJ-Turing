// src/app/page.js
import Navbar from "./components/navBar";
import Main from "./components/main";
import Services from "./components/services";
import Footer from "./components/footer";
import Carrossel from "./components/carrossel";

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
      <section id="sobre-1" className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-2xl text-gray-800">Preencher</p>
      </section>

      {/* Página 3 - Carrossel EJ Turing */}
      <section id="sobre-2" className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-8">
        <h2 className="text-3xl font-bold text-yellow-500 mb-8">
          Venha nos conhecer e faça parte dessa transformação
        </h2>
        <Carrossel images={ejTuringImages} />
      </section>

      {/* Página 4 - Sobre (Preencher) */}
      <section id="sobre-3" className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-2xl text-gray-800">Preencher</p>
      </section>

      {/* Página 5 - Carrossel Weekeng */}
      <section id="sobre-4" className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-8">
        <h2 className="text-3xl font-bold text-yellow-500 mb-8">
          Fotos da Weekeng
        </h2>
        <Carrossel images={weekengImages} />
      </section>

      {/* Página 6 - Sobre (Preencher) */}
      <section id="sobre-5" className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-2xl text-gray-800">Preencher</p>
      </section>

      {/* Página 7 - Serviços */}
      <section id="servicos">
        <Services />
      </section>

      {/* Página 8 - Contato (Preencher) */}
      <section id="contato" className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-2xl text-gray-800">Preencher</p>
      </section>

      <Footer />
    </>
  );
}