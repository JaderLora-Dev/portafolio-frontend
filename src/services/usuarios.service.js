import api from "../api/api";

export const obtenerUsuarios = async () => {
  const respuesta = await api.get("/usuarios");

  return respuesta.data;
};

export const crearUsuario = async (data) => {
  const respuesta = await api.post("/usuarios", data);

  return respuesta.data;
};

export const actualizarUsuario = async (id, data) => {
  const respuesta = await api.put(`/usuarios/${id}`, data);

  return respuesta.data;
};

export const eliminarUsuario = async (id) => {
  const respuesta = await api.delete(`/usuarios/${id}`);

  return respuesta.data;
};
