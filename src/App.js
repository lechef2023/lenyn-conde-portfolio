// src/App.js
import React from 'react';
import './App.css';
import profilePhoto from './assets/profile-photo.png';

function App() {
  return (
    <div className="App">
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <div className="profile-photo">
            <img
              src={profilePhoto}
              alt="Lenyn Conde"
              onError={(e) => {
                e.target.style.display = 'none';
                const parent = e.target.parentElement;
                parent.innerHTML = '<div class="initials">LC</div>';
              }}
            />
          </div>
          <h1>Lenyn F. Conde L.</h1>
          <p>Profesor de Matemáticas y Ciencias de la Computación | Desarrollador de Software Educativo | Innovador en Tecnología Educativa</p>
          <a href="#contact" className="cta-button">¡Contáctame!</a>
        </div>
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
          {/* 1. U.E. Maestro Luis Beltrán Prieto Figueroa — NUEVO TRABAJO MÁS RECIENTE */}
          <div className="timeline-item">
            <span className="date">Dic 2025 – Presente</span>
            <h3>Docente de Matemáticas – Nivel Secundario</h3>
            <p><strong>U.E. Maestro Luis Beltrán Prieto Figueroa</strong></p>
            <ul>
              <li>Enseñanza de matemáticas a estudiantes de educación media.</li>
              <li>Aplicación de estrategias pedagógicas para facilitar la comprensión de conceptos complejos.</li>
              <li>Evaluación continua y seguimiento del rendimiento académico.</li>
            </ul>
          </div>

          {/* 2. Universidad de Carabobo */}
          <div className="timeline-item">
            <span className="date">Jul 2024 – Sep 2025</span>
            <h3>Docente Universitario – Matemáticas</h3>
            <p><strong>Universidad de Carabobo</strong></p>
            <ul>
              <li>Impartición de clases de matemáticas a nivel superior, enfocadas en el desarrollo del pensamiento lógico-matemático.</li>
              <li>Diseño de materiales didácticos y aplicación de evaluaciones alineadas con objetivos de aprendizaje.</li>
              <li>Uso de plataformas digitales para la enseñanza híbrida y seguimiento del rendimiento estudiantil.</li>
            </ul>
          </div>

          {/* 3. Motobombas, C.A. */}
          <div className="timeline-item">
            <span className="date">Ene 2021 – Abr 2025</span>
            <h3>Programación y RRSS</h3>
            <p><strong>Motobombas, C.A.</strong></p>
            <ul>
              <li>Desarrollo y mantenimiento de aplicaciones de software interno.</li>
              <li>Creación de contenido audiovisual para redes sociales.</li>
              <li>Implementación de soluciones tecnológicas para mejorar procesos.</li>
            </ul>
          </div>

          {/* 4. Aliadas en Cadena, C.A. */}
          <div className="timeline-item">
            <span className="date">Sep 2021 – Dic 2022</span>
            <h3>Instructor de Habilidades Digitales y Ofimática</h3>
            <p><strong>Aliadas en Cadena, C.A.</strong></p>
            <ul>
              <li>Diseño e impartición de talleres prácticos en el uso de herramientas informáticas y programas de ofimática.</li>
              <li>Enseñanza de competencias digitales esenciales: manejo de documentos, hojas de cálculo, presentaciones y correo electrónico.</li>
              <li>Apoyo en la alfabetización digital de empleados para mejorar su productividad y autonomía tecnológica.</li>
              <li>Uso de metodologías activas y aprendizaje basado en proyectos para facilitar la retención del conocimiento.</li>
            </ul>
          </div>

          {/* 5. Kromi Market, C.A. */}
          <div className="timeline-item">
            <span className="date">Sep 2013 – Ene 2017</span>
            <h3>Ayudante Operativo de Electrónica</h3>
            <p><strong>Kromi Market, C.A.</strong></p>
            <ul>
              <li>Atención al cliente en la venta y asesoría técnica de electrodomésticos y equipos electrónicos.</li>
              <li>Soporte en la instalación, configuración y solución de dudas básicas sobre productos de consumo electrónico.</li>
              <li>Gestión de inventario, exhibición de productos y apoyo en labores operativas del área de electrónica.</li>
              <li>Registro de ventas y seguimiento de garantías mediante sistemas internos de la tienda.</li>
            </ul>
          </div>

          {/* 6. U.E. “José Humberto Quintero” */}
          <div className="timeline-item">
            <span className="date">Sep 2012 – Jul 2013</span>
            <h3>Docente de Matemáticas – Nivel Secundario</h3>
            <p><strong>U.E. “José Humberto Quintero”</strong></p>
            <ul>
              <li>Enseñanza de matemáticas a estudiantes de educación media.</li>
              <li>Aplicación de estrategias pedagógicas para facilitar la comprensión de conceptos complejos.</li>
              <li>Evaluación continua y seguimiento del rendimiento académico.</li>
            </ul>
          </div>

          {/* 7. Atento de Venezuela, S.A. */}
          <div className="timeline-item">
            <span className="date">Sep 2010 – Ene 2012</span>
            <h3>Ejecutivo de Soporte Técnico – Telecomunicaciones</h3>
            <p><strong>Atento de Venezuela, S.A.</strong></p>
            <ul>
              <li>Atención a clientes en temas de conectividad y rendimiento de internet.</li>
              <li>Diagnóstico y resolución remota de fallas técnicas (redes, modems, routers).</li>
              <li>Registro y seguimiento de incidencias en sistemas CRM.</li>
              <li>Soporte en configuración de dispositivos y servicios de banda ancha.</li>
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
            'Enseñanza Virtual', 'React', 'JavaScript', 'Redes Básicas',
            'Mantenimiento de Hardware'
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