import { FaGithub, FaLinkedinIn, FaRegCopyright } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import "../Estilos/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-contenedor">
        <div className="footer-logo">
          <a href="#inicio">
            Jader <span>Dev</span>
          </a>
          <p className="parrafo-dev">Desarrollador Full Stack</p>
        </div>

        <p className="derechos-footer">
          <FaRegCopyright size={19} /> 2026 Jader Dev. Todos los derechos
          reservados.
        </p>

        <div className="redes-footer">
          <a href="https://github.com/JaderLora-Dev" className="GitHub">
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/jader-lora-dev/"
            className="icon-link"
          >
            <FaLinkedinIn size={19} />
          </a>

          <a href="#contacto">
            <LuMail size={19} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
