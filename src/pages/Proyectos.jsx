import { useEffect, useState } from "react";
import {
  actualizarEstadoProyecto,
  eliminarProyecto,
  obtenerProyectos,
} from "../services/proyectos.service";
import ProyectosTable from "../components/ProyectosTable";
import Modal from "../components/Modal";
import Spinner from "../components/Spinner";
import {
  cerrarAlerta,
  confirmar,
  mostrarCarga,
  mostrarError,
  mostrarExito,
} from "../utils/alertas";
import ProyectosForm from "../components/ProyectosForm";
import { LuPlus } from "react-icons/lu";
import "../Estilos/Proyectos.css";

function Proyectos() {
  const [proyectos, setProyectos] = useState([]);
  const [mostrarModal, setMostrarModal] = useState(false);

  const [editarProyectos, setEditarProyectos] = useState(null);
  const [actualizandoId, setActualizandoId] = useState(null);
  const [cargando, setCargando] = useState(false);

  const cargarProyectos = async () => {
    try {
      setCargando(true);
      const respuesta = await obtenerProyectos();

      setProyectos(respuesta);
    } catch (error) {
      console.error(error);
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    cargarProyectos();
  }, []);

  //nuevo proyecto
  const nuevoProyecto = () => {
    setEditarProyectos(null);

    setMostrarModal(true);
  };
  //cerrar modal
  const cerrarModal = () => {
    setMostrarModal(false);

    setEditarProyectos(null);
  };

  // editar proyectos
  const handleEditar = (proyecto) => {
    setEditarProyectos(proyecto);

    setMostrarModal(true);
  };

  //cambiar estado
  const handleCambiarEstado = async (id, estado) => {
    if (actualizandoId === id) return;

    const respuesta = await confirmar({
      titulo: "¿Cambiar estado?",
      texto: `El proyecto pasará a ${estado}.`,
      confirmText: "Sí, cambiar",
    });

    if (!respuesta.isConfirmed) return;

    try {
      setActualizandoId(id);

      mostrarCarga("Actualizando estado...");

      await actualizarEstadoProyecto(id, estado);

      await cargarProyectos();

      cerrarAlerta();
      await mostrarExito("Estado actualizado.");
    } catch (error) {
      cerrarAlerta();
      mostrarError(
        error?.response?.data?.mensaje || "No fue posbile cambiar el estado.",
      );
    } finally {
      setActualizandoId(null);
    }
  };

  //eliminar proyecto
  const handleEliminar = async (id) => {
    const resultado = await confirmar({
      titulo: "¿Eliminar proyecto?",
      texto: "Esta acción no se puede deshacer",
      icono: "warning",
      confirmText: "Sí, eliminar",
    });

    if (!resultado.isConfirmed) return;

    try {
      mostrarCarga("Eliminado proyecto...");

      const respuesta = await eliminarProyecto(id);

      await cargarProyectos();

      cerrarAlerta();

      await mostrarExito(respuesta.mensaje);
    } catch (error) {
      cerrarAlerta();
      mostrarError(
        error?.response?.data?.mensaje || "No se puede eliminar el proyecto",
      );
    }
  };

  return (
    <section>
      <div className="container-proyecto">
        <div className="header-proyecto">
          <h1>Proyectos</h1>
          <button onClick={nuevoProyecto}>
            <LuPlus /> Nuevo proyecto
          </button>
        </div>
        {cargando ? (
          <Spinner />
        ) : (
          <ProyectosTable
            proyectos={proyectos}
            handleEditar={handleEditar}
            handleCambiarEstado={handleCambiarEstado}
            handleEliminar={handleEliminar}
            actualizandoId={actualizandoId}
          />
        )}
      </div>

      <Modal
        abierto={mostrarModal}
        cerrar={cerrarModal}
        titulo={editarProyectos ? "Editar proyecto" : " Nuevo proyecto"}
      >
        <ProyectosForm
          editarProyecto={editarProyectos}
          cargarProyectos={cargarProyectos}
          cerrarModal={cerrarModal}
        />
      </Modal>
    </section>
  );
}

export default Proyectos;
