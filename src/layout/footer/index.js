import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import lodash from "lodash"

import layouts from "./layouts"

const Footer = ({ layout }) => {
  const { config } = useStaticQuery(graphql`
    query {
      config: markdownRemark(fileAbsolutePath: { regex: "//src/content/config/footer.md$/" }) {
        body: html
        frontmatter {
          menus {
            heading
            links {
              label
              url
            }
          }
        }
      }
    }
  `)

  const { body } = config
  const { menus } = lodash.get(config, "frontmatter") || []

  const TagName = layouts[layout]

  return <TagName body={body} menus={menus} />
}

Footer.propTypes = {
  /**
   * The footer layout to use, which determines the styles. Layouts are nested
   * in the layouts directory.
   */
  layout: PropTypes.string
}

Footer.defaultProps = {
  layout: "default"
}

export default Footer
