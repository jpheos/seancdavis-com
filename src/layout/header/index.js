import React, { useState } from "react"
// import PropTypes from "prop-types"
import { Link } from "gatsby"
import classNames from "classnames/bind"

import styles from "./styles.module.css"

import fixture from "./fixture"

import Button from "../../components/button"
import Logo from "../../components/logo"

const Header = () => {
  const [menuActive, setMenuActive] = useState(false)

  const handleMenuTriggerClick = event => {
    setMenuActive(!menuActive)
  }

  return (
    <header className="py-4">
      <div className="container flex justify-between items-center">
        <Link to="/">
          <Logo className="h-12" />
        </Link>

        {/* --- Desktop Menu --- */}

        <ul className="items-center space-x-4 hidden lg:flex">
          {/* Links */}
          {fixture.links.map((link, idx) => (
            <li key={idx}>
              <Link className={styles.desktopLink} activeClassName={styles.active} to={link.url}>
                {link.label}
              </Link>
            </li>
          ))}
          {/* Button */}
          <li>
            <Button to={fixture.button.url} theme="outline">
              {fixture.button.label}
            </Button>
          </li>
        </ul>

        {/* --- Mobile Menu Trigger --- */}

        <button onClick={handleMenuTriggerClick} className="lg:hidden">
          menu
        </button>

        {/* --- Mobile Menu --- */}

        <div className={classNames(styles.mobileMenu, { [styles.active]: menuActive })}>
          <div className={`container ${styles.mobileHeader}`}>
            <Link to="/">
              <Logo className="h-12" />
            </Link>
            <button onClick={handleMenuTriggerClick} className="text-white">
              close
            </button>
          </div>
          <ul className={`container ${styles.mobileLinkList}`}>
            {/* Links */}
            {fixture.links.map((link, idx) => (
              <li key={idx}>
                <Link className={styles.mobileLink} activeClassName={styles.active} to={link.url}>
                  {link.label}
                </Link>
              </li>
            ))}
            {/* Button */}
            <li>
              <Button to={fixture.button.url} theme="outline_white">
                {fixture.button.label}
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  /**
   * Contents of the page or template to render.
   */
  // children: PropTypes.node.isRequired
}

Header.defaultProps = {}

export default Header
