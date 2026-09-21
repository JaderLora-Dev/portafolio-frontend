import { useEffect } from "react";
import { useContext } from "react";
import { createContext, useState } from "react";
import { obtenerUsuarioActual } from "../services/auth.service";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const [cargando, setCargando] = useState(true);
  useEffect(() => {
    const verificarSesion = async () => {
      try {
        const respuesta = await obtenerUsuarioActual();

        setUsuario(respuesta.usuario);
      } catch (error) {
        setUsuario(null);
      } finally {
        setCargando(false);
      }
    };

    verificarSesion();
  }, []);

  return (
    <AuthContext.Provider value={{ usuario, setUsuario, cargando }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
