import React, { useState } from "react"
// import PropTypes from "prop-types"
import classNames from "classnames/bind"
import lodash from "lodash"

import styles from "./styles.module.css"

import config from "../../content/config/header"

import Button from "../../components/button"
import Link from "../../components/link"
import Logo from "../../components/logo"

// TODO: Separate mobile and desktop menus as their own components.

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
          {config.links.map((link, idx) => (
            <li key={idx}>
              {lodash.get(link, "theme.desktop") ? (
                <Button to={link.url} theme={lodash.get(link, "theme.desktop")}>
                  {link.label}
                </Button>
              ) : (
                <Link className={styles.desktopLink} activeClassName={styles.active} to={link.url}>
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* --- Mobile Menu Trigger --- */}

        <button onClick={handleMenuTriggerClick} className="lg:hidden">
          menu
        </button>

        {/* --- Mobile Menu --- */}

        <div className={classNames(styles.mobileMenu, { [styles.active]: menuActive })}>
          <div className={`container ${styles.mobileHeader}`}>
            <Link to="/">
              <Logo className="h-12" theme="white" />
            </Link>
            <button onClick={handleMenuTriggerClick} className="text-white">
              close
            </button>
          </div>
          <ul className={`container ${styles.mobileLinkList}`}>
            {config.links.map((link, idx) => (
              <li key={idx}>
                {lodash.get(link, "theme.mobile") ? (
                  <Button to={link.url} theme={lodash.get(link, "theme.mobile")}>
                    {link.label}
                  </Button>
                ) : (
                  <Link className={styles.mobileLink} activeClassName={styles.active} to={link.url}>
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
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
