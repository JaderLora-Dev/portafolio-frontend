import "../Estilos/SobreMi.css";
import { RiGraduationCapLine, RiUserLine } from "react-icons/ri";
import { TbTargetArrow } from "react-icons/tb";

function SobreMi() {
  return (
    <section id="sobre-mi" className="sobre-mi">
      {/* Encabezado */}
      <div className="sobre-mi-encabezado">
        <span>Sobre mí</span>

        <h2>Conoce un poco más sobre mi perfil</h2>
      </div>
      <div className="sobre-mi-contenedor">
        {/* Contenido */}
        <div className="sobre-mi-contenido">
          <div className="sobre-mi-texto">
            <h3>Soy Jader Lora</h3>

            <p>
              Soy desarrollador Full Stack con formación en Análisis y
              Desarrollo de Software.
            </p>

            <p>
              Me apasiona crear aplicaciones, transformar ideas en soluciones
              digitales y encontrar formas prácticas de resolver problemas
              mediante la tecnología. Disfruto aprender nuevas herramientas y
              ponerlas en práctica a través de proyectos reales.
            </p>

            <p>
              Me considero una persona responsable, disciplinada, curiosa,
              analítica y perseverante. Mi proceso de aprendizaje se basa en
              investigar, practicar y enfrentar nuevos retos para fortalecer
              continuamente mis conocimientos.
            </p>
          </div>
        </div>

        {/* Información destacada */}
        <div className="sobre-mi-datos">
          <div className="sobre-mi-dato">
            <div>
              <RiGraduationCapLine />
            </div>
            <div>
              <span className="titulo-span">Formación</span>
              <strong>ADSO</strong>
              <small>SENA</small>
            </div>
          </div>

          <div className="sobre-mi-dato">
            <div>
              <RiUserLine />
            </div>
            <div>
              <span>Perfil</span>
              <strong>Full Stack</strong>
              <small>Developer</small>
            </div>
          </div>

          <div className="sobre-mi-dato">
            <div>
              <TbTargetArrow />
            </div>

            <div>
              <span>Enfoque</span>
              <strong>Soluciones</strong>
              <small>Digitales</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SobreMi;
