import React from "react"
// import PropTypes from "prop-types"
import { Link } from "gatsby"

import Button from "../../components/button"
import Logo from "../../components/logo"

const Header = () => (
  <header className="py-4">
    <div className="container flex justify-between items-center">
      <Link to="/">
        <Logo className="h-1" />
      </Link>
      <ul className="flex items-center space-x-4">
        <li>
          <Link
            className="uppercase font-sans font-normal text-gray-blue p-2 border-b text-sm"
            activeClassName="border-gray-blue"
            to="/"
          >
            Item
          </Link>
        </li>
        <li>
          <Link
            className="uppercase font-sans font-normal text-gray-blue p-2 border-b text-sm"
            activeClassName="border-gray-blue"
            to="/"
          >
            Item
          </Link>
        </li>
        <li>
          <Link
            className="uppercase font-sans font-normal text-gray-blue p-2 border-b text-sm"
            activeClassName="border-gray-blue"
            to="/"
          >
            Item
          </Link>
        </li>
        <li>
          <Link
            className="uppercase font-sans font-normal text-gray-blue p-2 border-b text-sm"
            activeClassName="border-gray-blue"
            to="/"
          >
            Item
          </Link>
        </li>
        <li>
          <Button to="/">CTA Item</Button>
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
