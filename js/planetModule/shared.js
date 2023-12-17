// Get the canvas element and its 2D rendering context
export const canvas = document.getElementById('gameCanvas')
export const ctx = canvas.getContext('2d')

// Array to store instances of the Ball class
export const balls = []

// Function to resize the canvas based on window dimensions
export function resizeCanvas() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
}
