<template>
  <section class="card">
    <h2>Sobre mí</h2>
    <p>
      Estudiante de Ingeniería en Comunicaciones y Tecnologías en el ITGAM (9° Semestre). 
      Con un fuerte enfoque en el desarrollo de software, ciberseguridad y optimización de procesos. 
      Cuento con experiencia técnica previa y he liderado proyectos de migración de bases de datos 
      y desarrollo de aplicaciones web interactivas.
    </p>

    <!-- ────────────────────────────────────────────── -->
    <!--               HABILIDADES                      -->
    <!-- ────────────────────────────────────────────── -->
    <h2 class="mt-8">Habilidades</h2>

    <div class="skills-grid">
      <div class="skill-category">
        <h3>Desarrollo Web y Frontend</h3>
        <ul>
          <li>HTML5 / CSS3 / JavaScript</li>
          <li>Vue.js + Nuxt 3</li>
          <li>Tailwind CSS</li>
          <li>Responsive Design</li>
          <li>Git / GitHub</li>
        </ul>
      </div>

      <div class="skill-category">
        <h3>Backend y Bases de Datos</h3>
        <ul>
          <li>Node.js</li>
          <li>MySQL / PostgreSQL</li>
          <li>Migración y optimización de bases de datos</li>
          <li>REST APIs</li>
          <li>Java</li>
        </ul>
      </div>

      <div class="skill-category">
        <h3>Redes y Telecomunicaciones</h3>
        <ul>
          <li>Cableado Estructurado (diseño, instalación)</li>
          <li>Fibra Óptica (instalación, empalmes, pruebas OTDR y mantenimiento)</li>
          <li>Configuración de redes LAN/WAN</li>
          <li>Protocolos de red (TCP/IP, Ethernet)</li>
          <li>Seguridad en redes básicas</li>
        </ul>
      </div>

      <div class="skill-category">
        <h3>Otras Habilidades</h3>
        <ul>
          <li>Python (básico-intermedio)</li>
          <li>Trabajo en equipo y liderazgo de proyectos</li>
          <li>Inglés basico</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.card {
  background: rgba(26, 26, 26, 0.9);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid #333;
  margin: 1rem 0;
}

h2 {
  color: #64b5f6;
  margin-bottom: 1rem;
  font-size: 1.8rem;
}

h3 {
  color: #90caf9;
  font-size: 1.3rem;
  margin: 1.5rem 0 0.8rem;
  border-bottom: 1px solid #444;
  padding-bottom: 0.4rem;
}

p {
  line-height: 1.6;
  color: #e0e0e0;
  margin-bottom: 1.5rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.8rem;
  margin-top: 1rem;
}

.skill-category ul {
  list-style: none;
  padding: 0;
}

.skill-category li {
  padding: 0.5rem 0;
  color: #d0d0d0;
  position: relative;
  padding-left: 1.6rem;
}

.skill-category li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: #64b5f6;
  font-weight: bold;
}

/* Soporte básico para modo claro (si lo implementas después) */
:global(.light) .card {
  background: rgba(255, 255, 255, 0.92);
  border-color: #ddd;
}

:global(.light) h2,
:global(.light) h3 {
  color: #1976d2;
}

:global(.light) p,
:global(.light) li {
  color: #333;
}
</style>  