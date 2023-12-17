import * as THREE from 'three'

// Light setup
const ambientLight = new THREE.AmbientLight(0x333333)

// Point light setup
const pointLight = new THREE.PointLight(0xffffff, 3, 300)

export { ambientLight, pointLight }