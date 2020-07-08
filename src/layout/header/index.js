import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import lodash from "lodash"

import Link from "../../components/link"
import Logo from "../../components/logo"

import DesktopNav from "./desktop-nav"
import MobileNav from "./mobile-nav"

const Header = () => {
  const { config } = useStaticQuery(graphql`
    query {
      config: markdownRemark(fileAbsolutePath: { regex: "//src/content/config/header.md$/" }) {
        frontmatter {
          links {
            label
            url
            button
          }
        }
      }
    }
  `)

  const { links } = lodash.get(config, "frontmatter") || []

  return (
    <header className="py-4 relative z-10">
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <Logo className="h-12" />
        </Link>
        {/* Desktop links */}
        <DesktopNav links={links} />
        {/* Mobile trigger, header, and links */}
        <MobileNav links={links} />
      </div>
    </header>
  )
}

Header.propTypes = {}

Header.defaultProps = {}

export default Header
