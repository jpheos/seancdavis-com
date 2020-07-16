import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import lodash from "lodash"

import { component as SEO, transformer as transformData } from "."

const SeoAdapter = props => {
  const queryData = useStaticQuery(graphql`
    {
      settings: markdownRemark(fileAbsolutePath: { regex: "//content/config/seo.md/" }) {
        defaults: frontmatter {
          description
          image {
            ...SeoImageAttributes
          }
          og {
            type
          }
          title
          title_template
          twitter {
            card
          }
        }
      }
    }
  `)

  const data = transformData({
    defaults: lodash.get(queryData, "settings.defaults"),
    props: props
  })

  return <SEO {...data} />
}

const imgPropType = PropTypes.shape({
  childImageSharp: PropTypes.shape({
    fixed: PropTypes.shape({
      src: PropTypes.string
    })
  })
})

SeoAdapter.propTypes = {
  /**
   * Brief description of the current page. Browsers cut this off at 160
   * characters.
   */
  description: PropTypes.string,
  /**
   * A fixed image object for the page. See imgPropType above for the shape.
   */
  image: imgPropType,
  /**
   * The location object of the current page. This comes from Gatsby and is
   * available on any created page.
   */
  location: PropTypes.shape({
    href: PropTypes.string,
    origin: PropTypes.string
  }),
  /**
   * OpenGraph overrides, which fall back to the base props here, and then to
   * site defaults.
   */
  og: PropTypes.shape({
    description: PropTypes.string,
    image: imgPropType,
    title: PropTypes.string,
    type: PropTypes.string
  }),
  /**
   * Twitter overrides, which fall back to OG, then to other props, and then to
   * site defaults.
   */
  twitter: PropTypes.shape({
    card: PropTypes.string,
    description: PropTypes.string,
    image: imgPropType,
    title: PropTypes.string
  }),
  /**
   * Title template gets passed onto React Helmet in the actual component. Here
   * it overrides the global default, which is retrieved via static query.
   */
  title_template: PropTypes.string,
  /**
   * Title of the current page, which is run through the title_template.
   */
  title: PropTypes.string
}

SeoAdapter.defaultProps = {}

export default SeoAdapter

export { transformData }
