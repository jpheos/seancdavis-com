import React from "react"
import { graphql, StaticQuery } from "gatsby"
import GatsbyImage from "gatsby-image"
import PropTypes from "prop-types"
import lodash from "lodash"

const Image = ({ filename }) => {
  return (
    <StaticQuery
      query={graphql`
        query ImageComponentQuery {
          images: allFile(filter: { absolutePath: { regex: "//src/images//" } }) {
            edges {
              node {
                filename: relativePath
                ...FluidImageAttributes
              }
            }
          }
        }
      `}
      render={data => {
        const images = data.images.edges.map(({ node }) => node)
        const image = images.filter(img => img.filename === filename)[0]
        if (!lodash.get(image, "childImageSharp.fluid")) return null
        return <GatsbyImage fluid={image.childImageSharp.fluid} />
      }}
    />
  )
}

Image.propTypes = {
  /**
   * Name of the file to pull from the static query results.
   */
  filename: PropTypes.string.isRequired
}

Image.defaultProps = {}

export default Image
