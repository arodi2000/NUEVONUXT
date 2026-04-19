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
  mensajeEstado.value = 'Enviando mensaje...'

  // REEMPLAZA ESTA URL con la de tu Google Apps Script
 const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbxN_yoxiwM0f0X5UOV0VqoNZwf5LQLOff7p5SP71bDoXhyeW6EqwfaFO4eBmpDVAVAagg/exec'

  try {
    const response = await fetch(WEB_APP_URL, {
      method: 'POST',
      mode: 'no-cors', 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form.value)
    })

    mensajeEstado.value = '¡Datos enviados correctamente!'
    // Limpieza de campos según tu nueva estructura
    form.value = { nombre: '', correo: '', telefono: '', proyecto: '' }
    
  } catch (error) {
    mensajeEstado.value = 'Hubo un error al conectar con la API.'
    console.error(error)
  } finally {
    enviando.value = false
    setTimeout(() => { mensajeEstado.value = '' }, 5000)
  }
}
</script>

<template>
  <section class="contacto-container">
    <h2 class="section-title">Contacto</h2>
    <form @submit.prevent="enviarFormulario" class="form-card">
      <div class="input-group">
        <label>Nombre</label>
        <input v-model="form.nombre" type="text" placeholder="Tu nombre" required />
      </div>

      <div class="input-group">
        <label>Email</label>
        <input v-model="form.correo" type="email" placeholder="correo@ejemplo.com" required />
      </div>

      <div class="input-group">
        <label>Teléfono</label>
        <input v-model="form.telefono" type="tel" placeholder="Tu número" required />
      </div>

      <div class="input-group">
        <label>Proyecto</label>
        <textarea v-model="form.proyecto" rows="4" placeholder="Háblame de tu proyecto" required></textarea>
      </div>

      <button type="submit" :disabled="enviando" class="submit-btn">
        {{ enviando ? 'Procesando...' : 'Enviar Mensaje' }}
      </button>

      <p v-if="mensajeEstado" class="status-msg">{{ mensajeEstado }}</p>
    </form>
  </section>
</template>

<style scoped>
.contacto-container { width: 100%; max-width: 600px; margin: 0 auto; padding: 20px; }
.form-card { background: #1a1a1a; padding: 30px; border-radius: 15px; border: 1px solid #333; }
.input-group { margin-bottom: 15px; display: flex; flex-direction: column; }
.input-group label { margin-bottom: 5px; color: #64b5f6; font-weight: bold; }
input, textarea { padding: 12px; background: #222; border: 1px solid #444; color: white; border-radius: 8px; }
.submit-btn { width: 100%; padding: 12px; background: #2563eb; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; }
.submit-btn:disabled { background: #444; cursor: not-allowed; }
.status-msg { margin-top: 15px; text-align: center; color: #64b5f6; }
</style>