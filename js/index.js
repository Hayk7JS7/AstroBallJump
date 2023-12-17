// import * as TWEEN from '@tweenjs/tween.js'

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { createPlanet } from './planetModule'


// data
import { planetRoatation } from './utils/planetData/planetRoatation'
import { planetsData } from './utils/planetData/planetsTexture'

// setups
import { scene } from './utils/solarSystemSetups/sceneSetup'
import { renderer } from './utils/solarSystemSetups/rendererSetup'
import { camera } from './utils/solarSystemSetups/cameraSetup'
import { backgroundTexture } from './utils/solarSystemSetups/textureLoaderSetup'
import { sun } from './utils/solarSystemSetups/sunSetup'
import { ambientLight, pointLight } from './utils/solarSystemSetups/lightSetup'

// Scene add
scene.background = backgroundTexture
scene.add(sun)
scene.add(ambientLight)
scene.add(pointLight)

// Orbit Control setup
const orbit = new OrbitControls(camera, renderer.domElement)
camera.position.set(-90, 140, 140)
orbit.update()

// create planets
const planetArray = planetsData.map(planet => {
  const { size, texture, position, ring, name } = planet
  return createPlanet(size, texture, position, ring, name)
})

// Animation function
function animate() {
  // TWEEN.update()

  sun.rotateY(0.002)

  planetArray.forEach((planet) => {
    const params = planetRoatation[planet.planetObj.name]
    if (!params) return false

    const { planetRotateY, planetObjRotateY } = params

    planet.planet.rotateY(planetRotateY)
    planet.planetObj.rotateY(planetObjRotateY)
  })

  renderer.render(scene, camera)
}


// Set the animation loop
renderer.setAnimationLoop(animate)

// Handle window resize
window.addEventListener('resize', function () {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()

  renderer.setSize(window.innerWidth, window.innerHeight)
})
 