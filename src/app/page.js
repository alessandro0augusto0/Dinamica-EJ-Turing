"use client";

import Image from "next/image";
import Navbar from "./components/navBar";
import Main from "./components/main";
import Services from "./components/services";
import Footer from "./components/footer";
import About_Eng from "./components/about_eng_comp"
import Contato from "./components/contato"

import { Component } from "react";

export default function Home() {
  return (
   <>
   <Navbar></Navbar>
   <section>
   <Main></Main>
   </section>
   <section id="sobre">
   <About_Eng></About_Eng>
   </section>
   <section id="servicos">
   <Services></Services>
   </section>
   <section id="contato">
   <Contato></Contato>
   </section>
   <Footer></Footer>
   </>
  );
}
