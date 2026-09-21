import { useEffect, useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";
import "../Estilos/Navbar.css";

function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [seccionActiva, setSeccionActiva] = useState("inicio");

  useEffect(() => {
    const secciones = document.querySelectorAll("main section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setSeccionActiva(visible[0].target.id);
        }
      },
      {
        threshold: [0.3, 0.5, 0.7],
      },
    );

    secciones.forEach((seccion) => observer.observe(seccion));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="navbar-header">
      <div className="navbar-contenedor">
        <a href="#inicio" className="navbar-logo">
          Jader<span> Dev</span>
        </a>

        <button
          className="btn-menu"
          onClick={() => setMenuAbierto(!menuAbierto)}
        >
          {menuAbierto ? <LuX /> : <LuMenu />}
        </button>

        <nav className={menuAbierto ? "navbar activo" : "navbar cerrado"}>
          <a
            href="#inicio"
            className={seccionActiva === "inicio" ? "activo" : ""}
          >
            Inicio
          </a>
          <a
            href="#sobre-mi"
            className={seccionActiva === "sobre-mi" ? "activo" : ""}
          >
            Sobre mí
          </a>
          <a
            href="#skills"
            className={seccionActiva === "skills" ? "activo" : ""}
          >
            Habilidades
          </a>
          <a
            href="#proyectos"
            className={seccionActiva === "proyectos" ? "activo" : ""}
          >
            Proyectos
          </a>

          <a
            href="#contacto"
            className={seccionActiva === "contacto" ? "activo" : ""}
          >
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
