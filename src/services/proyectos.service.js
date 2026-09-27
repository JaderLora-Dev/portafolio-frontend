import api from "../api/api.js";

// mostrar todos los proyectos
export const obtenerProyectos = async () => {
  const respuesta = await api.get("/proyectos");

  return respuesta.data;
};

//ontener por estado publicado
export const obtenerProyectosPublicado = async () => {
  const respuesta = await api.get("/proyectos/publicados");

  return respuesta.data;
};
//obtener por id
export const obtenerProyectoId = async (id) => {
  const respuesta = await api.get(`/proyectos/${id}`);

  return respuesta.data;
};

//crear proyecto
export const crearProyecto = async (datos) => {
  const respuesta = await api.post("/proyectos", datos);

  return respuesta.data;
};

//actualizar

export const actualizarProyecto = async (id, datos) => {
  const respuesta = await api.put(`/proyectos/${id}`, datos);

  return respuesta.data;
};

//actualizar estado
export const actualizarEstadoProyecto = async (id, estado) => {
  const respuesta = await api.patch(`/proyectos/${id}/estado`, { estado });

  return respuesta.data;
};

//eliminar
export const eliminarProyecto = async (id) => {
  const respuesta = await api.delete(`/proyectos/${id}`);

  return respuesta.data;
};
