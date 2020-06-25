import React from "react"
import PropTypes from "prop-types"

import styles from "./styles.module.css"

const Typewriter = ({ text }) => {
  return text[0]
}

Typewriter.propTypes = {
  /**
   * An array of text to animate. The first element renders on the page at
   * first, then is deleted, while subsequent text nodes are typed then deleted,
   * and so on.
   */
  text: PropTypes.arrayOf(PropTypes.string).isRequired
}

Typewriter.defaultProps = {
  text: []
}

export default Typewriter
