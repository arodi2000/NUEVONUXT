<template>
  <div class="contenedor-visor">
    <div ref="contenedor3D" class="canvas-3d"></div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js'

const contenedor3D = ref(null)
let escena, camara, renderizador, controles, animacionId

onMounted(() => {
  if (!contenedor3D.value) return

  // 1. Crear la escena con estética oscura
  escena = new THREE.Scene()
  escena.background = new THREE.Color(0x0a0a0a)

  // 2. Crear la cámara
  camara = new THREE.PerspectiveCamera(
    45,
    contenedor3D.value.clientWidth / contenedor3D.value.clientHeight,
    0.1,
    10000
  )
  camara.position.set(0, 0, 200)

  // 3. Crear el renderizador
  renderizador = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderizador.setSize(
    contenedor3D.value.clientWidth,
    contenedor3D.value.clientHeight
  )
  renderizador.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  contenedor3D.value.innerHTML = ''
  contenedor3D.value.appendChild(renderizador.domElement)

  // 4. Luces intensas (vitales para que se aprecie el detalle del barco)
  const luzAmbiental = new THREE.AmbientLight(0xffffff, 1.8)
  escena.add(luzAmbiental)

  const luzDireccional = new THREE.DirectionalLight(0x00ff00, 2.5) // Luz de acento verde
  luzDireccional.position.set(100, 100, 100)
  escena.add(luzDireccional)

  // --- COMENTADO: Geometría de prueba (cuadrado rojo) ---
  // const geometriaPrueta = new THREE.BufferGeometry()
  // const verticesPrueba = new Float32Array([
  //   -25.0, -25.0,  25.0,
  //    25.0, -25.0,  25.0,
  //    25.0,  25.0,  25.0,
  //    25.0,  25.0,  25.0,
  //   -25.0,  25.0,  25.0,
  //   -25.0, -25.0,  25.0,
  // ])
  // geometriaPrueta.setAttribute('position', new THREE.BufferAttribute(verticesPrueba, 3))
  // const materialPrueba = new THREE.MeshStandardMaterial({ color: 0xff3344, side: THREE.DoubleSide })
  // const modeloPrueba = new THREE.Mesh(geometriaPrueta, materialPrueba)
  // escena.add(modeloPrueba)
  // -----------------------------------------------------

  // 5. CARGA REAL DEL BARCO (Desde /public/ship.stl)
  try {
    const cargador = new STLLoader()
    cargador.load(
      '/ship.stl', // <--- IMPORTANTE: Asegúrate de que el nombre coincida
      geometria => {
        console.log('¡Barco cargado exitosamente!')
        geometria.center()

        // Estilo pirata
        const material = new THREE.MeshStandardMaterial({
          color: 0xff3344, // Rojo pirata
          metalness: 0.3,
          roughness: 0.2,
          side: THREE.DoubleSide
        })

        const modeloBarco = new THREE.Mesh(geometria, material)

        // Cálculo de escala automático (crucial para Thingiverse)
        geometria.computeBoundingSphere()
        const esfera = geometria.boundingSphere
        const radio = esfera.radius

        const escalaDeseada = 50
        const escala = radio > 0 ? escalaDeseada / radio : 1
        modeloBarco.scale.set(escala, escala, escala)

        // Rotación
        modeloBarco.rotation.x = -Math.PI / 2
        escena.add(modeloBarco)

        camara.position.set(0, 0, radio > 0 ? radio * 3 : 200)
        controles.target.set(0, 0, 0)
      },
      xhr => {
        console.log(`Cargando: ${((xhr.loaded / xhr.total) * 100).toFixed(2)}%`)
      },
      error => {
        console.error('Error al cargar /ship.stl:', error)
      }
    )
  } catch (error) {
    console.error('Ocurrió un problema con el cargador:', error)
  }

  // 6. Controles
  controles = new OrbitControls(camara, renderizador.domElement)
  controles.enableDamping = true

  // 7. Animación
  const animar = () => {
    animacionId = requestAnimationFrame(animar)
    controles.update()
    renderizador.render(escena, camara)
  }

  animar()

  // 8. Responsive
  const handleResize = () => {
    if (!contenedor3D.value) return
    const width = contenedor3D.value.clientWidth
    const height = contenedor3D.value.clientHeight
    camara.aspect = width / height
    camara.updateProjectionMatrix()
    renderizador.setSize(width, height)
  }
  window.addEventListener('resize', handleResize)
})

let animId
onBeforeUnmount(() => {
  cancelAnimationFrame(animId)
  if (renderizador) renderizador.dispose()
})
</script>

<style scoped>
.contenedor-visor {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1rem 0;
}
.canvas-3d {
  width: 800px;
  height: 500px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 255, 0, 0.2);
  border: 1px solid #005500;
  background-color: #0a0a0a;
}
</style>
