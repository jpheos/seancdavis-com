import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import is from "is_js"

import Layout from "layout"
import ReaderView from "layout/reader-view"

const PageTemplateDefault = ({ body, children, heading, subheading }) => {
  const [isIe, setIsIe] = useState(false)

  useEffect(() => {
    // Don't do anything if we don't have access to the window.
    if (typeof window === "undefined") return
    // If using IE, set the state appropriately.
    if (is.ie()) setIsIe(true)
  }, [])

  if (isIe) {
    return (
      <ReaderView title={heading} body={body}>
        {children}
      </ReaderView>
    )
  }

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
