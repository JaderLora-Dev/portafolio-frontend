import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import imgRestaurante from "../assets/restaurante.png";
import "../Estilos/Proyectos.css";

function Proyectos() {
  const proyectos = [
    {
      id: 1,
      titulo: "Sistema de gestión para restaurante",
      descripcion:
        "Aplicación web para gestionar productos, categorías, mesas, pedidos, pagos y estadísticas, con diferentes roles de usuario.",
      imagen: imgRestaurante,
      tecnologias: ["React", "Node.js", "Express.js", "MySQL", "JWT"],

      github: "#",
      demo: "#",
    },
    {
      id: 2,
      titulo: "Tienda Online",
      descripcion:
        "Aplicación web de comercio electrónico para gestionar productos, usuarios y las diferentes funcionalidades de una tienda online.",
      imagen: imgRestaurante,
      tecnologias: ["React", "Node.js", "Express.js", "MongoDB"],
      github: "#",
      demo: "#",
    },
    {
      id: 3,
      titulo: "Dashboard de ventas",
      descripcion:
        "Panel administrativo para visualizar información de ventas mediante gráficos, estadísticas y datos obtenidos desde una API.",
      imagen: imgRestaurante,
      tecnologias: ["React", "Chart.js", "Node.js", "MySQL"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="proyectos" className="proyectos">
      <div className="proyectos-contenedor">
        <div className="proyectos-encabezado">
          <span>Proyectos</span>

          <h2>Soluciones que he desarrollado</h2>
        </div>

        <div className="proyectos-grid">
          {proyectos.map((proyecto) => (
            <article className="proyecto-card" key={proyecto.id}>
              <div className="proyecto-imagen">
                <img
                  src={proyecto.imagen}
                  alt={`Captura del proyecto ${proyecto.titulo}`}
                />
              </div>

              <div className="proyecto-contenido">
                <h3>{proyecto.titulo}</h3>

                <p>{proyecto.descripcion}</p>

                <div className="proyecto-tecnologias">
                  {proyecto.tecnologias.map((tecnologia) => (
                    <span key={tecnologia}>{tecnologia}</span>
                  ))}
                </div>

                <div className="proyecto-botones">
                  <a
                    href={proyecto.github}
                    target="_blank"
                    rel="noreferrer"
                    className="proyecto-btn proyecto-btn-github"
                  >
                    <FaGithub size={18} />
                    GitHub
                  </a>

                  <a
                    href={proyecto.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="proyecto-btn proyecto-btn-demo"
                  >
                    <FiExternalLink size={17} />
                    Ver proyecto
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Proyectos;
