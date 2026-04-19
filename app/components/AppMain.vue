<template>
  <div class="cv-body">
    <Appheader />
    
    <section class="cv-section">
      <h2 class="badge">Sobre mí</h2>
      <p class="description">
        Estudiante de Ingeniería en TI enfocado en desarrollo full-stack, gestión de bases de datos, 
        fibra óptica y cableado estructurado.
      </p>
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
        <span>Java</span>
        <span>GitHub</span>
        <span>Cableado Estructurado</span>
        <span>Trabajo en Equipo</span>
      </div>
    </section>
  </div>
</template>

<style scoped>
.cv-body { max-width: 900px; margin: 0 auto; }
.cv-section { margin-bottom: 40px; }
.badge { 
  display: inline-block; padding: 6px 16px; background: #2563eb; 
  color: white; border-radius: 8px; font-size: 0.9rem; 
  margin-bottom: 20px; text-transform: uppercase; 
}
.skills-tags { display: flex; gap: 10px; flex-wrap: wrap; }
.skills-tags span { 
  background: #e2e8f0; padding: 6px 14px; border-radius: 6px; 
  font-weight: 600; font-size: 0.85rem; color: #1e293b;
}
</style>