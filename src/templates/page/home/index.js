import React from "react"
import PropTypes from "prop-types"
import lodash from "lodash"

import Layout from "layout"

import Button from "components/button"
import Icon from "components/icon"
import Image from "components/image"
import Link from "components/link"
import Particles from "components/particles"
import Typewriter from "components/typewriter"

import styles from "./styles.module.css"

import laptopGraphic from "../../../images/laptop-graphic.svg"
import laptopLines from "../../../images/laptop-lines.svg"

const PageTemplateHome = ({ bio, callout, children, heading, intro, jumbotron }) => {
  return (
    <Layout>
      {children}

      {/* --- Jumbotron --- */}
      <div className={styles.jumbotron}>
        <Particles count={15} />
        <div className="container max-w-5xl">
          <div className="flex container items-center relative justify-between max-w-5xl">
            <div className="max-w-lg mr-16">
              <h1 className={styles.jumbotron_heading}>
                {heading.split("/").map((h, i) => (
                  <span key={i}>{h}</span>
                ))}
              </h1>
              <p className="text-2xl sm:text-3xl md:text-4xl">
                <Typewriter texts={lodash.shuffle(lodash.get(jumbotron, "typewriter_text"))} />
              </p>
            </div>
            <div className={styles.jumbotron_image}>
              <Image filename="fpo-image.jpg" />
            </div>
          </div>
        </div>
      </div>

      {/* --- About Intro --- */}

      <div className="relative">
        <div
          className={styles.about_intro_bg_laptop}
          style={{ backgroundImage: `url(${laptopGraphic})` }}
        />
        <div
          className={styles.about_intro_bg_lines}
          style={{ backgroundImage: `url(${laptopLines})` }}
        />
        <div className="container py-24 max-w-4xl relative">
          <div className="max-w-md">
            {lodash.get(intro, "subheading") && <h3 className="subheading">{intro.subheading}</h3>}
            {lodash.get(intro, "heading") && <h2 className="section-heading">{intro.heading}</h2>}
            {lodash.get(intro, "body") && (
              <div className="md:text-xl" dangerouslySetInnerHTML={{ __html: intro.body }} />
            )}
            {(lodash.get(intro, "social_links") || []).length > 0 && (
              <div className="mt-4">
                {intro.social_links.map((link, idx) => (
                  <Link key={idx} to={link.url} className={styles.about_intro_icon}>
                    <Icon name={link.icon} theme="bgCircle" />
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* --- Callout --- */}

      <div className="bg-gray-dark text-white">
        <div className="container py-6 max-w-4xl text-center md:text-left">
          <div className="md:flex justify-between items-center">
            <div className="mb-4 md:mb-0">
              {lodash.get(callout, "heading") && (
                <h3 className="text-2xl md:text-3xl">{callout.heading}</h3>
              )}
              {lodash.get(callout, "subheading") && (
                <p className="md:text-lg md:text-xl max-w-md mx-auto">{callout.subheading}</p>
              )}
            </div>
            {lodash.get(callout, "button") && (
              <div>
                <Button to={callout.button.url} theme="lime">
                  {callout.button.label}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* --- Quick Bio --- */}

      <div className="bg-gray-light">
        <div className="container py-24 max-w-4xl">
          <div className="grid col-gap-4 sm:grid-cols-2">
            <div>
              {lodash.get(bio, "subheading") && <h3 className="subheading">{bio.subheading}</h3>}
              {lodash.get(bio, "heading") && <h2 className="section-heading">{bio.heading}</h2>}
            </div>
          </div>
          {lodash.get(bio, "body") && (
            <div className={styles.bio_body}>
              <div dangerouslySetInnerHTML={{ __html: bio.body }} />
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}

PageTemplateHome.propTypes = {
  /**
   * Attributes for the bio section.
   */
  bio: PropTypes.shape({
    body: PropTypes.string,
    heading: PropTypes.string,
    subheading: PropTypes.string
  }).isRequired,
  /**
   * Attributes for the callout section.
   */
  callout: PropTypes.shape({
    button: PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    }),
    heading: PropTypes.string,
    subheading: PropTypes.string
  }).isRequired,
  /**
   * Content injected above the page content.
   */
  children: PropTypes.node,
  /**
   * The primary page heading. It is split at "/" characters.
   */
  heading: PropTypes.string.isRequired,
  /**
   * Attributes for the intro section (below the jumbotron).
   */
  intro: PropTypes.shape({
    body: PropTypes.string,
    heading: PropTypes.string,
    social_links: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
      })
    ).isRequired,
    subheading: PropTypes.string
  }).isRequired,
  /**
   * Attributes for the jumbotron at the top of the page.
   */
  jumbotron: PropTypes.shape({
    typewriter_text: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired
}

PageTemplateHome.defaultProps = {}

export default PageTemplateHome
