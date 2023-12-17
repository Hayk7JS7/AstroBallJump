import { gravityData } from '../utils/planetData/planetGravityData'
import { canvas, ctx, balls, resizeCanvas } from './shared'
import { collapseInfoPanel, expandInfoPanel, updateUI, exit, handleExitClick, expandBtn, collapseBtn, handlePlanetClick } from './eventHandlers'

// Initial gradient colors and frame timestamp
let gradientColor = ['#020022', '#2b67cf', '#0907a6', '#160673']
let lastTime = 0
let handleClick

// Initialize canvas size
resizeCanvas()
// Keep canvas responsive
window.addEventListener('resize', resizeCanvas)

// Animation loop
function tick(currentTime) {
  const deltaTime = (currentTime - lastTime) / 1000
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  const gradient = ctx.createRadialGradient(
    canvas.width / 2, canvas.height / 2, 0,
    canvas.width / 2, canvas.height / 2, Math.min(canvas.width / 2, canvas.height / 2)
  )

  // Set gradient colors
  gradientColor.forEach((rgb, i, arr) => {
    gradient.addColorStop(i / arr.length, rgb)
  })

  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  balls.forEach(ball => ball.update(deltaTime))

  lastTime = currentTime
  requestAnimationFrame(tick)
}

// Function to enter a planet
export function enterPlanet(name, exitFn) {
  // Retrieve planet data
  const planetData = gravityData[name]
  // Update gradient colors based on planet data
  gradientColor = [...planetData.color]

  // Update UI with planet information
  updateUI(name, planetData)

  handleClick = (event) => handlePlanetClick(event, planetData.gravity, planetData.damping, planetData.imagePath)

  canvas.removeEventListener('click', handleClick)
  canvas.addEventListener('click', handleClick)

  exit.removeEventListener('click', exitFn)
  exit.addEventListener('click', () => handleExitClick(exitFn, handleClick))

  collapseBtn.addEventListener('click', collapseInfoPanel)
  expandBtn.addEventListener('click', expandInfoPanel)
}

requestAnimationFrame(tick)
