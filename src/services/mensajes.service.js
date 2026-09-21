import api from "../api/api.js";

export const obtenerContactos = async () => {
  const respuesta = await api.get("/contactos");

  return respuesta.data;
};

//registrar mensajes
export const registrarMensaje = async (data) => {
  const respuesta = await api.post("/contactos", data);

  return respuesta.data;
};

export const actualizarEstadoContacto = async (id, estado) => {
  const respuesta = await api.patch(`/contactos/${id}/estado`, { estado });

  return respuesta.data;
};

export const eliminarContacto = async (id) => {
  const respuesta = await api.delete(`/contactos/${id}`);

  return respuesta.data;
};
