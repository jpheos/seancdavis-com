import React from "react"
import PropTypes from "prop-types"
import icons from "./icons"
import classNames from "classnames"

import styles from "./styles.module.css"

const Icon = ({ className, name }) => {
  return <span className={classNames(className, styles.icon)}>{icons[name]}</span>
}

Icon.propTypes = {
  /**
   * Pass className attribute on to the wrapping element.
   */
  className: PropTypes.string,
  /**
   * Specifies the name of the icon.
   */
  name: PropTypes.string.isRequired
}

Icon.defaultProps = {}

export default Icon
