import { useEffect, useState } from "react";
import "../Estilos/Usuarios.css";
import { eliminarUsuario, obtenerUsuarios } from "../services/usuarios.service";
import UsuariosTable from "../components/UsuariosTable.jsx";
import Modal from "../components/Modal";
import UsuariosForm from "../components/UsuariosForm";
import { LuPlus } from "react-icons/lu";
import {
  cerrarAlerta,
  confirmar,
  mostrarCarga,
  mostrarError,
  mostrarExito,
} from "../utils/alertas";
import Spinner from "../components/Spinner.jsx";

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [usuarioEditar, setUsuarioEditar] = useState(false);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [cargando, setCargando] = useState(false);

  const cargarUsuarios = async () => {
    setCargando(true);
    try {
      const respuesta = await obtenerUsuarios();

      setUsuarios(respuesta);
    } catch (error) {
      console.error(error);
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    cargarUsuarios();
  }, []);

  const nuevoUsuario = () => {
    setUsuarioEditar(null);
    setMostrarModal(true);
  };

  const editarUsuario = (usuario) => {
    setUsuarioEditar(usuario);

    setMostrarModal(true);
  };

  const borrarUsuario = async (id) => {
    const respuesta = await confirmar({
      titulo: "¿Eliminar usuario?",
      texto: "Esta acción no se puede desahacer",
      icono: "warning",
      showCancelButton: true,
      confirmText: "Sí, eliminar",
    });
    if (!respuesta.isConfirmed) return;

    try {
      mostrarCarga("Eliminar usuario...");

      const resultado = await eliminarUsuario(id);

      await cargarUsuarios();

      cerrarAlerta();

      mostrarExito(resultado.mensaje);
    } catch (error) {
      mostrarError(
        error.responde?.data?.mensaje || "No se puedo eliminar el usuario.",
      );
    }
  };

  const cerrarModal = () => {
    setMostrarModal(false);

    setUsuarioEditar(null);
  };
  return (
    <div>
      {cargando ? (
        <Spinner />
      ) : (
        <div className="container-usuarios">
          <div className="header-usuario">
            <h1>Usuarios</h1>
            <button onClick={nuevoUsuario}>
              <LuPlus /> Nueva usuario
            </button>
          </div>
          <UsuariosTable
            usuarios={usuarios}
            btnEditar={editarUsuario}
            btnEliminar={borrarUsuario}
          />
        </div>
      )}

      <Modal
        abierto={mostrarModal}
        cerrar={cerrarModal}
        titulo={usuarioEditar ? "Editar usuario" : "Nuevo usuario"}
      >
        <UsuariosForm
          cargarUsuarios={cargarUsuarios}
          cerrarModal={cerrarModal}
          usuariosEditar={usuarioEditar}
        />
      </Modal>
    </div>
  );
}

export default Usuarios;
