import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import { SiExpress, SiMysql, SiPostman } from "react-icons/si";
import "../Estilos/Skills.css";

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills-contenedor">
        <div className="skills-encabezado">
          <span>Mis habilidades</span>
          <h2>Tecnologías que utilizo</h2>
        </div>

        <div className="skills-grid">
          {/* Frontend */}
          <div className="skill-categoria">
            <h3>Frontend</h3>

            <div className="skills-list">
              <div className="skill-item">
                <FaHtml5 />
                <span>HTML5</span>
              </div>

              <div className="skill-item">
                <FaCss3Alt />
                <span>CSS3</span>
              </div>

              <div className="skill-item">
                <FaJs />
                <span>JavaScript</span>
              </div>

              <div className="skill-item">
                <FaReact />
                <span>React</span>
              </div>
            </div>
          </div>

          {/* Backend */}
          <div className="skill-categoria">
            <h3>Backend</h3>

            <div className="skills-list">
              <div className="skill-item">
                <FaNodeJs />
                <span>Node.js</span>
              </div>

              <div className="skill-item">
                <SiExpress />
                <span>Express.js</span>
              </div>
            </div>
          </div>

          {/* Base de datos */}
          <div className="skill-categoria">
            <h3>Base de datos</h3>

            <div className="skills-list">
              <div className="skill-item">
                <SiMysql />
                <span>MySQL</span>
              </div>

              <div className="skill-item">
                <span>SQL</span>
              </div>
            </div>
          </div>

          {/* Herramientas */}
          <div className="skill-categoria">
            <h3>Herramientas</h3>

            <div className="skills-list">
              <div className="skill-item">
                <SiPostman />
                <span>Postman</span>
              </div>
              <div className="skill-item">
                <FaGitAlt />
                <span>Git</span>
              </div>

              <div className="skill-item">
                <FaGithub />
                <span>GitHub</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
