import { LuPencil, LuTrash2 } from "react-icons/lu";
import "../Estilos/UsuariosTable.css";
import { FaUser } from "react-icons/fa";

function UsuariosTable({ usuarios, btnEditar, btnEliminar }) {
  return (
    <div className="container-usuarioTable">
      {usuarios.length === 0 ? (
        <p>No hay usuarios registrados</p>
      ) : (
        usuarios.map((usuario) => (
          <div className="usuarioTable-contenido" key={usuario.id}>
            <div className="rows-usuario">
              <span>
                <FaUser />
              </span>
              <span>{usuario.email}</span>
              <span>{usuario.rol}</span>
            </div>
            <div className="container-btn">
              <button type="button" onClick={() => btnEditar(usuario)}>
                <LuPencil />
              </button>

              <button type="button" onClick={() => btnEliminar(usuario.id)}>
                <LuTrash2 />
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default UsuariosTable;
