import { FaGithub, FaRegCheckCircle, FaRegTimesCircle } from "react-icons/fa";
import "../Estilos/ProyectosTable.css";
import { LuClipboardPen, LuTrash2 } from "react-icons/lu";
import { FiExternalLink } from "react-icons/fi";

function ProyectosTable({
  proyectos,
  handleCambiarEstado,
  handleEditar,
  handleEliminar,
  actualizandoId,
}) {
  return (
    <section className="proyectosTable-contenedor">
      <div className="proyectosTable-grid">
        {proyectos.map((proyecto) => (
          <article className="proyectoTable-card" key={proyecto.id}>
            <div className="proyectoTable-imagen">
              <img src={proyecto.imagen_url} alt={proyecto.titulo} />

              <div className={`proyecto-estado ${proyecto.estado}`}>
                {proyecto.estado}
              </div>
            </div>

            <div className="proyectoTable-contenido">
              <h3>{proyecto.titulo}</h3>

              <p>{proyecto.descripcion}</p>

              <div className="proyectoTable-tecnologias">
                {proyecto.tecnologias?.split(",").map((tecnologia) => (
                  <span key={tecnologia.trim()}>{tecnologia.trim()}</span>
                ))}
              </div>

              <div className="botones-enlaces">
                {proyecto.github && (
                  <a
                    href={proyecto.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-enlaces btn-github"
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
                    className="btn-enlaces btn-demo"
                  >
                    <FiExternalLink size={17} />
                    Ver demo
                  </a>
                )}
              </div>

              <div className="proyectoTable-botones">
                <button
                  className="botones-table  btn-editar"
                  onClick={() => handleEditar(proyecto)}
                >
                  <LuClipboardPen size={18} />
                  Editar
                </button>
                <button
                  className={`botones-table btn-estado ${proyecto.estado}`}
                  onClick={() =>
                    handleCambiarEstado(
                      proyecto.id,
                      proyecto.estado === "publicado" ? "oculto" : "publicado",
                    )
                  }
                >
                  {actualizandoId === proyecto.id ? (
                    "Actualizando..."
                  ) : proyecto.estado === "publicado" ? (
                    <>
                      <FaRegTimesCircle size={18} /> Ocultar
                    </>
                  ) : (
                    <>
                      <FaRegCheckCircle size={18} />
                      Publicar
                    </>
                  )}
                </button>

                <button
                  className="botones-table btn-eliminar"
                  onClick={() => handleEliminar(proyecto.id)}
                >
                  <LuTrash2 size={18} />
                  Eliminar
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProyectosTable;
