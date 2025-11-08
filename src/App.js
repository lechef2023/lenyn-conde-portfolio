// src/App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Hero Section */}
      <header className="hero">
        <h1>Lenyn F. Conde L.</h1>
        <p>Profesor de Matemáticas y Ciencias de la Computación | Desarrollador de Software Educativo | Innovador en Tecnología Educativa</p>
        <a href="#contact" className="cta-button">¡Contáctame!</a>
      </header>

      {/* About */}
      <section className="section" id="about">
        <h2 className="section-title">Sobre mí</h2>
        <div className="card-grid">
          <div className="card">
            <h3>Perfil Profesional</h3>
            <p>
              Profesional altamente motivado en Educación con mención en Matemática, con formación complementaria en Tecnologías de la Información, Telemática y Mantenimiento de Sistemas Informáticos.
            </p>
            <p>
              Experiencia sólida en docencia universitaria y secundaria, soporte técnico en telecomunicaciones, y desarrollo de software educativo.
            </p>
            <p>
              Comprometido con la innovación educativa y la integración de las TIC en entornos presenciales y virtuales.
            </p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="section" id="experience">
        <h2 className="section-title">Experiencia Profesional</h2>
        <div className="timeline">
          <div className="timeline-item">
            <span className="date">Jul 2024 – Sep 2025</span>
            <h3>Docente Universitario – Matemáticas</h3>
            <p><strong>Universidad de Carabobo</strong></p>
            <ul>
              <li>Impartición de clases de matemáticas a nivel superior.</li>
              <li>Diseño de materiales didácticos y evaluaciones.</li>
              <li>Uso de plataformas digitales para enseñanza híbrida.</li>
            </ul>
          </div>

          <div className="timeline-item">
            <span className="date">Ene 2021 – Abr 2025</span>
            <h3>Programación y RRSS</h3>
            <p><strong>Motobombas, C.A.</strong></p>
            <ul>
              <li>Desarrollo y mantenimiento de aplicaciones internas.</li>
              <li>Creación de contenido audiovisual para redes sociales.</li>
              <li>Implementación de soluciones tecnológicas.</li>
            </ul>
          </div>

          <div className="timeline-item">
            <span className="date">Sep 2021 – Dic 2022</span>
            <h3>Instructor de Habilidades Digitales</h3>
            <p><strong>Aliadas en Cadena, C.A.</strong></p>
            <ul>
              <li>Talleres de ofimática y competencias digitales.</li>
              <li>Metodologías activas y aprendizaje basado en proyectos.</li>
            </ul>
          </div>

          <div className="timeline-item">
            <span className="date">Sep 2010 – Ene 2012</span>
            <h3>Ejecutivo de Soporte Técnico</h3>
            <p><strong>Atento de Venezuela, S.A.</strong></p>
            <ul>
              <li>Soporte en conectividad y diagnóstico remoto.</li>
              <li>Gestión de incidencias en CRM.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section" id="education">
        <h2 className="section-title">Formación Académica</h2>
        <div className="card-grid">
          <div className="card">
            <h3>Licenciatura en Educación – Mención Matemática</h3>
            <p><strong>Universidad de Carabobo (2007–2012)</strong></p>
            <p>Formación pedagógica especializada en enseñanza de matemáticas.</p>
          </div>
          <div className="card">
            <h3>Especialidad en Telemática e Informática en Educación a Distancia</h3>
            <p><strong>UNA (2023 – en curso)</strong></p>
            <p>Integración de tecnologías digitales en educación. Graduación estimada: 2026.</p>
          </div>
          <div className="card">
            <h3>TSU en Mantenimiento de Sistemas Informáticos</h3>
            <p><strong>UNA (2023 – en curso)</strong></p>
            <p>Hardware, redes, sistemas operativos y soporte técnico.</p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section" id="skills">
        <h2 className="section-title">Habilidades Clave</h2>
        <div className="skills">
          {[
            'Educación Matemática', 'Docencia', 'Tecnología Educativa', 'TIC',
            'Programación', 'Diseño de Contenidos', 'Soporte Técnico',
            'E-learning', 'Aplicaciones Educativas', 'Microsoft Office',
            'Google Workspace', 'Pensamiento Lógico-Matemático',
            'Enseñanza Virtual', 'React', 'JavaScript'
          ].map((skill, i) => (
            <span key={i} className="skill-tag">{skill}</span>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="section" id="contact">
        <div className="contact">
          <h2>¿Trabajamos juntos?</h2>
          <p>Estoy abierto a oportunidades como docente, desarrollador educativo o consultor en integración de tecnología en la educación.</p>
          <div className="contact-links">
            <a href="tel:+584124050635" className="contact-link">📞 +58 412-4050635</a>
            <a href="mailto:lenyncondelechef@gmail.com" className="contact-link">✉️ lenyncondelechef@gmail.com</a>
            <a href="https://linkedin.com/in/lenyn-conde-837767260" target="_blank" rel="noopener noreferrer" className="contact-link">🔗 LinkedIn</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© {new Date().getFullYear()} Lenyn F. Conde L. — Valencia, Carabobo, Venezuela</p>
      </footer>
    </div>
  );
}

export default App;