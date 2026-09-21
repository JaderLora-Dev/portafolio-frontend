import { useEffect, useState } from "react";
import {
  cerrarAlerta,
  mostrarCarga,
  mostrarError,
  mostrarExito,
} from "../utils/alertas";
import { actualizarUsuario, crearUsuario } from "../services/usuarios.service";
import "../Estilos/UsuariosForm.css";

function UsuariosForm({ cargarUsuarios, usuariosEditar, cerrarModal }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rol, setRol] = useState("admin");
  const [guardando, setGuardando] = useState(false);

  useEffect(() => {
    if (usuariosEditar) {
      setEmail(usuariosEditar.email);
      setPassword("");
      setRol(usuariosEditar.rol);
    } else {
      setEmail("");
      setPassword("");
      setRol("admin");
    }
  }, [usuariosEditar]);

  const guardarUsuario = async (e) => {
    e.preventDefault();

    if (guardando) return;
    setGuardando(true);

    try {
      if (usuariosEditar) {
        mostrarCarga("Actualizar usuarios...");

        await actualizarUsuario(usuariosEditar.id, { email, password, rol });

        cerrarAlerta();

        mostrarExito("Usuario actualizado correctamente.");
      } else {
        mostrarCarga("Guardando usuario...");

        await crearUsuario({ email, password, rol });

        cerrarAlerta();

        mostrarExito("Usuario guardado correctamente.");
      }

      await cargarUsuarios();

      cerrarModal();
    } catch (error) {
      cerrarAlerta();
      mostrarError(
        error?.response?.data?.mensaje || "No se pudo guardar el usuario.",
      );
      console.error(error);
    } finally {
      setGuardando(false);
    }
  };

  return (
    <div>
      <form className="usuariosForm-container" onSubmit={guardarUsuario}>
        <div className="usuarioForm-interno">
          <label>Nombre</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label>Rol</label>
          <select>
            <option value="admin" onChange={(e) => setRol(e.target.value)}>
              Admin
            </option>
          </select>

          <button type="submit" disabled={guardando}>
            {guardando
              ? "Guardando"
              : usuariosEditar
                ? "Actualizar"
                : "Guardar"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default UsuariosForm;
