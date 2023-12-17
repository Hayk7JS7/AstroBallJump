// Importing planet images
import earth from '../../../src/circularPlanets/3dEarth.png'
import mercury from '../../../src/circularPlanets/3dMercury.jpg'
import saturn from '../../../src/circularPlanets/3dSaturn.png'
import neptune from '../../../src/circularPlanets/3dNeptune.jpg'
import uranus from '../../../src/circularPlanets/3dUranus1.jpg'
import mars from '../../../src/circularPlanets/3dMars.jpg'
import venus from '../../../src/circularPlanets/3dVenus.jpg'
import jupiter from '../../../src/circularPlanets/3dJupiter.jpg'

// Object containing gravity data for different planets
export const gravityData = {
    'earth': {
        // Gravity and damping properties
        gravity: 9.8, 
        damping: 0.98,
        // Image path and color array for the planet
        imagePath: earth,
        color: ['rgb(2, 0, 34)', 'rgb(43, 103, 207)', 'rgb(9, 7, 166)', 'rgb(22, 6, 115)'],
        // Other properties such as size, distance, composition, and facts
        size: 12742, 
        distance: 149.6, 
        composition: 'Rock and Metal',
        facts: ['Earth is the only known planet with life', 'It has a diverse ecosystem', 'It has a natural satellite called the Moon']
    },
    'mercury': {
        gravity: 3.7,  
        damping: 0.95,
        imagePath: mercury,
        color: ['rgb(56, 50, 44)', 'rgb(80, 69, 61)', 'rgb(188, 169, 139)', 'rgb(241, 238, 220)', 'rgb(253, 250, 237)', 'rgb(177, 153, 125)', 'rgb(104, 97, 89)'],
        size: 4879, 
        distance: 57.9,
        composition: 'Rock and Metal',
        facts: ['Mercury is the smallest planet in our solar system', 'It has extreme temperature variations', 'It has a very thin atmosphere']
    },
    'saturn': {
        gravity: 1.44,  
        damping: 0.96,
        imagePath: saturn,
        color: ['rgb(47, 41, 35)', 'rgb(180, 146, 94)', 'rgb(243, 214, 166)', 'rgb(241, 192, 117)', 'rgb(92, 80,, 65)'],
        size: 116460, 
        distance: 1427,
        composition: 'Gas (mostly hydrogen and helium)',
        facts: ['Saturn has a prominent ring system', 'It has numerous moons', 'It has a hexagonal storm at its north pole']
    },
    'neptune': {
        gravity: 11.15,  
        damping: 0.97,
        imagePath: neptune,
        color: ['rgb(2, 0, 34)', 'rgb(43, 103, 207)', 'rgb(9, 7, 166)', 'rgb(114, 135, 228)'],
        size: 49528,
        distance: 4498,
        composition: 'Ice and Gas',
        facts: ['Neptune is the farthest planet from the Sun', 'It has a storm called the Great Dark Spot', 'It has a strong magnetic field']
    },
    'uranus': {
        gravity: 8.69,  
        damping: 0.99,
        imagePath: uranus,
        color: ['rgb(2, 0, 34)', 'rgb(154, 170, 181)', 'rgb(9, 7, 166)', 'rgb(22, 6, 115)'],
        size: 51118, 
        distance: 2870,
        composition: 'Ice and Gas',
        facts: ['Uranus rotates on its side', 'It has a faint ring system', 'It has 27 known moons']
    },
    'mars': {
        gravity: 3.71,  
        damping: 0.96,
        imagePath: mars,
        color: ['rgb(82, 30, 11)', 'rgb(89, 36, 17)', 'rgb(198, 100, 71)', 'rgb(250, 181, 144)', 'rgb(248, 161, 120)', 'rgb(181, 96, 65)', 'rgb(111, 61, 54)'],
        size: 6779,
        distance: 227.9,
        composition: 'Rock and Metal',
        facts: ['Mars is known as the Red Planet', 'It has the tallest volcano and the deepest canyon', 'It has polar ice caps']
    },
    'venus': {
        gravity: 8.87,  
        damping: 0.95,
        imagePath: venus,
        color: ['rgb(124, 43, 23)', 'rgb(114, 60, 28)', 'rgb(150, 107, 54)', 'rgb(223, 190, 88)', 'rgb(209, 160, 64)', 'rgb(170, 102, 45)', 'rgb(192, 111, 47)', 'rgb(127, 98, 38)'],
        size: 12104,
        distance: 108.2, 
        composition: 'Rock and Metal',
        facts: ['Venus is similar in size and composition to Earth', 'It has a thick atmosphere of sulfuric acid', 'It rotates in the opposite direction to most planets']
    },
    'jupiter': {
        gravity: 24.79,  
        damping: 0.98,
        imagePath: jupiter,
        color: ['rgb(67, 59, 53)', 'rgb(75, 70, 65)', 'rgb(153, 167, 177)', 'rgb(241, 233, 226)', 'rgb(210, 212, 207)', 'rgb(174, 149, 123)', 'rgb(101, 105, 107)'],
        size: 139820, 
        distance: 778.3, 
        composition: 'Gas (mostly hydrogen and helium)',
        facts: ['Jupiter is the largest planet in our solar system', 'It has a strong magnetic field', 'It has a Great Red Spot, a massive storm']
    },
}
