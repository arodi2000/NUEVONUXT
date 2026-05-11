export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode'
  ],

  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: '',
  },

  // Añade esta sección aquí abajo:
  app: {
    head: {
      title: 'MI PORTAFOLIO', // Aquí pones el nombre de tu proyecto
      meta: [
        { name: 'description', content: 'Descripción de mi sitio' }
      ]
    }
  }
})