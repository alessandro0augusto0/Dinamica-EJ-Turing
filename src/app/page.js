import Image from "next/image";
import Navbar from "./components/navBar";
import Main from "./components/main";
import Services from "./components/services";
import Footer from "./components/footer";

export default function Home() {
  return (
   <>
   <Navbar></Navbar>
   <section>
   <Main></Main>
   </section>
   <section id="servicos">
   <Services></Services>
   </section>
   <Footer></Footer>
   </>
  );
}
