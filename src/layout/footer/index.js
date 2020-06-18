import React from "react"

import config from "../../content/config/footer"

import Link from "../../components/link"
import Logo from "../../components/logo"

const Footer = () => {
  console.log(config)
  return (
    <div className="bg-black text-white py-12">
      <div className="container flex">
        <div className="max-w-xs">
          <Link to="/">
            <Logo theme="white" className="w-12 mb-8" />
          </Link>
          <p className="text-sm" dangerouslySetInnerHTML={{ __html: config.body }} />
        </div>
        <div>Menus go here</div>
      </div>
    </div>
  )
}

Footer.propTypes = {}

Footer.defaultProps = {}

export default Footer
