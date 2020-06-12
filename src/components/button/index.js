import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames/bind"

import styles from "./styles.module.css"

const Button = ({ children, theme, to }) => (
  <a className={classNames(styles.button, styles[`theme_${theme}`])} href={to}>
    {children}
  </a>
)

Button.propTypes = {
  /**
   * Content within the button.
   */
  children: PropTypes.node.isRequired,
  /**
   * Controls the colors of the button.
   */
  theme: PropTypes.oneOf(["default", "outline"]),
  /**
   * Where the button should link.
   */
  to: PropTypes.string.isRequired
}

Button.defaultProps = {}

export default Button
