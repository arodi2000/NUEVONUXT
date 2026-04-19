<script setup>
const colorMode = useColorMode()
</script>

<template>
  <button 
    @click="colorMode.toggle()" 
    class="color-toggle-btn"
  >
    <span v-if="colorMode.value === 'dark'">☀️ Modo Claro</span>
    <span v-else>🌙 Modo Oscuro</span>
  </button>
</template>

<style scoped>
.color-toggle-btn {
  @apply px-5 py-2.5 rounded-lg font-medium text-white transition-all duration-300;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4);
}

.color-toggle-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.6);
}

.dark .color-toggle-btn {
  background: linear-gradient(135deg, #60a5fa, #3b82f6);
  box-shadow: 0 4px 15px rgba(96, 165, 250, 0.4);
}
</style>