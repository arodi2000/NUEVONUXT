<template>
  <div class="home-container">
    <AboutMe />
    <div class="grid-skills">
      <Skills />
      <Softskills />
    </div>
    <Languages />
  </div>
</template>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.grid-skills {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
@media (max-width: 768px) {
  .grid-skills { grid-template-columns: 1fr; }
}
</style>