import React from "react"
import PropTypes from "prop-types"

import Image from "../image"

const Card = ({ image, title, subtitle }) => {
  return (
    <div className="hover:scale-105 transition-all duration-300 transform">
      <Image filename={image} className="w-full" />
      <div className="bg-white p-4">
        <h2 className="text-xl">{title}</h2>
        {subtitle && (
          <span className="block mt-4 font-sans text-sm text-gray-blue">{subtitle}</span>
        )}
      </div>
    </div>
  )
}

Card.propTypes = {
  /**
   * Filename of the image to use. Passed on to <Image /> component as the
   * filename prop.
   */
  image: PropTypes.string.isRequired,
  /**
   * Subtitle placed at the bottom of the card.
   */
  subtitle: PropTypes.string,
  /**
   * Main heading on the card.
   */
  title: PropTypes.string.isRequired
}

Card.defaultProps = {}

export default Card
