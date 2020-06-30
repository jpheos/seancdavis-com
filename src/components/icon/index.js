import React from "react"
import PropTypes from "prop-types"
import icons from "./icons"

import styles from "./styles.module.css"

const Icon = ({ name }) => {
  return <span className={styles.icon}>{icons[name]}</span>
}

Icon.propTypes = {
  /**
   * Specifies the name of the icon.
   */
  name: PropTypes.string.isRequired
}

Icon.defaultProps = {}

export default Icon
