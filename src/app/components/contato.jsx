"use client";
import { useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";

export default function Contato() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Nome é obrigatório";
    if (!formData.email) {
      newErrors.email = "E-mail é obrigatório";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "E-mail inválido";
    }
    if (!formData.message) newErrors.message = "Mensagem é obrigatória";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Enviar formulário
      console.log("Formulário enviado:", formData);
      alert("Mensagem enviada com sucesso!");
      setFormData({ name: "", email: "", message: "" }); // Limpar formulário
    }
  };

  return (
    <section className="section-container bg-[#F3F4F6]">
      <div className="content-wrapper">
        <h2 className="section-title text-[#0a1f44]">Entre em Contato</h2>
        
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start justify-between gap-8">
          <div className="card-container w-full md:w-1/2 bg-white p-4" data-aos="fade-up-right">
            <h3 className="text-[#0a1f44] font-semibold text-lg mb-3">
              Fale com a gente!
            </h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Seu nome"
                value={formData.name}
                onChange={handleChange}
                className={`w-full p-3 mb-4 border ${
                  errors.name ? "border-red-500" : "border-yellow-500"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-500`}
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

              <input
                type="email"
                name="email"
                placeholder="Seu e-mail"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-3 mb-4 border ${
                  errors.email ? "border-red-500" : "border-yellow-500"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-500`}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

              <textarea
                name="message"
                placeholder="Sua mensagem"
                value={formData.message}
                onChange={handleChange}
                className={`w-full p-3 mb-4 border ${
                  errors.message ? "border-red-500" : "border-yellow-500"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-500`}
                rows="4"
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

              <button
                type="submit"
                className="w-full bg-yellow-500 border-yellow-500 text-white font-bold py-3 rounded-md hover:bg-[#0a1f44] transition cursor-pointer"
              >
                Enviar
              </button>
            </form>
          </div>
          
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-[#0a1f44] font-semibold text-lg mb-4">
              Redes Sociais
            </h3>
            <div className="flex space-x-4 mb-20">
              <a
                href="https://www.facebook.com/ifpocosoficial/photos/-ifsuldeminas-campus-po%C3%A7os-de-caldas-lan%C3%A7a-aplicativo-de-gest%C3%A3o-empresarial-no-e/1035435288611622/?_rdr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-900 text-white p-3 rounded-full"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/ej-turing-consultoria-e-desenvolvimento/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-900 text-white p-3 rounded-full"
              >
                <FaLinkedinIn size={18} />
              </a>
              <a
                href="https://www.instagram.com/ej_turing/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-900 text-white p-3 rounded-full"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://github.com/EJTuring"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-900 text-white p-3 rounded-full"
              >
                <FaGithub size={18} />
              </a>
            </div>

            <h3 className="text-[#0a1f44] font-semibold text-lg mb-2">
              Endereço
            </h3>
            <p className="text-[#0a1f44]">
              Av. Dirce Pereira Rosa, 300 - Jardim Esperança
              <br />
              Poços de Caldas - MG, 37713-100
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}