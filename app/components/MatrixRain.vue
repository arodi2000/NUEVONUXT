<template>
  <canvas ref="canvas" class="matrix-canvas"></canvas>
</template>

<script setup>
const canvas = ref(null)

onMounted(() => {
  const ctx = canvas.value.getContext('2d')
  canvas.value.width = window.innerWidth
  canvas.value.height = window.innerHeight

  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+"
  const fontSize = 16
  const columns = canvas.value.width / fontSize
  const drops = Array(Math.floor(columns)).fill(1)

  function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
    ctx.fillRect(0, 0, canvas.value.width, canvas.value.height)
    ctx.fillStyle = "#0F0" // Color verde Matrix
    ctx.font = fontSize + "px monospace"

    for (let i = 0; i < drops.length; i++) {
      const text = characters.charAt(Math.floor(Math.random() * characters.length))
      ctx.fillText(text, i * fontSize, drops[i] * fontSize)
      if (drops[i] * fontSize > canvas.value.height && Math.random() > 0.975) {
        drops[i] = 0
      }
      drops[i]++
    }
  }
  setInterval(draw, 33)
})
</script>

<style scoped>
.matrix-canvas {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
}
</style>