<template>
  <div class="achievements-container">
    <div class="menu-box">
      <h2 class="matrix-title">SISTEMA DE LOGROS</h2>
      <div class="select-wrapper">
        <label for="logro-select">SELECCIONAR MÓDULO:</label>
        <select
          id="logro-select"
          v-model="logroSeleccionado"
          @change="cambiarLogro"
          class="matrix-input"
        >
          <option value="barco">PROYECTO: BARCO PIRATA 3D</option>
          <option value="ajedrez">SISTEMA: AJEDREZ TÁCTICO</option>
        </select>
      </div>
    </div>

    <div class="viewport-wrapper">
      <div ref="contenedorCanvas" class="canvas-frame"></div>

      <div v-if="logroSeleccionado === 'ajedrez'" class="chess-info">
        <span class="status-alert">{{ gameStatus }}</span>
        <p class="instruction">
          Haz clic para mover aleatoriamente (Simulación)
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader'
import { Chess } from 'chess.js'

// Estado de la UI
const logroSeleccionado = ref('barco')
const contenedorCanvas = ref(null)
const gameStatus = ref('Turno: Blancas')
const chess = new Chess()

// Variables de motor Three.js
let escena, camara, renderizador, controles, animacionId
let piezasGrupo = new THREE.Group()

const limpiarEscena = () => {
  if (animacionId) cancelAnimationFrame(animacionId)
  if (renderizador) {
    renderizador.dispose()
    if (contenedorCanvas.value) contenedorCanvas.value.innerHTML = ''
  }
}

const initBase = () => {
  escena = new THREE.Scene()
  // Fondo oscuro para que resalte el neón
  escena.background = new THREE.Color(0x0a0a0a)

  camara = new THREE.PerspectiveCamera(75, 760 / 480, 0.1, 1000)
  renderizador = new THREE.WebGLRenderer({ antialias: true })
  renderizador.setSize(760, 480)
  contenedorCanvas.value.appendChild(renderizador.domElement)

  controles = new OrbitControls(camara, renderizador.domElement)

  const luz = new THREE.AmbientLight(0xffffff, 0.8)
  escena.add(luz)

  const luzDir = new THREE.DirectionalLight(0x00ff00, 1)
  luzDir.position.set(5, 10, 5)
  escena.add(luzDir)
}

// --- FUNCIÓN PARA EL BARCO ---
const cargarBarco = () => {
  limpiarEscena()
  initBase()
  camara.position.set(0, 5, 10)

  const loader = new STLLoader()
  // Usamos uno de tus archivos .stl que se ven en tu sidebar
  loader.load('/chess-torre.stl', geometry => {
    const material = new THREE.MeshStandardMaterial({
      color: 0xff3344,
      metalness: 0.6
    })
    const mesh = new THREE.Mesh(geometry, material)
    mesh.rotation.x = -Math.PI / 2
    mesh.scale.set(0.15, 0.15, 0.15)
    escena.add(mesh)
  })
  animate()
}

// --- FUNCIÓN PARA EL AJEDREZ ---
const cargarAjedrez = () => {
  limpiarEscena()
  initBase()
  camara.position.set(0, 10, 10)

  piezasGrupo = new THREE.Group()
  escena.add(piezasGrupo)

  // Generar tablero
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const esNegra = (i + j) % 2 === 1
      const geo = new THREE.BoxGeometry(1, 0.2, 1)
      const mat = new THREE.MeshStandardMaterial({
        color: esNegra ? 0x000000 : 0x00ff00,
        emissive: esNegra ? 0x000000 : 0x004400
      })
      const casilla = new THREE.Mesh(geo, mat)
      casilla.position.set(i - 3.5, 0, j - 3.5)
      escena.add(casilla)
    }
  }

  const syncPieces = () => {
    while (piezasGrupo.children.length > 0)
      piezasGrupo.remove(piezasGrupo.children[0])
    chess.board().forEach((row, r) => {
      row.forEach((cell, c) => {
        if (cell) {
          const geo =
            cell.type === 'p'
              ? new THREE.CylinderGeometry(0.3, 0.3, 0.8)
              : new THREE.BoxGeometry(0.5, 1.2, 0.5)
          const mat = new THREE.MeshStandardMaterial({
            color: cell.color === 'w' ? 0xffffff : 0xff3344
          })
          const pMesh = new THREE.Mesh(geo, mat)
          pMesh.position.set(c - 3.5, 0.6, r - 3.5)
          piezasGrupo.add(pMesh)
        }
      })
    })
  }

  renderizador.domElement.onclick = () => {
    if (!chess.isGameOver()) {
      const moves = chess.moves()
      chess.move(moves[Math.floor(Math.random() * moves.length)])
      syncPieces()
      gameStatus.value =
        chess.turn() === 'w' ? 'Turno: Blancas' : 'Turno: Negras'
    }
  }

  syncPieces()
  animate()
}

const animate = () => {
  animacionId = requestAnimationFrame(animate)
  controles.update()
  renderizador.render(escena, camara)
}

const cambiarLogro = () => {
  if (logroSeleccionado.value === 'barco') cargarBarco()
  else cargarAjedrez()
}

onMounted(() => cambiarLogro())
onBeforeUnmount(() => limpiarEscena())
</script>

<style scoped>
.achievements-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  color: #00ff00;
  font-family: 'Courier New', Courier, monospace;
}

.menu-box {
  background: rgba(0, 20, 0, 0.9);
  padding: 20px;
  border: 1px solid #00ff00;
  border-radius: 10px;
  margin-bottom: 30px;
  box-shadow: 0 0 15px rgba(0, 255, 0, 0.4);
  text-align: center;
  z-index: 100; /* Asegura que el menú esté por encima */
}

.matrix-title {
  margin-top: 0;
  font-size: 1.5rem;
  letter-spacing: 3px;
  text-shadow: 0 0 10px #00ff00;
}

.matrix-input {
  background: #000;
  color: #00ff00;
  border: 1px solid #00ff00;
  padding: 10px;
  margin-left: 10px;
  cursor: pointer;
  outline: none;
}

.viewport-wrapper {
  position: relative;
  border: 3px solid #00ff00;
  border-radius: 5px;
  background: #000;
  line-height: 0;
}

.chess-info {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.7);
  padding: 10px;
  border: 1px solid #ff3344;
  pointer-events: none;
}

.status-alert {
  color: #ff3344;
  font-weight: bold;
  display: block;
}

.instruction {
  font-size: 0.7rem;
  margin: 5px 0 0;
  color: #00ff00;
}
</style>
