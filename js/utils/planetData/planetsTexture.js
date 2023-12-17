export const PLANETS = {
    mercury: 'mercury',
    earth: 'earth',
    saturn: 'saturn',
    neptune: 'neptune',
    uranus: 'uranus',
    mars: 'mars',
    venus: 'venus',
    jupiter: 'jupiter'
}

import mercuryTexture from '../../../src/img/mercury.jpg'
import venusTexture from '../../../src/img/venus.jpg'
import earthTexture from '../../../src/img/earth.jpg'
import marsTexture from '../../../src/img/mars.jpg'
import jupiterTexture from '../../../src/img/jupiter.jpg'
import saturnTexture from '../../../src/img/saturn.jpg'
import saturnRingTexture from '../../../src/img/saturn ring.png'
import uranusTexture from '../../../src/img/uranus.jpg'
import uranusRingTexture from '../../../src/img/uranus ring.png'
import neptuneTexture from '../../../src/img/neptune.jpg'

export const planetsData = [
  {
    size: 4,
    texture: mercuryTexture, 
    position: 20, 
    ring: false, 
    name: PLANETS.mercury 
  },
  {
    size: 5,
    texture: venusTexture, 
    position: 40, 
    ring: false, 
    name: PLANETS.venus 
  },
  {
    size: 5.56,
    texture: earthTexture, 
    position: 60, 
    ring: false, 
    name: PLANETS.earth 
  },
  {
    size: 5,
    texture: marsTexture, 
    position: 80, 
    ring: false, 
    name: PLANETS.mars 
  },
  {
    size: 6,
    texture: jupiterTexture, 
    position: 100, 
    ring: false, 
    name: PLANETS.jupiter 
  },
  {
    size: 8,
    texture: saturnTexture, 
    position: 150, 
    ring: { 
      innerRadius: 10, 
      outerRadius: 20, 
      texture: saturnRingTexture
    },
    name: PLANETS.saturn 
  },
  {
    size: 8.2,
    texture: uranusTexture, 
    position: 200, 
    ring: { 
      innerRadius: 10, 
      outerRadius: 20, 
      texture: uranusRingTexture
    },
    name: PLANETS.uranus 
  },
  {
    size: 5,
    texture: neptuneTexture, 
    position: 240, 
    ring: false, 
    name: PLANETS.neptune 
  },
]