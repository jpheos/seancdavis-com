import React from "react"
import PropTypes from "prop-types"
import icons from "./icons"
import classNames from "classnames"

import styles from "./styles.module.css"

const Icon = ({ name, theme }) => {
  return <span className={classNames(styles.icon, { [styles[theme]]: theme })}>{icons[name]}</span>
}

Icon.propTypes = {
  /**
   * Specifies the name of the icon.
   */
  name: PropTypes.string.isRequired,
  /**
   * Style variation to include.
   */
  theme: PropTypes.oneOf(["default", "bgCircle"])
}

Icon.defaultProps = {
  theme: "default"
}

export default Icon
