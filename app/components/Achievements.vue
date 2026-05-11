<template>
  <div class="achievements-card">
    <h3>Visualización 3D</h3>
    <p>Proyecto interactivo</p>
    <ClientOnly>
      <LazyThreeModel />
    </ClientOnly>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'

const LazyThreeModel = defineAsyncComponent(() =>
  import('~/components/ThreeModel.vue')
)
</script>
