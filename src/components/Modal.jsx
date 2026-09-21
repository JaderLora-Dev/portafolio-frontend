import { LuX } from "react-icons/lu";
import "../Estilos/Modal.css";

function Modal({ abierto, cerrar, titulo, children }) {
  if (!abierto) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2 className="titulos-nuevo-editar">{titulo}</h2>
          <button className="btn-cerrar" onClick={cerrar}>
            <LuX />
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
