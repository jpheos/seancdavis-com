import React, { useEffect, useRef } from "react"
import PropTypes from "prop-types"

const Particle = ({ shape, size }) => {}

Particle.propTypes = {
  /**
   * The variation to be rendered.
   */
  shape: PropTypes.oneOf(["circle", "scd", "triangle"]).isRequired
  /**
   * The size of the
   */
}

Particles.defaultProps = {
  shape: "circle"
}

export default Particles
