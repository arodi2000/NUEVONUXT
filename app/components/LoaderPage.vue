<template>
  <div class="loader-container">
    <div class="spinner"></div>
    <p>Cargando sistema...</p>
  </div>
</template>

<style scoped>
.loader-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  color: #00ff41;
}
.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid rgba(0, 255, 65, 0.1);
  border-left-color: #00ff41;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>