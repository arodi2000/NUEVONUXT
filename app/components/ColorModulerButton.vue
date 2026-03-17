<template>
  <div class="toggle-container">
    <button @click="toggleTheme" class="professional-toggle">
      {{ isDarkMode ? '☀️ MODO CLARO' : '🌙 MODO OSCURO' }}
    </button>
  </div>
</template>
  
<script setup>
import { ref, onMounted } from 'vue'

const isDarkMode = ref(false)

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
  document.body.classList.toggle('night-mode', isDarkMode.value)
  localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light')
}

onMounted(() => {
  const saved = localStorage.getItem('theme')
  if (saved === 'dark') {
    isDarkMode.value = true
    document.body.classList.add('night-mode')
  }
})
</script>

<style scoped>
.toggle-container { display: flex; justify-content: center; margin: 40px 0; }
.professional-toggle {
  padding: 14px 28px;
  border-radius: 50px;
  border: 1px solid #cbd5e1;
  background: white;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.3s;
}
.night-mode .professional-toggle { background: #1e293b; color: white; border-color: #334155; }
.professional-toggle:hover { transform: scale(1.05); border-color: #2563eb; }
</style>