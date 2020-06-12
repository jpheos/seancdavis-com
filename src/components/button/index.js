import React from "react"
import PropTypes from "prop-types"

const btnClasses = theme => `
  bg-${theme === "outline" ? "transparent" : "blue"}
  border
  border-blue
  duration-500
  font-sans
  hover:bg-${theme === "outline" ? "blue" : "blue-dark"}
  hover:text-white
  inline-block
  px-8
  py-3
  text-sm
  text-${theme === "outline" ? "blue" : "white"}
  transition-all
  uppercase
`

const Button = ({ children, theme, to }) => (
  <a className={btnClasses(theme)} href={to}>
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
