<template>
  <div class="achievements-container">
    <div class="menu-control">
      <label class="matrix-label">SELECCIONAR LOGRO:</label>
      <select v-model="logroSeleccionado" @change="cambiarLogro" class="matrix-select">
        <option value="barco">PROYECTO: BARCO 3D (STL)</option>
        <option value="ajedrez">SISTEMA: AJEDREZ TÁCTICO 3D</option>
      </select>
    </div>

    <div class="canvas-wrapper">
      <div ref="contenedorCanvas" class="canvas-box"></div>
      
      <div v-if="logroSeleccionado === 'ajedrez'" class="chess-overlay">
        <p class="status-text">{{ gameStatus }}</p>
        <p class="hint-text">Haz clic en el tablero para ejecutar un movimiento</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import { Chess } from 'chess.js';

// Estado
const logroSeleccionado = ref('barco');
const contenedorCanvas = ref(null);
const gameStatus = ref("Turno: Blancas");
const chess = new Chess();

// Variables de Three.js
let escena, camara, renderizador, controles, animacionId;
let piezasGrupo = new THREE.Group();

const limpiarEscena = () => {
  if (animacionId) cancelAnimationFrame(animacionId);
  if (renderizador) {
    renderizador.dispose();
    if (contenedorCanvas.value) {
      contenedorCanvas.value.innerHTML = '';
    }
  }
};

const initEscenaBase = () => {
  escena = new THREE.Scene();
  escena.background = new THREE.Color(0x000500); // Negro verdoso
  
  camara = new THREE.PerspectiveCamera(75, 760 / 480, 0.1, 1000);
  renderizador = new THREE.WebGLRenderer({ antialias: true });
  renderizador.setSize(760, 480);
  contenedorCanvas.value.appendChild(renderizador.domElement);

  controles = new OrbitControls(camara, renderizador.domElement);
  
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  escena.add(ambientLight);
  
  const directionalLight = new THREE.DirectionalLight(0x00ff00, 1);
  directionalLight.position.set(5, 10, 7);
  escena.add(directionalLight);
};

// --- LOGRO: BARCO ---
const cargarBarco = () => {
  limpiarEscena();
  initEscenaBase();
  camara.position.set(0, 2, 5);

  const loader = new STLLoader();
  // Asegúrate de que la ruta coincida con tu carpeta public
  loader.load('/profile/chess-torre.stl', (geometry) => { // Usando uno de tus .stl disponibles
    const material = new THREE.MeshStandardMaterial({ color: 0xff3344, metalness: 0.7, roughness: 0.2 });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = -Math.PI / 2;
    mesh.scale.set(0.1, 0.1, 0.1);
    escena.add(mesh);
  });

  animate();
};

// --- LOGRO: AJEDREZ ---
const cargarAjedrez = () => {
  limpiarEscena();
  initEscenaBase();
  camara.position.set(0, 8, 8);
  
  piezasGrupo = new THREE.Group();
  escena.add(piezasGrupo);

  // Crear Tablero
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const esNegra = (i + j) % 2 === 1;
      const geo = new THREE.BoxGeometry(1, 0.2, 1);
      const mat = new THREE.MeshStandardMaterial({ 
        color: esNegra ? 0x051a05 : 0x00ff00,
        transparent: true,
        opacity: 0.8
      });
      const casilla = new THREE.Mesh(geo, mat);
      casilla.position.set(i - 3.5, 0, j - 3.5);
      escena.add(casilla);
    }
  }

  const actualizarPiezas3D = () => {
    while(piezasGrupo.children.length > 0) piezasGrupo.remove(piezasGrupo.children[0]);
    const board = chess.board();
    
    board.forEach((row, rIndex) => {
      row.forEach((cell, cIndex) => {
        if (cell) {
          const pieceGeo = cell.type === 'p' ? new THREE.CylinderGeometry(0.3, 0.3, 0.8) : new THREE.BoxGeometry(0.5, 1.2, 0.5);
          const pieceMat = new THREE.MeshStandardMaterial({ 
            color: cell.color === 'w' ? 0xffffff : 0xff3344 
          });
          const pieceMesh = new THREE.Mesh(pieceGeo, pieceMat);
          pieceMesh.position.set(cIndex - 3.5, 0.6, rIndex - 3.5);
          piezasGrupo.add(pieceMesh);
        }
      });
    });
  };

  // Interacción: Mover pieza al hacer clic
  renderizador.domElement.addEventListener('mousedown', () => {
    if (!chess.isGameOver()) {
      const moves = chess.moves();
      if (moves.length > 0) {
        const move = moves[Math.floor(Math.random() * moves.length)];
        chess.move(move);
        actualizarPiezas3D();
        gameStatus.value = chess.turn() === 'w' ? "Turno: Blancas" : "Turno: Negras";
      }
    } else {
      gameStatus.value = "JAQUE MATE - FIN DEL JUEGO";
    }
  });

  actualizarPiezas3D();
  animate();
};

const animate = () => {
  animacionId = requestAnimationFrame(animate);
  controles.update();
  renderizador.render(escena, camara);
};

const cambiarLogro = () => {
  if (logroSeleccionado.value === 'barco') cargarBarco();
  else cargarAjedrez();
};

onMounted(() => {
  cambiarLogro();
});

onBeforeUnmount(() => {
  limpiarEscena();
});
</script>

<style scoped>
.achievements-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #000;
  padding: 30px;
  min-height: 100vh;
}

.menu-control {
  margin-bottom: 25px;
  text-align: center;
}

.matrix-label {
  color: #00ff00;
  font-family: 'Courier New', monospace;
  display: block;
  margin-bottom: 10px;
  letter-spacing: 2px;
}

.matrix-select {
  background: #000;
  color: #00ff00;
  border: 1px solid #00ff00;
  padding: 10px 20px;
  font-family: 'Courier New', monospace;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 255, 0, 0.2);
}

.matrix-select:focus {
  outline: none;
  box-shadow: 0 0 20px rgba(0, 255, 0, 0.5);
}

.canvas-wrapper {
  position: relative;
}

.canvas-box {
  border: 2px solid #00ff00;
  border-radius: 5px;
  box-shadow: 0 0 25px rgba(0, 255, 0, 0.15);
  overflow: hidden;
}

.chess-overlay {
  position: absolute;
  bottom: 20px;
  width: 100%;
  text-align: center;
  pointer-events: none;
}

.status-text {
  color: #ff3344;
  font-family: 'Courier New', monospace;
  font-size: 1.4rem;
  font-weight: bold;
  text-shadow: 0 0 10px #000;
  margin: 0;
}

.hint-text {
  color: #00ff00;
  font-size: 0.8rem;
  font-family: 'Courier New', monospace;
  opacity: 0.8;
}
</style>