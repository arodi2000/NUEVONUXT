<template>
  <div class="page-wrapper">
    <canvas id="matrix-canvas" class="matrix-bg"></canvas>

    <div class="main-card">
      <Appheader />
      <main class="content-body">
        <slot />
      </main>
      <footer class="main-footer">
        <p>© 2026 - Ing. Sergio Ramirez • ITGAM</p>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

let interval = null

const initMatrix = () => {
  const canvas = document.getElementById('matrix-canvas')
  const ctx = canvas.getContext('2d')

  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%\"'#&_(),.;:?!"
  const fontSize = 16
  const columns = canvas.width / fontSize
  const drops = Array.from({ length: columns }).fill(1)

  const draw = () => {
    // Fondo (transparencia)
    const isDark = document.body.classList.contains('night-mode')
    ctx.fillStyle = isDark ? 'rgba(2, 6, 23, 0.1)' : 'rgba(240, 244, 248, 0.1)'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Color de las letras
    ctx.fillStyle = isDark ? '#00ff41' : '#2563eb' 
    ctx.font = fontSize + 'px monospace'

    for (let i = 0; i < drops.length; i++) {
      const text = characters.charAt(Math.floor(Math.random() * characters.length))
      ctx.fillText(text, i * fontSize, drops[i] * fontSize)

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0
      }
      drops[i]++
    }
  }

  interval = setInterval(draw, 33)

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  })
}

onMounted(() => {
  initMatrix()
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: 'Inter', sans-serif;
  background-color: #f0f4f8;
  color: #1e293b;
  overflow-x: hidden;
  transition: background 0.5s ease;
}

.page-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  padding: 40px 20px;
  min-height: 100vh;
  z-index: 1;
}

.matrix-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
}

.main-card {
  width: 100%;
  max-width: 900px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(10px);
  padding: 50px;
  border-radius: 28px;
  box-shadow: 0 20px 50px rgba(0,0,0,0.1);
  z-index: 2;
  border: 1px solid rgba(255,255,255,0.4);
}

.night-mode { background-color: #020617; color: #f1f5f9; }
.night-mode .main-card { 
  background: rgba(15, 23, 42, 0.8); 
  border-color: rgba(255,255,255,0.05); 
}

@media (max-width: 600px) { .main-card { padding: 30px 15px; } }
</style>