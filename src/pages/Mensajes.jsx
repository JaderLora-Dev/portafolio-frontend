import { useState, useEffect } from "react";
import {
  actualizarEstadoContacto,
  eliminarContacto,
  obtenerContactos,
} from "../services/mensajes.service";

import MensajesTable from "../components/MensajesTable";
import {
  cerrarAlerta,
  confirmar,
  mostrarCarga,
  mostrarError,
  mostrarExito,
} from "../utils/alertas";
import "../Estilos/Mensajes.css";
import Spinner from "../components/Spinner";

function Mensajes() {
  const [contactos, setContactos] = useState([]);
  const [cargando, setCargando] = useState(false);

  const cargarContactos = async () => {
    setCargando(true);
    try {
      const respuesta = await obtenerContactos();

      setContactos(respuesta);
    } catch (error) {
      console.error(error);
    } finally {
      setCargando(false);
    }
  };

  const handleActualizarEstado = async (id, estado) => {
    const respuesta = await confirmar({
      titulo: "¿Cambiar estado?",
      texto: `El mensaje pasará a '${estado}'.`,
      confirmText: "Si, cambiar",
    });

    if (!respuesta.isConfirmed) {
      return;
    }
    try {
      mostrarCarga("Actualizando estado...");
      await actualizarEstadoContacto(id, estado);

      cargarContactos();

      cerrarAlerta();

      mostrarExito("Estado actualizado.");
    } catch (error) {
      mostrarError(
        error.response?.data?.mensaje || "No fue posible cambiar el estado.",
      );
    }
  };

  const hanbleEliminar = async (id) => {
    const respuesta = await confirmar({
      titulo: "¿Eliminar mensaje?",
      texto: "Esta acción no se puede desahacer.",
      icono: "warning",
      showCancelButton: true,
      confirmText: "Sí, eliminar",
    });

    if (!respuesta.isConfirmed) {
      return;
    }
    try {
      mostrarCarga("Eliminar mensaje...");
      const resultado = await eliminarContacto(id);

      await cargarContactos();

      cerrarAlerta();
      mostrarExito(resultado.mensaje);
    } catch (error) {
      cerrarAlerta();
      mostrarError(
        error.response?.data?.mensaje || "No se pudo eliminar el mensaje.",
      );
    }
  };

  useEffect(() => {
    cargarContactos();
  }, []);

  return (
    <section>
      {cargando ? (
        <Spinner />
      ) : (
        <div className="container-mensajes">
          <h1>Mensajes</h1>

          <MensajesTable
            contactos={contactos}
            handleActualizarEstado={handleActualizarEstado}
            hanbleEliminar={hanbleEliminar}
          />
        </div>
      )}
    </section>
  );
}

export default Mensajes;
