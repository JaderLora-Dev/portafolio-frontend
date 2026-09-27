import { useEffect, useState } from "react";
import {
  cerrarAlerta,
  mostrarCarga,
  mostrarError,
  mostrarExito,
} from "../utils/alertas.js";
import {
  actualizarProyecto,
  crearProyecto,
} from "../services/proyectos.service.js";
import "../Estilos/ProyectosForm.css";

function ProyectosForm({ editarProyecto, cerrarModal, cargarProyectos }) {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [tecnologias, setTecnologias] = useState("");
  const [imagen, setImagen] = useState(null);
  const [imagenActual, setImagenActual] = useState("");
  const [estado, setEstado] = useState("publicado");
  const [demo, setDemo] = useState("");
  const [github, setGithub] = useState("");

  useEffect(() => {
    if (editarProyecto) {
      setTitulo(editarProyecto.titulo || "");
      setDescripcion(editarProyecto.descripcion || "");
      setTecnologias(editarProyecto.tecnologias || "");
      setImagenActual(editarProyecto.imagen_url);
      setEstado(editarProyecto.estado || "publicado");
      setDemo(editarProyecto.demo || "");
      setGithub(editarProyecto.github || "");
      setImagen(null);
    } else {
      setTitulo("");
      setDescripcion("");
      setTecnologias("");
      setImagenActual("");
      setEstado("publicado");
      setDemo("");
      setGithub("");
      setImagen(null);
    }
  }, [editarProyecto]);

  const guardarProyecto = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("titulo", titulo.trim());
      formData.append("descripcion", descripcion.trim());
      formData.append("tecnologias", tecnologias.trim());
      formData.append("estado", estado);
      formData.append("github", github.trim());
      formData.append("demo", demo.trim());

      if (imagen) {
        formData.append("imagen", imagen);
      }

      if (editarProyecto) {
        mostrarCarga("Actualizando proyecto...");

        await actualizarProyecto(editarProyecto.id, formData);

        cerrarAlerta();

        await mostrarExito("Ptoyecto actualizado correctamente.");
      } else {
        mostrarCarga("Guardar proyecto...");

        await crearProyecto(formData);

        cerrarAlerta();

        await mostrarExito("Proyecto creado correctamente.");
      }

      await cargarProyectos();

      cerrarModal();
    } catch (error) {
      cerrarAlerta();
      mostrarError(
        error?.response?.data?.mensaje || "No se puedo guardar el proyecto.",
      );
    }
  };

  return (
    <section className="proyectoForm-container">
      <form className="protectoForm-interno" onSubmit={guardarProyecto}>
        <label htmlFor="titulo">Tìtulo</label>

        <input
          type="text"
          id="titulo"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Titulo del proyecto."
          required
        />

        <label htmlFor="descripcion">Descripcion</label>

        <textarea
          id="descripcion"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          placeholder="Descripcion del proyecto"
          rows="5"
          required
        />

        <label htmlFor="tecnologias">Tecnologias</label>
        <input
          type="text"
          id="tecnologias"
          value={tecnologias}
          onChange={(e) => setTecnologias(e.target.value)}
          placeholder="React, Node.js, MySQL"
          required
        />

        <label htmlFor="imagen">Imagen</label>
        <input
          type="file"
          id="imagen"
          accept="image/jpeg,image/png,image/webp"
          onChange={(e) => setImagen(e.target.files[0] || null)}
        />

        {imagenActual && (
          <div>
            <p>Imagen actual:</p>

            <img
              src={imagenActual}
              alt={`Imagen del proyecto ${titulo}`}
              width="150"
            />
          </div>
        )}

        <label htmlFor="estado">Estado</label>

        <select
          id="estado"
          value={estado}
          onChange={(e) => setEstado(e.target.value)}
          required
        >
          <option value="publicado">publicado</option>
          <option value="oculto">Oculto</option>
        </select>

        <label htmlFor="github">GitHub</label>
        <input
          type="url"
          id="github"
          value={github}
          onChange={(e) => setGithub(e.target.value)}
          placeholder="https://github.com/usuario/proyecto"
        />

        <label htmlFor="demo">Demo</label>
        <input
          type="url"
          id="demo"
          value={demo}
          onChange={(e) => setDemo(e.target.value)}
          placeholder="https://mi-proyecto.onrender.com"
        />

        <button type="submit" className="form-boton">
          {editarProyecto ? "Actualizar proyecto" : "Guardar proyecto"}
        </button>
      </form>
    </section>
  );
}

export default ProyectosForm;
