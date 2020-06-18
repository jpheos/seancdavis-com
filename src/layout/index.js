import React from "react"
import PropTypes from "prop-types"

import "normalize.css"
import "./styles.css"

import Footer from "./footer"
import Header from "./header"

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)

Layout.propTypes = {
  /**
   * Contents of the page or template to render.
   */
  children: PropTypes.node.isRequired
}

Layout.defaultProps = {}

export default Layout
