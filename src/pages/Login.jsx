import { useState } from "react";
import { loginUsuario } from "../services/auth.service";
import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import { mostrarError } from "../utils/alertas.js";
import "../Estilos/Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { setUsuario } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const respuesta = await loginUsuario({
        email,
        password,
      });

      setUsuario(respuesta.usuario);

      navigate("/admin");
    } catch (error) {
      mostrarError(
        error?.response?.data?.mensaje || "No se pudo iniciar sesión",
      );
    }
  };

  return (
    <section className="container-login-padre ">
      <div className="container-login efecto">
        <div className="login-contenedor">
          <h1>Inicio de sesión</h1>

          <form className="contenido-login" onSubmit={handleSubmit}>
            <label htmlFor="email">Correo</label>

            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="password">Contraseña</label>

            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button className="btn-login" type="submit">
              Iniciar sesión
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
