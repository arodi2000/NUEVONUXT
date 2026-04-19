<template>
  <header class="profile-header">
    <div class="avatar-container">
      <img 
        src="/profile/sergioramirez.jpeg" 
        alt="Ing. Sergio Ramirez" 
        class="profile-pic" 
      />
    </div>

    <div class="user-info">
      <h1>ING. SERGIO ARODI RAMIREZ PADILLA</h1>
      <p class="subtitle">Ingeniería en Comunicaciones y Tecnologías • 9no Semestre</p>
      <p class="social">Ingeniería en Comunicaciones y Tecnologías</p>

      <div class="social-actions">
        <a 
          href="https://github.com/TU-USUARIO-GITHUB" 
          target="_blank" 
          rel="noopener noreferrer"
          class="btn-contact github"
        >
          GitHub
        </a>

        <a 
          href="https://www.linkedin.com/in/TU-USUARIO-LINKEDIN" 
          target="_blank" 
          rel="noopener noreferrer"
          class="btn-contact linkedin"
        >
          LinkedIn
        </a>

        <a 
          href="mailto:tuemail@ejemplo.com?subject=Contacto%20desde%20portafolio" 
          class="btn-contact email"
        >
          Email
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
// Si quieres lógica extra aquí después...
</script>

<style scoped>
.profile-header {
  background: rgba(255, 255, 255, 0.95);
  padding: 40px 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin-top: 50px;
  color: #1a1a1a;
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
  transition: all 0.3s ease;
}

.dark .profile-header {
  background: rgba(0, 0, 0, 0.85);
  color: #f0f0f0;
  box-shadow: 0 10px 30px rgba(0,0,0,0.8);
}

.avatar-container {
  /* opcional */
}

.profile-pic {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 4px solid #2563eb;
  object-fit: cover;
  transition: all 0.3s ease;
}

.dark .profile-pic {
  border-color: #60a5fa;
}

.user-info {
  text-align: center;
}

h1 {
  font-size: 2.2rem;
  margin-bottom: 8px;
  font-weight: bold;
}

.subtitle {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 12px;
}

.dark .subtitle {
  color: #bbb;
}

.social {
  font-size: 1rem;
  color: #777;
  margin-bottom: 20px;
}

.dark .social {
  color: #aaa;
}

.social-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
}

.btn-contact {
  padding: 10px 24px;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.2s;
  text-decoration: none;
  color: white;
}

.github    { background: #333; }
.github:hover    { background: #444; }

.linkedin  { background: #0a66c2; }
.linkedin:hover  { background: #084d96; }

.email     { background: #ea4335; }
.email:hover     { background: #c1351f; }

.dark .btn-contact {
  color: white;
}
</style>