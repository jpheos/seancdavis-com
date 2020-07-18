import React from "react"
import PropTypes from "prop-types"

import Link from "components/link"
import Logo from "components/logo"

const FooterReader = ({ body, menus }) => {
  return (
    <div className="container py-12 text-center max-w-lg text-gray-dark">
      <Link to="/" className="inline-block w-12 mb-4">
        <Logo />
      </Link>
      <div className="text-sm links-underline mb-8" dangerouslySetInnerHTML={{ __html: body }} />

      {menus.map(({ heading, links }, idx) => (
        <div key={idx} className={idx + 1 < menus.length ? "mb-8" : ""}>
          <span className="block mb-2 font-sans uppercase font-bold text-xs">{heading}</span>
          <ul>
            {links.map((link, idx) => (
              <li className={`block ${idx + 1 < links.length ? "mb-1" : ""}`} key={idx}>
                <Link className="underline" to={link.url}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

FooterReader.propTypes = {
  /**
   * HTML string to render as the main body of the footer.
   */
  body: PropTypes.string,
  /**
   * An array of menus, which have a heading and a list of links.
   */
  menus: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string,
      links: PropTypes.shape({
        label: PropTypes.string,
        url: PropTypes.string
      })
    })
  )
}

FooterReader.defaultProps = {}

export default FooterReader
