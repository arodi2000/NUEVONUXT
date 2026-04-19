<script setup>
import { ref } from 'vue'

const form = ref({
  nombre: '',
  correo: '',
  telefono: '',
  proyecto: ''
})

const enviando = ref(false)
const mensajeEstado = ref('')

const enviarFormulario = async () => {
  enviando.value = true
  mensajeEstado.value = 'Simulando envío de notificación...'

  // Simulamos una Promesa para pruebas de UI
  const apiPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = true 
      if (exito) resolve('¡Notificación procesada con éxito!')
      else reject('Error en la notificación.')
    }, 2000)
  })

  try {
    const respuesta = await apiPromise
    mensajeEstado.value = respuesta
    // Limpieza corregida:
    form.value = { nombre: '', correo: '', telefono: '', proyecto: '' }
  } catch (error) {
    mensajeEstado.value = error
  } finally {
    enviando.value = false
    setTimeout(() => { mensajeEstado.value = '' }, 5000)
  }
}
</script>

<template>
  <section class="contacto-container">
    <h2 class="section-title">Centro de Notificaciones</h2>
    <form @submit.prevent="enviarFormulario" class="form-card">
      <div class="input-group">
        <label>Asunto / Nombre</label>
        <input v-model="form.nombre" type="text" placeholder="Asunto" required />
      </div>

      <div class="input-group">
        <label>Correo Destino</label>
        <input v-model="form.correo" type="email" placeholder="destino@ejemplo.com" required />
      </div>

      <div class="input-group">
        <label>Mensaje de Notificación</label>
        <textarea v-model="form.proyecto" rows="4" placeholder="Escribe la notificación..." required></textarea>
      </div>

      <button type="submit" :disabled="enviando" class="submit-btn">
        {{ enviando ? 'Enviando Alerta...' : 'Lanzar Notificación' }}
      </button>

      <p v-if="mensajeEstado" class="status-msg">{{ mensajeEstado }}</p>
    </form>
  </section>
</template>

<style scoped>
/* Estilos consistentes con tu portafolio */
.contacto-container { width: 100%; max-width: 600px; margin: 0 auto; padding: 20px; }
.form-card { background: #1a1a1a; padding: 30px; border-radius: 15px; border: 1px solid #333; }
.input-group { margin-bottom: 15px; display: flex; flex-direction: column; }
.input-group label { margin-bottom: 5px; color: #00ff41; font-weight: bold; }
input, textarea { padding: 12px; background: #111; border: 1px solid #444; color: #00ff41; border-radius: 8px; }
.submit-btn { width: 100%; padding: 12px; background: #2563eb; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; }
.status-msg { margin-top: 15px; text-align: center; color: #00ff41; }
</style>