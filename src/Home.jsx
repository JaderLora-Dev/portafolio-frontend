import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SobreMi from "./components/SobreMi";
import Skills from "./components/Skills";
import Proyectos from "./components/Proyectos";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SobreMi />
        <Skills />
        <Proyectos />
        <Contacto />
        <Footer />
        {/*
         */}
      </main>
    </>
  );
}

export default Home;
