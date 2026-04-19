<template>
  <div class="error-page">
    <div class="content">
      <div class="error-code">{{ error.statusCode }}</div>
      <h1 class="title">¡Vaya! Algo salió mal</h1>
      <p class="description">{{ error.message || 'Página no encontrada' }}</p>
      
      <div class="actions">
        <button class="btn primary" @click="handleError">Volver al inicio</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  error: Object
})

const handleError = () => clearError({ redirect: '/' })
</script>

<style scoped>
/* Manten tus estilos de animación aquí */
.error-page { display: flex; align-items: center; justify-content: center; height: 100vh; text-align: center; background: #111; color: white; }
.error-code { font-size: 8rem; font-weight: bold; color: #2563eb; }
.btn { padding: 10px 20px; cursor: pointer; background: #2563eb; border: none; border-radius: 5px; color: white; }
</style>