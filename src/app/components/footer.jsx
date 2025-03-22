"use client";

import { FaFacebookF, FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0a1f44] text-white py-6">
      <div className="flex flex-col items-center">
        <img src="/logo_footer.png" alt="EJ Turing" className="h-12 mb-2" />

        <div className="flex gap-4 mt-3">
          <a
            href="https://www.facebook.com/ifpocosoficial/photos/-ifsuldeminas-campus-po%C3%A7os-de-caldas-lan%C3%A7a-aplicativo-de-gest%C3%A3o-empresarial-no-e/1035435288611622/?_rdr"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#0a1f44] p-2 rounded-full hover:opacity-80 transition"
          >
            <FaFacebookF size={18} />
          </a>
          <a
            href="https://www.linkedin.com/company/ej-turing-consultoria-e-desenvolvimento/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#0a1f44] p-2 rounded-full hover:opacity-80 transition"
          >
            <FaLinkedinIn size={18} />
          </a>
          <a
            href="https://www.instagram.com/ej_turing/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#0a1f44] p-2 rounded-full hover:opacity-80 transition"
          >
            <FaInstagram size={18} />
          </a>
          <a
            href="https://github.com/EJTuring"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#0a1f44] p-2 rounded-full hover:opacity-80 transition"
          >
            <FaGithub size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}