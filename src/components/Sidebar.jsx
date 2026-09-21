import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { MdAdminPanelSettings, MdHome } from "react-icons/md";
import { LuLogOut, LuMail, LuMenu, LuUser, LuX } from "react-icons/lu";
import { cerrarSesion } from "../services/auth.service";
import "../Estilos/Sidebar.css";

function Sidebar() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const { setUsuario } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await cerrarSesion();

      setUsuario(null);

      navigate("/login");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <div className="dashboard">
      <button className="menu-btn" onClick={() => setMenuAbierto(!menuAbierto)}>
        {" "}
        {menuAbierto ? <LuX /> : <LuMenu />}
      </button>
      <aside className={menuAbierto ? "sidebar activo" : "sidebar cerrado"}>
        <h2 className="logo">
          {" "}
          <span>
            <MdAdminPanelSettings />
          </span>
          <span className="texto-menu-principal">Panel administrativo</span>
        </h2>

        <nav>
          <NavLink
            to="/admin"
            end
            className={({ isActive }) =>
              isActive ? "menu-link activo" : "menu-link"
            }
          >
            <MdHome />
            <span className="texto-menu">Inicio</span>
          </NavLink>
          <NavLink
            to="/admin/mensajes"
            className={({ isActive }) =>
              isActive ? "menu-link activo" : "menu-link"
            }
          >
            <LuMail />
            <span className="texto-menu">Mensajes</span>
          </NavLink>

          <NavLink
            to="/admin/usuarios"
            className={({ isActive }) =>
              isActive ? "menu-link activo" : "menu-link"
            }
          >
            <LuUser />
            <span className="texto-menu">Usuarios</span>
          </NavLink>

          <button type="button" className="boton-logout" onClick={handleLogout}>
            <LuLogOut />
            <span>Cerrar sesión</span>
          </button>
        </nav>
      </aside>
    </div>
  );
}

export default Sidebar;
