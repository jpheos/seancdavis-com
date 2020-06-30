import React from "react"

import config from "../../content/config/footer"

import Link from "../../components/link"
import Logo from "../../components/logo"

const Footer = () => {
  return (
    <div className="bg-black text-white py-12">
      <div className="container max-w-4xl md:flex justify-between text-center md:text-left">
        <div className="md:max-w-xs mb-8">
          <Link to="/" className="inline-block w-12 mb-4">
            <Logo theme="white" />
          </Link>
          <p
            className="text-sm max-w-sm mx-auto md:mx-0"
            dangerouslySetInnerHTML={{ __html: config.body }}
          />
        </div>
        <div className="md:flex">
          {config.menus.map(({ heading, links }, idx) => (
            <div key={idx} className={`md:ml-8 ${idx + 1 < config.menus.length ? "mb-8" : ""}`}>
              <span className="block mb-2 font-sans uppercase font-bold text-xs opacity-50">
                {heading}
              </span>
              <ul>
                {links.map((link, idx) => (
                  <li className={`block ${idx + 1 < links.length ? "mb-1" : ""}`} key={idx}>
                    <Link
                      className="text-white hover:opacity-75 transition-all duration-300"
                      to={link.url}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

Footer.propTypes = {}

Footer.defaultProps = {}

export default Footer
