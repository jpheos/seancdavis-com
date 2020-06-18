import React from "react"
import PropTypes from "prop-types"
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"

import { getParentDir, getTitle } from "../../helpers"

// ---------------------------------------- | Component

const TemplateList = ({ pageContext }) => {
  const getTmplUrl = tmpl => `/${pageContext.pathPrefix}/${getParentDir(tmpl.fileAbsolutePath)}`

  const templates = pageContext.templates.map((tmpl, idx) => (
    <li key={idx}>
      <Link to={getTmplUrl(tmpl)}>{getTitle(tmpl)}</Link>
    </li>
  ))

  return (
    <div className="list-none">
      <Helmet>
        <title>Templates List | Ample Playground</title>
      </Helmet>
      <h1>Available Templates</h1>
      <ul>{templates}</ul>
    </div>
  )
}

TemplateList.propTypes = {
  /**
   * Object sent from gatsby-node.js
   */
  pageContext: PropTypes.shape({
    pathPrefix: PropTypes.string.isRequired,
    templates: PropTypes.arrayOf(PropTypes.object).isRequired
  }).isRequired
}

TemplateList.defaultProps = {}

export default TemplateList
