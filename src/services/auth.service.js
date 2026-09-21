import api from "../api/api.js";

export const loginUsuario = async (datos) => {
  const respuesta = await api.post("/login", datos);

  return respuesta.data;
};

export const obtenerUsuarioActual = async () => {
  const respuesta = await api.get("/me");

  return respuesta.data;
};

//cerrar sesión
export const cerrarSesion = async () => {
  const respuesta = await api.post("/logout");

  return respuesta.data;
};
