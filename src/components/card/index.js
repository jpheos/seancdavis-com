import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames/bind"

import Image from "../image"
import Link from "../link"

import styles from "./styles.module.css"

const Card = ({ description, image, subtitle, theme, title, to }) => {
  const cardClasses = classNames(styles.cardLink, { [styles[`theme_${theme}`]]: theme })

  return (
    <Link to={to} className={cardClasses}>
      <Image filename={image} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{title}</h2>
        {description && (
          <div className="text-gray-dark mt-4" dangerouslySetInnerHTML={{ __html: description }} />
        )}
        {subtitle && (
          <span className="block mt-4 font-sans text-sm text-gray-blue">{subtitle}</span>
        )}
      </div>
    </Link>
  )
}

Card.propTypes = {
  /**
   * Text to display between title and subtitle.
   */
  description: PropTypes.string,
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
   * Adjust font size and image size and location.
   */
  theme: PropTypes.oneOf(["default", "featured", "horizontal"]),
  /**
   * Main heading on the card.
   */
  title: PropTypes.string.isRequired,
  /**
   * href attribute for wrapping link.
   */
  to: PropTypes.string.isRequired
}

Card.defaultProps = {}

export default Card