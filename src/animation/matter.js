import Matter from 'matter-js'
import { ref } from 'vue'

const requestRef = ref(null)
const engineRef = ref(null)

export const initializeMatter = (skillChips, canvasWidth, canvasHeight, matterContainer) => {
  engineRef.value = Matter.Engine.create()
  const engine = engineRef.value

  /***  Create bodies  ***/
  const skillBodies = skillChips.map((chip) => {
    const width = chip.offsetWidth
    const height = chip.offsetHeight
    return {
      body: Matter.Bodies.rectangle(
        Math.random() * (canvasWidth.value * 0.8) + canvasWidth.value * 0.1,
        (Math.random() * canvasHeight.value) / 2,
        width,
        height,
        {
          render: {
            fillStyle: 'transparent'
          }
        }
      ),
      elem: chip,
      render() {
        const { x, y } = this.body.position
        this.elem.style.position = 'absolute'
        this.elem.style.top = `${y - height / 2}px`
        this.elem.style.left = `${x - width / 2}px`
        this.elem.style.transform = `rotate(${this.body.angle}rad)`
      }
    }
  })

  const params = {
    isStatic: true,
    render: {
      fillStyle: 'transparent'
    }
  }

  const ground = Matter.Bodies.rectangle(
    canvasWidth.value / 2,
    canvasHeight.value,
    canvasWidth.value,
    50,
    params
  )
  const leftWall = Matter.Bodies.rectangle(
    0,
    canvasHeight.value / 2,
    50,
    canvasHeight.value,
    params
  )
  const rightWall = Matter.Bodies.rectangle(
    canvasWidth.value,
    canvasHeight.value / 2,
    50,
    canvasHeight.value,
    params
  )
  const ceiling = Matter.Bodies.rectangle(canvasWidth.value / 2, 0, canvasWidth.value, 50, params)
  /***  Create bodies  ***/

  /***  Mouse Control  ***/
  const mouse = Matter.Mouse.create(matterContainer.value, {
    pixelRatio: 1,
    constraint: {
      stiffness: 0.2,
      render: {
        visible: false
      }
    }
  })

  mouse.element.removeEventListener('mousewheel', mouse.mousewheel)
  mouse.element.removeEventListener('DOMMouseScroll', mouse.mousewheel)

  const mouseConstraint = Matter.MouseConstraint.create(engine, {
    mouse,
    constraint: {
      stiffness: 0.2,
      render: {
        visible: false
      }
    }
  })

  /***  Mouse Control  ***/

  /***  add things to composite ***/
  Matter.Composite.add(engine.world, [
    ...skillBodies.map((el) => el.body),
    ground,
    leftWall,
    rightWall,
    ceiling,
    mouseConstraint
  ])
  /***  add things to composite ***/

  return { skillBodies, engine, requestRef }
}

export const clearMatter = () => {
  cancelAnimationFrame(requestRef.value)
  Matter.Engine.clear(engineRef.value)
}
