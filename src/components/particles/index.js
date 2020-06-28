import React, { useEffect, useRef } from "react"
import PropTypes from "prop-types"
import lodash from "lodash"

import shapes from "./shapes"

const Particles = ({ count }) => {
  // DOM reference to the canvas HTML element.
  const canvasRef = useRef()
  // DOM reference to the shapes' source image.
  const shapesRef = useRef([])

  /**
   * As the rendering portion of this component is just a canvas, this is the
   * function that controls everything within the canvas. It is only run a
   * single time. It controls both rendering and moving the particles.
   */
  useEffect(() => {
    // Don't do anything if we don't have access to the window.
    if (typeof window === "undefined") return
    // Quick reference to the canvas element in the DOM.
    let canvas = canvasRef.current
    // Shared variables, all of which are set in the init() function.
    let parentElement, canvasHeight, canvasWidth
    // This is the context on which we draw.
    let context = canvas.getContext("2d")

    /**
     * Uses the parameters its given to render a particle to the canvas.
     */
    const drawParticle = ({ image, position, radius }) => {
      // Set the opacity of the image to give the appearance of layering.
      context.globalAlpha = 0.9
      // Draw the image.
      context.drawImage(image, position.x - radius, position.y - radius, radius * 2, radius * 2)
    }

    /**
     * Creates a particle object, which holds its properties. These are used to
     * draw the particle's style and position. It also controls its speed, so
     * all particles move at different rates around the canvas.
     */
    const initParticle = () => {
      const radius = lodash.random(5, 8)

      return {
        // Choose a random image from the source refs.
        image: lodash.sample(shapesRef.current),
        // The move property controls the direction in which the particle is
        // moving. Plus is to the right or down, and minus is to the left or up.
        // When the particle hits the edge of the canvas, these properties are
        // adjusted.
        move: {
          x: lodash.sample(["+", "-"]),
          y: lodash.sample(["+", "-"])
        },
        // The position property controls the coordinates at which the particles
        // should be drawn on the canvas. This is incremented by the speed
        // property below.
        position: {
          x: lodash.random(radius, canvasWidth - radius),
          y: lodash.random(radius, canvasHeight - radius)
        },
        radius: radius,
        // The value to use to increment or decrement the position property on
        // each animation frame. Note that the speed is relative to the speed at
        // which each frame is rendered on the canvas.
        speed: {
          x: lodash.random(0.01, 0.15),
          y: lodash.random(0.01, 0.15)
        }
      }
    }

    /**
     * Given a particle object, move the particle, ensuring that it doesn't move
     * beyond the sides of the canvas.
     */
    const moveParticle = particle => {
      // Increment the position in both x and y directions by the value of the
      // speed set on the particle object. This makes each particle move at a
      // different speed. Also note that the direction (incrementing or
      // decrementing) is set by the move property on the particle.
      particle.position.x =
        particle.move.x === "+"
          ? particle.position.x + particle.speed.x
          : particle.position.x - particle.speed.x
      particle.position.y =
        particle.move.y === "+"
          ? particle.position.y + particle.speed.y
          : particle.position.y - particle.speed.y
      // If the particle has come in contact with the edge of the canvas, then
      // adjust the move property to point in the opposite direction.
      if (particle.position.x + particle.radius >= canvasWidth) particle.move.x = "-"
      if (particle.position.x - particle.radius <= 0) particle.move.x = "+"
      if (particle.position.y + particle.radius >= canvasHeight) particle.move.y = "-"
      if (particle.position.y - particle.radius <= 0) particle.move.y = "+"
      // Draw the particle on the canvas.
      drawParticle(particle)
      // Return the adjusted particle object.
      return particle
    }

    /**
     * Controls moving all the particles on each animation frame.
     */
    const move = () => {
      // Clear the entire canvas. If we don't do this we'd be drawing lines
      // instead of moving particles.
      context.clearRect(0, 0, canvasWidth, canvasHeight)
      // Adjust the particles's properties and then draw them to the canvas.
      particles.map(moveParticle)
      // Call this function again using the speed that the canvas can render.
      window.requestAnimationFrame(move)
    }

    /**
     * Resets shared values so other functions know the size of the container.
     */
    const reset = () => {
      // Set the parent element's position to relative so that we can get its
      // dimensions and then set the canvas's dimension to match.
      parentElement = canvas.parentElement
      parentElement.style.position = "relative"
      // Find the parent element's dimensions and store them as references. (We
      // use them during the animation process.)
      canvasHeight = parentElement.clientHeight
      canvasWidth = parentElement.clientWidth
      // Set the canvas width and height explicitly as attributes on the object.
      // This is necessary for getting the particles to rendering properly.
      canvas.setAttribute("height", canvasHeight)
      canvas.setAttribute("width", canvasWidth)
    }

    // Set the shared values.
    reset()
    // Create the particles.
    let particles = [...Array(count)].map(initParticle)
    // Let's get the party started!
    move()

    // Listen for window resizing.
    window.addEventListener("resize", reset)
    return () => window.removeEventListener("resize", reset)
  }, [count])

  return (
    <>
      {Object.values(shapes).map((shape, idx) => (
        <img key={idx} ref={el => (shapesRef.current[idx] = el)} src={shape} className="hidden" />
      ))}
      <canvas ref={canvasRef} aria-label="Particles Canvas" className="top-0 left-0 absolute" />
    </>
  )
}

Particles.propTypes = {
  /**
   * The number of particles to render on the canvas.
   */
  count: PropTypes.number.isRequired
}

Particles.defaultProps = {
  count: 10
}

export default Particles
