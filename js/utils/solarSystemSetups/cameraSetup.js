import * as THREE from 'three'

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.set(-90, 140, 140)

const setCamera = () => {
    camera.position.set(-90, 140, 140)
}

export { camera, setCamera }
