import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import "../Estilos/ProyectosPublicado.css";
import { useState } from "react";
import { useEffect } from "react";
import { obtenerProyectosPublicado } from "../services/proyectos.service";

function ProyectosPublicado() {
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    const cargarProyectos = async () => {
      try {
        const respuesta = await obtenerProyectosPublicado();

        setProyectos(respuesta);
      } catch (error) {
        console.error(error);
      }
    };
    cargarProyectos();
  }, []);

  return (
    <section id="proyectos" className="proyectos">
      <div className="proyectosPublicado-contenedor">
        <div className="proyectosPublicado-encabezado">
          <span>Proyectos</span>

          <h2>Soluciones que he desarrollado</h2>
        </div>

        {proyectos.length === 0 ? (
          <p>No hay proyectos publicados actualmente.</p>
        ) : (
          <div className="proyectosPublicado-grid">
            {proyectos.map((proyecto) => (
              <article className="proyectoPublicado-card" key={proyecto.id}>
                <div className="proyectoPublicado-imagen">
                  {proyecto.imagen_url ? (
                    <img
                      src={proyecto.imagen_url}
                      alt={`Captura del proyecto ${proyecto.titulo}`}
                    />
                  ) : (
                    <p>Sin imagen</p>
                  )}
                </div>

                <div className="proyectoPublicado-contenido">
                  <h3>{proyecto.titulo}</h3>

                  <p>{proyecto.descripcion}</p>

                  <div className="proyectoPublicado-tecnologias">
                    {proyecto.tecnologias
                      ?.split(",")
                      .map((tecnologia) => tecnologia.trim())
                      .filter(Boolean)
                      .map((tecnologia) => (
                        <span key={tecnologia}>{tecnologia}</span>
                      ))}
                  </div>

                  <div className="proyectoPublicado-botones">
                    {proyecto.github && (
                      <a
                        href={proyecto.github}
                        target="_blank"
                        rel="noreferrer"
                        className="proyectoPublicado-btn proyectoPublicado-btn-github"
                      >
                        <FaGithub size={18} />
                        GitHub
                      </a>
                    )}

                    {proyecto.demo && (
                      <a
                        href={proyecto.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="proyectoPublicado-btn proyectoPublicado-btn-demo"
                      >
                        <FiExternalLink size={17} />
                        Ver proyecto
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default ProyectosPublicado;
