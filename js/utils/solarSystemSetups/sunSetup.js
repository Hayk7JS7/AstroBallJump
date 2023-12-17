import * as THREE from 'three'

import sunTexture from '../../../src/img/sun.jpg'
import { textureLoader } from './textureLoaderSetup'

// Sun setup
const sunGeometry = new THREE.SphereGeometry(12, 25, 20)
const sunMaterial = new THREE.MeshBasicMaterial({
  map: textureLoader.load(sunTexture),
})
sunMaterial.map.minFilter = THREE.LinearFilter

export const sun = new THREE.Mesh(sunGeometry, sunMaterial)
