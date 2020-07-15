import React from "react"
import { graphql } from "gatsby"

import PageTemplateDefault from "./default"
import PageTemplateHome from "./home"

const layoutMap = {
  default: PageTemplateDefault,
  home: PageTemplateHome
}

const PageTemplateAdapter = ({ data }) => {
  let page = {
    ...data.page.frontmatter,
    ...data.page
  }

  // TODO: Add SEO component here. I brought in the SEO component from the
  // starter and messed with it, but it need some serious love. Consider that in
  // this project I have more control over the values in the markdown files, as
  // I'm not (yet) using a CMS. Don't not prematurely optimize this, but just
  // get it working with sensible defaults, knowing I'll have to touch the
  // codebase any time I'm adjusting content anyways.

  const TemplateTagName = layoutMap[page.layout || "default"]

  return <TemplateTagName {...page} />
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
