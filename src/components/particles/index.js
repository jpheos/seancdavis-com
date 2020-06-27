import React, { useEffect, useRef } from "react"
import lodash from "lodash"

const Particles = () => {
  const canvasRef = useRef()
  // const wrapperRef = useRef()

  useEffect(() => {
    let canvas = canvasRef.current

    const parentElement = canvas.parentElement
    parentElement.style.position = "relative"

    const canvasHeight = parentElement.clientHeight
    const canvasWidth = parentElement.clientWidth

    canvas.setAttribute("height", canvasHeight)
    canvas.setAttribute("width", canvasWidth)

    let context = canvas.getContext("2d")

    const drawDot = ({ fill, position, radius }) => {
      context.beginPath()
      context.arc(position.x, position.y, radius, 0, 2 * Math.PI, false)
      context.fillStyle = fill
      context.fill()
    }

    const randomNum = (min, max) => Math.floor(Math.random() * max) + min

    const randomSpeed = () => lodash.sample([...Array(10)].map((n, i) => i * 0.025))

    const initDot = () => {
      const radius = 5

      return {
        fill: "#F03C69",
        move: {
          x: lodash.sample(["+", "-"]),
          y: lodash.sample(["+", "-"])
        },
        position: {
          x: randomNum(radius, canvasWidth - radius),
          y: randomNum(radius, canvasHeight - radius)
        },
        radius: radius,
        speed: {
          x: randomSpeed(),
          y: randomSpeed()
        }
      }
    }

    let dots = [...Array(10)].map(initDot)

    const move = () => {
      context.clearRect(0, 0, canvasWidth, canvasHeight)

      dots.map(dot => {
        dot.position.x =
          dot.move.x === "+" ? dot.position.x + dot.speed.x : dot.position.x - dot.speed.x
        dot.position.y =
          dot.move.y === "+" ? dot.position.y + dot.speed.y : dot.position.y - dot.speed.y

        if (dot.position.x + dot.radius >= canvasWidth) dot.move.x = "-"
        if (dot.position.x - dot.radius <= 0) dot.move.x = "+"
        if (dot.position.y + dot.radius >= canvasHeight) dot.move.y = "-"
        if (dot.position.y - dot.radius <= 0) dot.move.y = "+"

        return drawDot(dot)
      })

      window.requestAnimationFrame(move)
    }

    move()
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-label="Particles Canvas"
      className="h-full w-full top-0 left-0 absolute"
    />
  )
}

Particles.propTypes = {}

Particles.defaultProps = {}

export default Particles
