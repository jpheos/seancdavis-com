import React from "react"
import PropTypes from "prop-types"

import "normalize.css"
import "../styles.css"

import Footer from "layout/footer"

import Link from "components/link"

const Layout = ({ body, children, title }) => (
  <>
    {children}

    <div className="container max-w-2xl mt-12">
      <div className="bg-yellow p-4 mb-8">
        <p>
          Your browser is not supported. You are seeing a stripped down version of this website. For
          the full experience, please upgrade to a modern browser like{" "}
          <Link className="text-black underline" to="https://www.google.com/chrome/">
            Chrome
          </Link>{" "}
          or{" "}
          <Link className="text-black underline" to="https://www.mozilla.org/en-US/firefox/">
            Firefox
          </Link>
          .
        </p>
      </div>

      <h1 className="text-4xl mb-4">{title}</h1>
      <div className="mb-12 links-underline" dangerouslySetInnerHTML={{ __html: body }} />

      <hr className="border-gray-light" />
    </div>

    <Footer layout="reader" />
  </>
)

Layout.propTypes = {
  /**
   * Main content on the page.
   */
  body: PropTypes.string,
  /**
   * Contents of the page or template to render.
   */
  children: PropTypes.node.isRequired,
  /**
   * Main heading on the page.
   */
  title: PropTypes.string
}

Layout.defaultProps = {}

export default Layout
