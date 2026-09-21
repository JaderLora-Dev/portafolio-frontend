import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import { registrarMensaje } from "../services/mensajes.service";
import { mostrarError, mostrarExito } from "../utils/alertas";
import "../Estilos/Contacto.css";

function Contacto() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [asunto, setAsunto] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const respuesta = await registrarMensaje({
        nombre,
        email,
        asunto,
        mensaje,
      });

      mostrarExito(respuesta.mensaje);
      setNombre("");
      setEmail("");
      setAsunto("");
      setMensaje("");
    } catch (error) {
      mostrarError(
        error.response?.data?.mensaje || "Error al enviar el mensaje.",
      );
    }
  };
  return (
    <section id="contacto" className="contacto">
      <div className="contacto-contenedor">
        <div className="contacto-encabezado">
          <span>Contacto</span>
          <h2> Hablemos de tu próximo proyecto </h2>
        </div>
        <div className="contacto-contenido">
          <div className="contacto-informacion">
            <h3>¿Tienes alguna pregunta?</h3>
            <p>
              Estoy disponible para conversar sobre oportunidades, proyectos y
              nuevas ideas relacionadas con el desarrollo de aplicaciones web.
            </p>
            <div className="contacto-datos">
              <a href="mailto:jadev9158@gmail.com" className="contacto-dato">
                <div className="contacto-icono">
                  <FaEnvelope />
                </div>
                <div>
                  <span>Correo</span> <strong>jadev9158@gmail.com</strong>
                </div>
              </a>
              <a
                href="https://wa.me/573009779192"
                target="_blank"
                rel="noreferrer"
                className="contacto-dato"
              >
                <div className="contacto-icono">
                  <FaWhatsapp />
                </div>
                <div>
                  <span>WhatsApp</span> <strong>+57 3009779192</strong>
                </div>
              </a>
            </div>
          </div>
          {/* FORMULARIO */}
          <form onSubmit={handleSubmit} className="contacto-formulario">
            <div className="campo">
              <label htmlFor="nombre"> Nombre </label>
              <input
                type="text"
                id="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Tu nombre"
                required
              />
            </div>
            <div className="campo">
              <label htmlFor="email"> Correo electrónico </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                required
              />
            </div>
            <div className="campo">
              <label htmlFor="asunto"> Asunto </label>
              <input
                type="text"
                id="asunto"
                value={asunto}
                onChange={(e) => setAsunto(e.target.value)}
                placeholder="¿En qué podemos hablar?"
                required
              />
            </div>
            <div className="campo">
              <label htmlFor="mensaje"> Mensaje </label>
              <textarea
                id="mensaje"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                rows="5"
                placeholder="Escribe tu mensaje..."
                required
              ></textarea>
            </div>
            <button type="submit" className="contacto-boton">
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
export default Contacto;
