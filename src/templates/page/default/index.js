import React from "react"
import PropTypes from "prop-types"

import Layout from "layout"

const PageTemplateDefault = ({ body, children, heading, subheading }) => {
  return (
    <Layout>
      {children}

      <div className="py-24">
        <div className="container max-w-4xl">
          <h1 className="text-4xl">{heading}</h1>
          {subheading && <p className="text-2xl">{subheading}</p>}
        </div>
      </div>

      <div className="py-24 bg-gray-light">
        <div className="container max-w-4xl">
          <div className="max-w-xl text-lg" dangerouslySetInnerHTML={{ __html: body }} />
        </div>
      </div>
    </Layout>
  )
}

PageTemplateDefault.propTypes = {
  /**
   * The main body of the page.
   */
  body: PropTypes.string.isRequired,
  /**
   * Content injected above the page content.
   */
  children: PropTypes.node,
  /**
   * The primary heading (<h1>).
   */
  heading: PropTypes.string.isRequired,
  /**
   * Paragraph of text below primary heading.
   */
  subheading: PropTypes.string
}

PageTemplateDefault.defaultProps = {}

export default PageTemplateDefault
