<template>
  <div class="app-container">
    <MatrixRain />
    
    <div class="relative-content">
      <Appheader />
      <Navbar />
      
      <main class="page-body">
        <slot /> 
      </main>

      <AppFooter />
      <ColorModulerButton />
    </div>
  </div>
</template>

<style>
.app-container {
  position: relative;
  min-height: 100vh;
  background-color: #000; /* Fondo negro base para Matrix */
}
.relative-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.page-body {
  width: 100%;
  max-width: 900px;
  padding: 20px;
}
</style>