<script setup lang="ts">
const menuItems = [
  { name: 'Inicio', path: '/', icon: '🏠' },
  { name: 'Perfil', path: '/profile', icon: '👤' },
  { name: 'Ajustes', path: '/settings', icon: '⚙️' }
];
</script>

<template>
  <aside class="sidebar">
    <nav class="sidebar__nav">
      <ul class="sidebar__list">
        <li v-for="item in menuItems" :key="item.path" class="sidebar__item">
          <NuxtLink :to="item.path" class="sidebar__link" active-class="active">
            <span class="icon">{{ item.icon }}</span>
            <span class="name">{{ item.name }}</span>
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<style scoped>
.sidebar { position: fixed; left: 20px; top: 50%; transform: translateY(-50%); z-index: 100; }
.sidebar__list { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 15px; }
.sidebar__link { 
  display: flex; align-items: center; gap: 12px; padding: 12px; 
  text-decoration: none; background: rgba(255, 255, 255, 0.9); 
  backdrop-filter: blur(5px); border-radius: 12px; color: #1e293b; 
  font-weight: 600; transition: 0.3s; border: 1px solid #e2e8f0; 
}
.sidebar__link:hover, .sidebar__link.active { 
  background: #2563eb; color: white; transform: translateX(5px); 
}
.icon { font-size: 1.3rem; }
@media (max-width: 768px) {
  .sidebar { bottom: 20px; top: auto; left: 50%; transform: translateX(-50%); width: 90%; }
  .sidebar__list { flex-direction: row; justify-content: space-around; }
  .name { display: none; }
}
</style>