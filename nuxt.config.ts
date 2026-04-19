// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',     // si ya lo tienes, déjalo
    '@nuxtjs/color-mode'
  ],

  colorMode: {
    preference: 'system',     // sigue el sistema del usuario por defecto
    fallback: 'light',
    classSuffix: ''           // importante: usa solo .dark (sin -mode)
  },

  // Opcional: si quieres forzar algo al inicio
  // app: {
  //   head: {
  //     htmlAttrs: { class: 'light' }
  //   }
  // }
})