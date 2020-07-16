import React from "react"
import { graphql } from "gatsby"

import SEO from "components/seo"

import PageTemplateDefault from "./default"
import PageTemplateHome from "./home"

const layoutMap = {
  default: PageTemplateDefault,
  home: PageTemplateHome
}

const PageTemplateAdapter = ({ data, location }) => {
  let page = {
    ...data.page.frontmatter,
    ...data.page
  }

  const TemplateTagName = layoutMap[page.layout || "default"]

  return (
    <TemplateTagName {...page}>
      <SEO {...page.seo} location={location} />
    </TemplateTagName>
  )
}

PageTemplateAdapter.propTypes = {}

PageTemplateAdapter.defaultProps = {}

export const query = graphql`
  query PageTemplateAdapterQuery($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      id
      body: html
      frontmatter {
        seo {
          ...SeoAttributes
        }
        bio {
          body
          heading
          subheading
        }
        callout {
          heading
          subheading
          button {
            label
            url
          }
        }
        heading
        intro {
          body
          heading
          social_links {
            icon
            url
          }
          subheading
        }
        jumbotron {
          typewriter_text
        }
        layout
        path
        subheading
        title
      }
    }
  }
`

export default PageTemplateAdapter
