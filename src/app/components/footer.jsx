"use client";

import { FaFacebookF, FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0a1f44] text-white py-6">
      <div className="flex flex-col items-center">
        <img src="/logo_footer.png" alt="EJ Turing" className="h-12 mb-2" />

        <div className="flex gap-4 mt-3">
          <a href="#" className="bg-white text-[#0a1f44] p-2 rounded-full hover:opacity-80 transition">
            <FaFacebookF size={18} />
          </a>
          <a href="#" className="bg-white text-[#0a1f44] p-2 rounded-full hover:opacity-80 transition">
            <FaLinkedinIn size={18} />
          </a>
          <a href="#" className="bg-white text-[#0a1f44] p-2 rounded-full hover:opacity-80 transition">
            <FaInstagram size={18} />
          </a>
          <a href="#" className="bg-white text-[#0a1f44] p-2 rounded-full hover:opacity-80 transition">
            <FaGithub size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
