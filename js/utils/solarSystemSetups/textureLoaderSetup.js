import * as THREE from 'three'

import starsTexture from '../../../src/img/stars.jpg'

const textureLoader = new THREE.TextureLoader()

// Texture Loader setup
const cubeTextureLoader = new THREE.CubeTextureLoader()
const backgroundTexture = cubeTextureLoader.load([
  starsTexture, starsTexture, starsTexture,
  starsTexture, starsTexture, starsTexture
])
backgroundTexture.minFilter = THREE.LinearFilter

export { textureLoader, backgroundTexture }
