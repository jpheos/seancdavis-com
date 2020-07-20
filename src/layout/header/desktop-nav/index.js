import React from "react"
import PropTypes from "prop-types"

import styles from "./styles.module.css"

import Button from "../../../components/button"
import Link from "../../../components/link"

const DesktopLink = ({ button, label, url }) => {
  // If the link has a desktop theme then render it as a button.
  if (button) {
    return <Button to={url}>{label}</Button>
  }
  // Otherwise, render a typical link.
  return (
    <Link className={styles.desktopLink} activeClassName={styles.active} to={url}>
      {label}
    </Link>
  )
}

const DesktopNav = ({ links }) => (
  <ul className="items-center space-x-4 hidden lg:flex">
    {links.map((link, idx) => (
      <li key={idx} className="mb-0">
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
      button: PropTypes.bool,
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ).isRequired
}

DesktopNav.defaultProps = {}

export default DesktopNav
