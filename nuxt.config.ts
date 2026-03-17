// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Configuración de rutas para GitHub Pages
  app: {
    baseURL: '/NUEVONUXT/', // Nombre exacto de tu repositorio
    buildAssetsDir: 'assets', // Evita problemas con carpetas que empiezan por "_" en GitHub
  },

  // Tu configuración de estilos
  css: [
    '~/assets/css/main.css'
  ],


  devtools: { 
    enabled: true 
  },

  compatibilityDate: '2024-04-03', // O 'latest' como lo tenías

  // Opcional: Si usas Nitro para el despliegue estático
  nitro: {
    preset: 'github-pages'
  }
})