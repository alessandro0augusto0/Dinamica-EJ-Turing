"use client";

import Image from "next/image";

export default function Main() {
  return (
    <>
      <section
        id="inicio"
        className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/banner.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-blue via-black to-transparent opacity-50"></div>

        <div className="relative z-10 px-6 max-w-3xl text-white">
          <h1 className="text-3xl md:text-4xl font-bold">
            Transformando desafios em soluções inovadoras!
          </h1>

          <div className="mt-6">
            <a
              href="#servicos"
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-6 rounded-full transition-all"
            >
              CONHEÇA NOSSOS SERVIÇOS
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
