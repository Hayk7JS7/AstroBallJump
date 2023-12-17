export class Ball {
    // Constructor initializes properties of the ball
    constructor(x, y, radius, gravity, damping, imagePath, canvas, ctx) {
      this.x = x
      this.y = y
      this.radius = radius
      this.gravity = gravity
      this.velocityY = 0
      this.damping = damping
      this.image = new Image()
      this.image.src = imagePath
      this.canvas = canvas
      this.ctx = ctx
    }

    // Update method calculates the ball's new position based on time
    update(deltaTime) {
      this.y += this.velocityY * deltaTime
  
      if (this.y + this.radius >= this.canvas.height) {
        this.handleCollision()
      } else {
        this.velocityY += this.gravity * deltaTime
      }
  
      this.render()
    }
  
    // Method handles collisions with the bottom of the canvas
    handleCollision() {
      this.y = this.canvas.height - this.radius
      this.velocityY = -Math.abs(this.velocityY) * this.damping
  
      this.damping *= 0.9
  
      if (Math.abs(this.velocityY) < 1 || this.damping < 0.1) {
        this.velocityY = 0
        this.damping = 0.98
  
        if (this.y + this.radius < 1) {
          this.y = this.radius
        }
      }
    }
    
    // Method renders the ball on the canvas
    render() {
      this.ctx.save()
  
      const planetDiameter = this.radius * 2
      this.ctx.beginPath()
      this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
      this.ctx.closePath()
  
      this.ctx.clip()
  
      this.ctx.drawImage(this.image, this.x - this.radius, this.y - this.radius, planetDiameter, planetDiameter)
  
      this.ctx.restore()
    }
}
