// Import the Ball class and shared variables
import { Ball } from './Ball'
import { canvas, balls, ctx } from './shared'

// DOM elements
const exit = document.querySelector('.ext-btn')
const planet = document.getElementById('planet')
const infoPanel = document.querySelector('.info-panel')
const expandBtn = document.getElementById('expandBtn')
const collapseBtn = document.getElementById('collapseBtn')

// Function to collapse the information panel
export function collapseInfoPanel() {
    infoPanel.style.display = 'none'
    expandBtn.style.display = 'block'
    collapseBtn.style.display = 'none'
}

// Function to expand the information panel
export function expandInfoPanel() {
    infoPanel.style.display = 'block'
    expandBtn.style.display = 'none'
    collapseBtn.style.display = 'block'
}

// Function to update UI with planet information
export function updateUI(name, { gravity, size, distance, composition, facts }) {
    const { style, textContent } = document.getElementById('planetName')
    style.textContent = name
    document.getElementById('planetGravity').textContent = gravity + ` m/s²`
    document.getElementById('planetSize').textContent = size + ` km`
    document.getElementById('planetDistance').textContent = distance + ` mil km`
    document.getElementById('planetComposition').textContent = composition
  
    const factsContainer = document.getElementById('planetFacts')
    factsContainer.innerHTML = ''
  
    facts.forEach(fact => {
      const factElement = document.createElement('p')
      factElement.textContent = fact
      factsContainer.appendChild(factElement)
    })
}

// Function to handle exit button click
export function handleExitClick(exitFn, handleClick) {
    exitFn()
    balls.length = 0
    collapseInfoPanel()
    planet.style.background = ''
    canvas.removeEventListener('click', handleClick)
}

// Function to handle planet click events
export function handlePlanetClick(event, gravity, damping, imagePath) {
  if (event.target === expandBtn) {
    expandInfoPanel()
  } else {
    const clickX = event.clientX - canvas.getBoundingClientRect().left
    const clickY = event.clientY - canvas.getBoundingClientRect().top

    // Create a new Ball object and add it to the balls array
    const newBall = new Ball(clickX, clickY, 30, gravity, damping, imagePath, canvas, ctx)
    balls.push(newBall)
  }
}

// Export DOM elements
export { exit, planet, expandBtn, collapseBtn }
