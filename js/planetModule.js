import * as THREE from 'three'
import { solarSystem, planetOverlay } from './utils/solarSystemSetups/rendererSetup'
import { camera, setCamera } from './utils/solarSystemSetups/cameraSetup'
import { scene } from './utils/solarSystemSetups/sceneSetup'
import { textureLoader } from './utils/solarSystemSetups/textureLoaderSetup'
import { enterPlanet } from './planetModule/index'

class Planet {
  static solarSystemClickable = true

  constructor(size, texture, position, ring, name) {
    // Geometry and Material setup
    this.geometry = new THREE.SphereGeometry(size, 25, 20)
    this.material = new THREE.MeshBasicMaterial({
      map: textureLoader.load(texture),
    })

    // Planet mesh and object setup
    this.planet = new THREE.Mesh(this.geometry, this.material)
    this.planetObj = new THREE.Object3D()
    this.planetObj.add(this.planet)
    this.planetObj.name = name

    // Add planet object to the scene
    scene.add(this.planetObj)
    
    // Set planet initial position
    this.planet.position.x = position

    // Add planet ring if available
    if (ring) {
      this.addRing(ring, position)
    }

    // Setup overlay and click listener
    this.setupOverlayAndClickListener()
    this.addClickListener()
  }

  addRing(ring, position) {
    // Ring setup
    const ringGeometry = new THREE.RingGeometry(
      ring.innerRadius,
      ring.outerRadius,
      30
    )

    const ringMaterial = new THREE.MeshBasicMaterial({
      map: textureLoader.load(ring.texture),
      side: THREE.DoubleSide,
    })

    const ringMesh = new THREE.Mesh(ringGeometry, ringMaterial)
    this.planetObj.add(ringMesh)
    
    // Set ring position and rotation
    ringMesh.position.x = position
    ringMesh.rotation.x = -0.5 * Math.PI
  }

  setupOverlayAndClickListener() {
    // Raycaster setup for click detection
    this.raycaster = new THREE.Raycaster()
    this.mouse = new THREE.Vector2()
    this.clickListener = (event) => this.onClick(event)
  }

  onClick(event) {
    // Handle click event
    event.preventDefault()

    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1
    this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1

    this.raycaster.setFromCamera(this.mouse, camera)

    // Check for intersection with the planet object
    if (Planet.solarSystemClickable) {
      const intersects = this.raycaster.intersectObjects([this.planetObj], true)
      if (intersects.length > 0) {
        this.showPlanetOverlay()
      }
    }
  }

  showPlanetOverlay() {
    const showPlanet = () => {
      // Display overlay and hide solar system
      planetOverlay.style.display = 'block'
      planetOverlay.style.zIndex = '0'
      solarSystem.style.display = 'none'
      solarSystem.style.zIndex = '-999'
    
      // Disable solar system clickability
      Planet.solarSystemClickable = false
    
      const currentInstance = this
    
      // Remove click listener during planet transition
      document.removeEventListener('click', this.clickListener)
    
      // Enter the planet (simulate)
      enterPlanet(this.planetObj.name, () => {
        currentInstance.hidePlanetOverlay()
        currentInstance.addClickListener()
      })
    }

    // It's not working completely
    // const planetWorldPos = new THREE.Vector3()
    // const position = this.planet.getWorldPosition(planetWorldPos)
    // animateCamera(position, 3000, showPlanet)
    
    showPlanet()
  }

  hidePlanetOverlay() {
    // Function to hide the planet overlay
    const hidePlanet = () => {
      // Hide overlay and show solar system
      planetOverlay.style.display = 'none'
      planetOverlay.style.zIndex = '-999'
      solarSystem.style.display = 'block'
      solarSystem.style.zIndex = '0'
  
      // Enable solar system clickability
      Planet.solarSystemClickable = true
    }

    // setCamera() - Uncomment it's continuation of animateCamera() 
    hidePlanet()
  }

  addClickListener() {
    document.addEventListener('click', this.clickListener, false)
  }

  getPlanet() {
    return this.planet
  }

  getPlanetObj() {
    return this.planetObj
  }
}

export function createPlanet(size, texture, position, ring, name) {
  // Factory function to create a new Planet instance
  return new Planet(size, texture, position, ring, name)
}
