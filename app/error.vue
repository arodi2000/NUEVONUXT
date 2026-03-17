<template>
  <NuxtLayout>
    <div class="cv-sections">
      <section id="sobre-mi">
        <h2><span class="icon">👤</span> Sobre mí</h2>
        <p>Estudiante de Ingeniería en TI enfocado en desarrollo full-stack , gestión de bases de datos
          de igual manera para fibra optica,cableado estructurado .</p>
      </section>

      <section id="formacion-academica">
        <h2><span class="icon">🎓</span> Formación Académica</h2>
        <div class="entry">
          <p><strong>INGENIERÍA EN TECNOLOGÍAS DE LA INFORMACIÓN</strong><br>
          <span class="date">2022 - ACTUALMENTE</span> | IT Gustavo A. Madero</p>
        </div>
        <div class="entry">
          <p><strong>TÉCNICO EN PROGRAMACIÓN</strong><br>
          <span class="date">2015 - 2018</span> | CETIS 54</p>
        </div>
      </section>

      <section id="habilidades">
        <h2><span class="icon">🛠️</span> Habilidades Técnicas</h2>
        <div class="skills-grid">
          <span>HTML/CSS/PHP</span>
          <span>Android Studio</span>
          <span>MySQL</span>
          <span>java</span>
          <span>node y github</span>
          <span>cableado estructurado</span>
          <span>facilidad para trabajar en equipo de igual manera para adaptarme al trabajo </span>
        </div>
      </section>

      <ColorModulerButton />
    </div>
  </NuxtLayout>
</template>

<style scoped>
section {
  margin-bottom: 30px;
}

h2 {
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 10px;
  font-size: 1.3rem;
}

.night-mode h2 {
  border-bottom-color: #334155;
}

.date {
  color: #2563eb;
  font-weight: bold;
  font-size: 0.85rem;
}

.skills-grid {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.skills-grid span {
  background: #e2e8f0;
  color: #1e293b;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
}

.night-mode .skills-grid span {
  background: #334155;
  color: #f1f5f9;
}
</style>