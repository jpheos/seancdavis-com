import React from "react"

import config from "../../content/config/header"

import Link from "../../components/link"
import Logo from "../../components/logo"

import DesktopNav from "./desktop-nav"
import MobileNav from "./mobile-nav"

const Header = () => (
  <header className="py-4 relative z-10">
    <div className="container flex justify-between items-center">
      {/* Logo */}
      <Link to="/">
        <Logo className="h-12" />
      </Link>
      {/* Desktop links */}
      <DesktopNav links={config.links} />
      {/* Mobile trigger, header, and links */}
      <MobileNav links={config.links} />
    </div>
  </header>
)

Header.propTypes = {}

Header.defaultProps = {}

export default Header
