import React from "react"
import PropTypes from "prop-types"

import "normalize.css"
import "./styles.module.css"

const Layout = ({ children }) => <>{children}</>

Layout.propTypes = {
  /**
   * Contents of the page or template to render.
   */
  children: PropTypes.node.isRequired
}

Layout.defaultProps = {}

export default Layout
