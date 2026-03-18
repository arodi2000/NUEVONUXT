  <template>
    <NuxtLayout>
      <div class="cv-body">
         <ColorModulerButton />
        <section class="cv-section">
          <h2 class="badge">Sobre mí</h2>
          <p class="description">Estudiante de Ingeniería en TI enfocado en desarrollo full-stack , gestión de bases de datos
            de igual manera para fibra optica,cableado estructurado .</p>
        </section>

        <section class="cv-section">
          <h2 class="badge">Formación</h2>
          <div class="edu-card">
            <h3>Ingeniería en Tecnologías de la Información</h3>
            <p>ITGAM | 2022 - Actualidad</p>
            <br>
            <h3>Técnico en Programación</h3>
            <p>CETIS 54 | 2015 - 2018</p>
          </div>
        </section>

        <section class="cv-section">
          <h2 class="badge">Habilidades</h2>
          <div class="skills-tags">
            <span>HTML/CSS/JS</span>
            <span>Nuxt.js</span>
            <span>Node.js</span>
            <span>MySQL</span>
            <span>java</span>
            <span>node y github</span>
            <span>cableado estructurado</span>
            <span>facilidad para trabajar en equipo de igual manera para adaptarme al trabajo </span>
          </div>
        </section>

       
      </div>
    </NuxtLayout>
  </template>

  <style scoped>
  .cv-section { margin-bottom: 40px; }
  .badge { display: inline-block; padding: 6px 16px; background: #2563eb; color: white; border-radius: 8px; font-size: 0.9rem; margin-bottom: 20px; text-transform: uppercase; }
  .night-mode .badge { background: #00ff41; color: #020617; font-weight: bold; }
  .skills-tags { display: flex; gap: 10px; flex-wrap: wrap; }
  .skills-tags span { background: #e2e8f0; padding: 6px 14px; border-radius: 6px; font-weight: 600; font-size: 0.85rem; }
  .night-mode .skills-tags span { background: #1e293b; color: #00ff41; border: 1px solid #00ff41; }
  </style>