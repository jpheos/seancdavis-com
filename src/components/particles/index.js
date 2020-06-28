import React, { useEffect, useRef } from "react"
import PropTypes from "prop-types"
import lodash from "lodash"

const Particles = ({ count }) => {
  // A reference to the canvas HTML element.
  const canvasRef = useRef()

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
    // Set the parent element's position to relative so that we can get its
    // dimensions and then set the canvas's dimension to match.
    const parentElement = canvas.parentElement
    parentElement.style.position = "relative"
    // Find the parent element's dimensions and store them as references. (We
    // use them during the animation process.)
    const canvasHeight = parentElement.clientHeight
    const canvasWidth = parentElement.clientWidth
    // Set the canvas width and height explicitly as attributes on the object.
    // This is necessary for getting the particles to rendering properly.
    canvas.setAttribute("height", canvasHeight)
    canvas.setAttribute("width", canvasWidth)
    // This is the context on which we draw.
    let context = canvas.getContext("2d")

    /**
     * Uses the parameters its given to render a particle to the canvas.
     */
    const drawParticle = ({ fill, position, radius }) => {
      context.globalAlpha = 0.9
      context.beginPath()
      context.arc(position.x, position.y, radius, 0, 2 * Math.PI, false)
      context.fillStyle = fill
      context.fill()
    }

    /**
     * Creates a particle object, which holds its properties. These are used to
     * draw the particle's style and position. It also controls its speed, so
     * all particles move at different rates around the canvas.
     */
    const initParticle = () => {
      // TODO: Make the particles and their colors random or configurable. For
      // now the the particles all all uniform.
      const radius = 5

      return {
        fill: "#F03C69",
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
          x: lodash.random(0.01, 0.25),
          y: lodash.random(0.01, 0.25)
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

    // Create the array of particles.
    let particles = [...Array(count)].map(initParticle)

    // Begin moving the particles.
    move()
  }, [count])

  return <canvas ref={canvasRef} aria-label="Particles Canvas" className="top-0 left-0 absolute" />
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
