import React from "react"
import PropTypes from "prop-types"
import lodash from "lodash"

import styles from "./styles.module.css"

import Button from "../../../components/button"
import Link from "../../../components/link"

const DesktopLink = link => {
  // If the link has a desktop theme then render it as a button.
  if (lodash.get(link, "theme.desktop")) {
    return (
      <Button to={link.url} theme={lodash.get(link, "theme.desktop")}>
        {link.label}
      </Button>
    )
  }
  // Otherwise, render a typical link.
  return (
    <Link className={styles.desktopLink} activeClassName={styles.active} to={link.url}>
      {link.label}
    </Link>
  )
}

const DesktopNav = ({ links }) => (
  <ul className="items-center space-x-4 hidden lg:flex">
    {links.map((link, idx) => (
      <li key={idx}>
        <DesktopLink {...link} />
      </li>
    ))}
  </ul>
)

DesktopNav.propTypes = {
  /**
   * An array of links to render on desktop screens.
   */
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      theme: PropTypes.string,
      url: PropTypes.string.isRequired
    })
  ).isRequired
}

DesktopNav.defaultProps = {}

export default DesktopNav
