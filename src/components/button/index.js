import React from "react"
import PropTypes from "prop-types"

const btnClasses = `
  bg-blue
  duration-300
  font-sans
  hover:bg-blue-dark
  inline-block
  px-8
  py-3
  text-sm
  text-white
  transition-all
  uppercase
`

const Button = ({ children, to }) => (
  <a className={btnClasses} href={to}>
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
