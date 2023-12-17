import * as TWEEN from '@tweenjs/tween.js'
import { camera } from './utils/solarSystemSetups/cameraSetup'

export function animateCamera(targetPosition, duration, cb) {
    const from = {
      x: camera.position.x,
      y: camera.position.y,
      z: camera.position.z
    }
  
    const to = {
      x: targetPosition.x,
      y: targetPosition.y,
      z: targetPosition.z
    }

    const tween = new TWEEN.Tween(from)
    .to(to, duration)
    .easing(TWEEN.Easing.Quadratic.Out)
    .onUpdate(() => {
      camera.position.set(from.x, from.y, from.z)
    })
    .onComplete(() => {
      camera.position.set(to.x, to.y, to.z)

      if (cb && typeof cb === 'function') {
        cb()
      }
    })
    .start()
}