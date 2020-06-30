import React from "react"
// import { Link } from "gatsby"
import lodash from "lodash"

import Layout from "../layout"

import Button from "../components/button"
import Icon from "../components/icon"
import Image from "../components/image"
import Link from "../components/link"
import Particles from "../components/particles"
import Typewriter from "../components/typewriter"
// import SEO from "../components/seo"

import styles from "./styles.module.css"

import laptopGraphic from "../images/laptop-graphic.svg"
import laptopLines from "../images/laptop-lines.svg"

const IndexPage = () => {
  let hats = lodash.shuffle([
    "(aspiring) Breadmaker?",
    "Developer.",
    "Father.",
    "... has no idea what he's doing.",
    "Husband.",
    "... is balding.",
    "Nerd.",
    "(former) Podcaster.",
    "Speaker.",
    "Teacher.",
    "Tinkerer.",
    "Weirdo.",
    "Writer."
  ])

  const socialLinks = [
    {
      icon: "circle",
      url: "https://twitter.com/seancdavis29"
    },
    {
      icon: "circle",
      url: "https://github.com/seancdavis"
    }
  ]

  return (
    <Layout>
      {/* Jumbotron */}
      <div className={styles.jumbotron}>
        <Particles count={15} />
        <div className="flex container items-center relative">
          <div className="max-w-lg mr-16">
            <h1 className={styles.jumbotron_heading}>
              <span>Sean</span>
              <span>C Davis.</span>
            </h1>
            <p className="text-4xl">
              <Typewriter texts={hats} />
            </p>
          </div>
          <div className={styles.jumbotron_image}>
            <Image filename="fpo-image.jpg" />
          </div>
        </div>
      </div>

      {/* --- About Intro --- */}

      <div className={styles.about_intro} style={{ backgroundImage: `url(${laptopGraphic})` }}>
        <div
          className={styles.about_intro_bg_lines}
          style={{ backgroundImage: `url(${laptopLines})` }}
        />
        <div className="container py-24 max-w-4xl">
          <div className="max-w-md">
            <h3 className="font-sans font-bold uppercase mb-2 text-green text-sm">About Me</h3>
            <h2 className="text-5xl leading-tight mb-4">Snappy headline about yourself</h2>
            <p className="text-xl mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus odio justo, aliquam
              non vulputate. Lorem ipsum sil dolor rhoncus amet fili sed erimus alta laguna.
            </p>
            <div>
              {socialLinks.map((link, idx) => (
                <Link
                  key={idx}
                  to={link.url}
                  className="inline-block mr-4 hover:opacity-75 transition-all duration-300"
                >
                  <Icon name="circle" theme="bgCircle" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
