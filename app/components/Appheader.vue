<template>
  <header class="header-container">
    <div class="profile-main">
      <div class="photo-wrapper">
        <img src="./profile/sergioramirez.jpeg" alt="Ing. Sergio Ramirez" class="profile-photo">
      </div>

      <div class="info-wrapper">
        <h1 class="name-title">ING. SERGIO ARODI RAMIREZ PADILLA</h1>
        <p class="subtitle">Ingeniería en Comunicaciones y Tecnologías • 9no Semestre</p>
        
        <div class="social-links">
          <a href="https://www.linkedin.com/in/tu-perfil" target="_blank" class="social-btn linkedin">LinkedIn</a>
          <a href="https://www.computrabajo.com.mx/perfil/tu-id" target="_blank" class="social-btn computrabajo">Computrabajo</a>
          <a href="mailto:tu-correo@ejemplo.com" class="social-btn email">Email</a>
        </div>
      </div>
    </div>
    <hr class="divider">
  </header>
</template>

<style scoped>
.header-container { width: 100%; margin-bottom: 25px; }
.profile-main { display: flex; align-items: center; gap: 40px; flex-wrap: wrap; justify-content: center; }

.profile-photo { 
  width: 175px; 
  height: 175px; 
  border-radius: 50%; 
  object-fit: cover; 
  border: 5px solid #2563eb; 
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
}

.profile-photo:hover {
  transform: scale(1.15) rotate(2deg);
  border-color: #60a5fa;
  box-shadow: 0 15px 35px rgba(37, 99, 235, 0.3);
}

.info-wrapper { flex: 1; min-width: 300px; }
.name-title { font-size: 1.85rem; margin: 0; color: #2563eb; font-weight: 900; }
.night-mode .name-title { color: #60a5fa; }

.subtitle { font-size: 1.05rem; color: #64748b; margin: 8px 0 22px 0; font-weight: 500; }
.social-links { display: flex; gap: 12px; }

.social-btn { padding: 10px 20px; border-radius: 12px; text-decoration: none; font-size: 0.85rem; font-weight: bold; color: white; transition: 0.3s; }
.linkedin { background-color: #0077b5; }
.computrabajo { background-color: #ff6b00; }
.email { background-color: #475569; }
.social-btn:hover { transform: translateY(-4px); }

.divider { border: none; height: 1px; background: linear-gradient(to right, #2563eb, transparent); margin: 35px 0; opacity: 0.2; }

@media (max-width: 600px) { .profile-main { text-align: center; } .social-links { justify-content: center; } }
</style>