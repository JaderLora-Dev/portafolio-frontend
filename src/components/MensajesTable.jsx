import { LuChevronDown, LuChevronUp, LuTrash2, LuUsers } from "react-icons/lu";
import { useState } from "react";
import "../Estilos/MensajesTable.css";

function MensajesTable({ contactos, handleActualizarEstado, hanbleEliminar }) {
  const [verMensaje, setVerMensaje] = useState(null);

  return (
    <section className="padre-container-mensaje">
      {contactos.length === 0 ? (
        <p>No hay mensajes disponibles...</p>
      ) : (
        contactos.map((contacto) => (
          <div className="mensajeTable-contenido" key={contacto.id}>
            <div className="contenido-rows1">
              <span className={`icono-users ${contacto.estado}`}>
                <LuUsers />
              </span>
              <div className="rows2">
                <span>{contacto.nombre}</span>
                <span>{contacto.email}</span>
              </div>
              <div className="rows3">
                <span>
                  {new Date(contacto.fecha_creacion).toLocaleDateString(
                    "es-CO",
                  )}
                </span>
                <span>
                  {new Date(contacto.fecha_creacion).toLocaleTimeString(
                    "es-CO",
                  )}
                </span>
              </div>
            </div>

            <div className="contenedor-boton-estado">
              <button
                type="button"
                value={verMensaje}
                onClick={() =>
                  setVerMensaje(verMensaje === contacto.id ? null : contacto.id)
                }
              >
                {verMensaje === contacto.id ? "Ver mensaje" : "Ocultar mensaje"}
                {verMensaje === contacto.id ? (
                  <LuChevronUp size={20} />
                ) : (
                  <LuChevronDown size={20} />
                )}
              </button>

              <select
                value={contacto.estado}
                onChange={(e) =>
                  handleActualizarEstado(contacto.id, e.target.value)
                }
                className={`select ${contacto.estado}`}
              >
                <option value="pendiente">Pendiente</option>
                <option value="leido">Leido</option>
                <option value="respondido">Respondido</option>
              </select>
            </div>

            {verMensaje === contacto.id && (
              <div className="contendio-oculto">
                <div>
                  <span>Asunto: </span>
                  <span>{contacto.asunto}</span>
                </div>
                <div>
                  <span>Mensaje: </span>
                  <span>{contacto.mensaje}</span>
                </div>
                <button
                  type="button"
                  onClick={() => hanbleEliminar(contacto.id)}
                >
                  <LuTrash2 size={19} /> Eliminar
                </button>
              </div>
            )}
          </div>
        ))
      )}
    </section>
  );
}

export default MensajesTable;
