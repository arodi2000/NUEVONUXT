<template>
  <a
    href="https://github.com/TU_USUARIO"
    target="_blank"
    class="github-btn"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path fill="white"
        d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.2 11.38c.6.1.82-.26.82-.58v-2.02
        c-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.35-1.78-1.35-1.78-1.1-.75.08-.74.08-.74
        1.22.09 1.86 1.26 1.86 1.26 1.08 1.85 2.84 1.32 3.53 1.01.1-.78.42-1.32.76-1.62
        -2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.25-3.22-.13-.3-.54-1.52.12-3.16
        0 0 1.02-.33 3.34 1.23a11.6 11.6 0 016.08 0c2.32-1.56 3.34-1.23 3.34-1.23
        .66 1.64.25 2.86.12 3.16.78.84 1.25 1.91 1.25 3.22
        0 4.6-2.8 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29
        c0 .32.22.69.83.57A12 12 0 0024 12c0-6.63-5.37-12-12-12z"/>
    </svg>
    <span>GitHub</span>
  </a>
</template>

<style scoped>
.github-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #111827;
  color: white;
  padding: 10px 18px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: 0.3s;
}

.github-btn svg {
  width: 20px;
  height: 20px;
}

.github-btn:hover {
  background: #2563eb;
  transform: scale(1.05);
}
</style>