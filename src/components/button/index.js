import React from "react"
import PropTypes from "prop-types"

import styles from "./styles.module.css"

const Button = ({ children, to }) => (
  <a className={styles.button} href={to}>
    {children}
  </a>
)

Button.propTypes = {
  /**
   * Content within the button.
   */
  children: PropTypes.node.isRequired,
  /**
   * Where the button should link.
   */
  to: PropTypes.string.isRequired
}

Button.defaultProps = {}

export default Button
