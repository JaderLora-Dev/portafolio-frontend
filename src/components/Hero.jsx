import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import "../Estilos/Hero.css";
import { LuChevronRight, LuMail } from "react-icons/lu";
import fotoPerfil from "../assets/perfil.png";

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-contenedor">
        <div className="hero-contenido">
          <div>
            <span className="hero-saludo">¡Hola!, soy,</span>
            <h2>Jader</h2>

            <h1>
              <span>Desarrollador Full Stack</span>
            </h1>

            <p className="hero-descripcion">
              Desarrollo aplicaciones web modernas utilizando JavaScript, React,
              Node.js, Express y MySQL. Construyo soluciones funcionales y bien
              estructuradas, enfocadas en resolver problemas reales y aportar
              valor a través de la tecnología.
            </p>

            <div className="hero-botones">
              <a href="#proyectos" className="btn btn-principal">
                Ver proyectos
                <LuChevronRight size={18} />
              </a>

              <a href="#contacto" className="btn btn-secundario">
                Contactarme
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-avatar">
              <img src={fotoPerfil} alt="Full stack" />
            </div>
          </div>

          <div className="navbar-social">
            <a href="https://github.com/JaderLora-Dev" className="GitHub">
              <FaGithub />
            </a>

            <a href="#" className="icon-in">
              <FaLinkedinIn size={19} />
            </a>

            <a href="#contacto">
              <LuMail size={19} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
