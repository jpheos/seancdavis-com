import React from "react"
import PropTypes from "prop-types"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Helmet } from "react-helmet"

import { getParentDir, getTitle } from "../../helpers"

const ComponentsPlayground = ({ pageContext }) => {
  const components = pageContext.components.map((comp, idx) => (
    <div key={idx} className="mb-16">
      <h2 id={getParentDir(comp.fileAbsolutePath)} className="text-2xl mb-2">
        <a href={`#${getParentDir(comp.fileAbsolutePath)}`}>{getTitle(comp)}</a>
      </h2>
      <MDXRenderer>{comp.body}</MDXRenderer>
    </div>
  ))

  return (
    <div className="bg-gray-light py-12">
      <div className="container">
        <Helmet>
          <title>Components | Ample Playground</title>
        </Helmet>
        {components}
      </div>
    </div>
  )
}

ComponentsPlayground.propTypes = {
  data: PropTypes.shape({
    components: PropTypes.object
  })
}

ComponentsPlayground.defaultProps = {}

export default ComponentsPlayground
