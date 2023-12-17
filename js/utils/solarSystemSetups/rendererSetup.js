import * as THREE from 'three'

const renderer = new THREE.WebGL1Renderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)

const solarSystem = document.getElementById('solar-system')
solarSystem.appendChild(renderer.domElement)

const planetOverlay = document.getElementById('planet')

export { renderer, solarSystem, planetOverlay }
