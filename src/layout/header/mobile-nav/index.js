import React, { useState } from "react"
import PropTypes from "prop-types"
import classNames from "classnames/bind"

import styles from "./styles.module.css"

import Button from "components/button"
import Icon from "components/icon"
import Link from "components/link"
import Logo from "components/logo"

const MobileLink = ({ button, label, url }) => {
  // If the link has a mobile theme then render it as a button.
  if (button) {
    return (
      <Button to={url} theme="white">
        {label}
      </Button>
    )
  }
  // Otherwise, render a typical link.
  return (
    <Link className={styles.mobileLink} activeClassName={styles.active} to={url}>
      {label}
    </Link>
  )
}

const MobileMenu = ({ links }) => {
  const [menuActive, setMenuActive] = useState(false)

  const handleMenuTriggerClick = event => {
    setMenuActive(!menuActive)
  }

  return (
    <>
      <button onClick={handleMenuTriggerClick} className="lg:hidden w-8 text-right">
        <Icon name="menu" className="text-gray-blue h-8 svg-h-full" />
      </button>

      <div className={classNames(styles.mobileMenu, { [styles.active]: menuActive })}>
        {/* Recreate the header when the nav is active */}
        <div className={`container ${styles.mobileHeader}`}>
          <Link to="/">
            <Logo className="h-12" theme="white" />
          </Link>
          <button onClick={handleMenuTriggerClick} className="w-8 text-right opacity-50">
            <Icon name="cancel" className="text-white h-8 svg-h-full" />
          </button>
        </div>
        {/* List of links */}
        <ul className={`container ${styles.mobileLinkList}`}>
          {links.map((link, idx) => (
            <li key={idx}>
              <MobileLink {...link} />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

MobileMenu.propTypes = {
  /**
   * An array of links to render on desktop screens.
   */
  links: PropTypes.arrayOf(
    PropTypes.shape({
      button: PropTypes.bool,
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ).isRequired
}

MobileMenu.defaultProps = {
  active: false
}

export default MobileMenu
