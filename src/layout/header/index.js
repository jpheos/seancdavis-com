import React from "react"
// import PropTypes from "prop-types"
import { Link } from "gatsby"

import styles from "./styles.module.css"

import Button from "../../components/button"
import Logo from "../../components/logo"

const Header = () => (
  <header className="py-4">
    <div className="container flex justify-between items-center">
      <Link to="/">
        <Logo className="h-12" />
      </Link>
      <ul className="flex items-center space-x-4">
        <li>
          <Link className={styles.headerLink} activeClassName={styles.active} to="/">
            Item
          </Link>
        </li>
        <li>
          <Link className={styles.headerLink} activeClassName={styles.active} to="/blah">
            Item
          </Link>
        </li>
        <li>
          <Link className={styles.headerLink} activeClassName={styles.active} to="/blergh">
            Item
          </Link>
        </li>
        <li>
          <Link className={styles.headerLink} activeClassName={styles.active} to="/okay">
            Item
          </Link>
        </li>
        <li>
          <Button to="/" theme="outline">
            CTA Item
          </Button>
        </li>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  /**
   * Contents of the page or template to render.
   */
  // children: PropTypes.node.isRequired
}

Header.defaultProps = {}

export default Header
