<script setup>
const canvasRef = ref(null);

onMounted(() => {
  const canvas = canvasRef.value;
  const ctx = canvas.getContext('2d');
  
  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  window.addEventListener('resize', resize);
  resize();

  const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const nums = '0123456789';
  const alphabet = latin + nums;
  const fontSize = 16;
  const columns = canvas.width / fontSize;
  const rainDrops = Array.from({ length: columns }).fill(1);

  const draw = () => {
    ctx.fillStyle = 'rgba(2, 6, 23, 0.05)'; // Color de fondo con rastro
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#00ff41'; // Verde Matrix
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < rainDrops.length; i++) {
      const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
      ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

      if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        rainDrops[i] = 0;
      }
      rainDrops[i]++;
    }
  };

  const interval = setInterval(draw, 30);
  onUnmounted(() => {
    clearInterval(interval);
    window.removeEventListener('resize', resize);
  });
});
</script>

<template>
  <canvas ref="canvasRef" class="matrix-bg"></canvas>
</template>

<style scoped>
.matrix-bg {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1; /* Importante: siempre detrás */
  opacity: 0.2;
  pointer-events: none;
}
</style>