export default function Sobre() {
    return (
      <section className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center py-12">
        <h1 className="text-[#000000] text-3xl font-bold mb-[12px]">Sobre</h1>
        <div className="border-b-4 border-[#E0B60E] w-[171px] mb-[42px]"></div>
        <h1 className="text-[#E0B60E] text-3xl font-bold mb-[36px]">EJ Turing</h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-8 w-11/12 max-w-[1200px]">
          <div className="bg-white p-6 rounded-lg shadow-lg border w-[280px] h-[380px]">
            <h2 className="text-xl font-semibold">Quem somos</h2>
            <p className="text-gray-700 mt-2 text-left">
                Somos a EJ Turing, uma Empresa Júnior formada por estudantes apaixonados por inovação e excelência. Nossa missão é conectar teoria e prática, oferecendo soluções de alta qualidade para empresas e empreendedores, enquanto desenvolvemos habilidades essenciais para o mercado de trabalho.
            </p>
          </div>
  
          <div className="bg-white p-6 rounded-lg shadow-lg border w-[280px] h-[380px]">
            <h2 className="text-xl font-semibold">Propósito</h2>
            <p className="text-gray-700 mt-2 text-left">
            Como parte do Movimento Empresa Júnior (MEJ), operamos com a dedicação e profissionalismo de uma empresa real, mas com um propósito único: gerar impacto e transformar talentos em futuros líderes. Cada projeto que realizamos representa um compromisso com a inovação, o aprendizado e a entrega de valor para nossos clientes.
            </p>
          </div>
  
          <div className="bg-white p-6 rounded-lg shadow-lg border w-[280px] h-[380px]">
            <h2 className="text-xl font-semibold">Valores</h2>
            <p className="text-gray-700 mt-2 text-left">
              • Comprometimento<br />
              • Ética<br />
              • Inovação<br />
              • Responsabilidade<br />
              • Transparência
            </p>
          </div>
        </div>
      </section>
    );
  }
  