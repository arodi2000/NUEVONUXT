<template>
  <nav class="main-nav">
    <NuxtLink to="/" class="nav-link">SOBRE MÍ</NuxtLink>
    <NuxtLink to="/Settings" class="nav-link">LOGROS</NuxtLink>
    <NuxtLink to="/contaxcto" class="nav-link">CONTACTO</NuxtLink>
  </nav>
</template>

<style scoped>
.main-nav {
  margin: 20px 0;
  display: flex;
  gap: 10px;
}
.nav-link {
  background: #2563eb;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  font-size: 0.8rem;
  font-weight: bold;
  transition: transform 0.2s;
}
.nav-link:hover { transform: scale(1.05); }
.router-link-active { background: #1d4ed8; border: 2px solid white; }
</style>