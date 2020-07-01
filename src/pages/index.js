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
      icon: "twitter",
      url: "https://twitter.com/seancdavis29"
    },
    {
      icon: "github",
      url: "https://github.com/seancdavis"
    },
    {
      icon: "linkedin",
      url: "https://www.linkedin.com/in/sean-c-davis-a143822a/"
    }
  ]

  return (
    <Layout>
      {/* Jumbotron */}
      <div className={styles.jumbotron}>
        <Particles count={15} />
        <div className="flex container items-center relative justify-between max-w-5xl">
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
            <h3 className="subheading">About Me</h3>
            <h2 className="section-heading">Snappy headline about yourself</h2>
            <p className="md:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus odio justo, aliquam
              non vulputate. Lorem ipsum sil dolor rhoncus amet fili sed erimus alta laguna.
            </p>
            <div>
              {socialLinks.map((link, idx) => (
                <Link key={idx} to={link.url} className={styles.about_intro_icon}>
                  <Icon name={link.icon} theme="bgCircle" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- Callout --- */}

      <div className="bg-gray-dark text-white">
        <div className="container py-6 max-w-4xl text-center md:text-left">
          <div className="md:flex justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-3xl">Inspired</h3>
              <p className="text-xl">lorem ipsum sil dolor rhoncus amet fili sed.</p>
            </div>
            <div>
              <Button to="/" theme="lime">
                Do Something
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* --- Quick Bio --- */}

      <div className="bg-gray-light">
        <div className="container py-24 max-w-4xl">
          <div className="grid col-gap-4 sm:grid-cols-2">
            <div>
              <h3 className="subheading">About Me</h3>
              <h2 className="section-heading">Articles &amp; Thought Pieces</h2>
            </div>
          </div>
          <div className="grid col-gap-4 md:grid-cols-2 max-w-xl md:max-w-none">
            <div className="mb-4 md:mb-0">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi est cumque ut,
                voluptates tenetur accusantium vitae hic quae, aspernatur omnis, nesciunt
                praesentium quo vero optio excepturi dicta sequi eius beatae.
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi est cumque ut,
                voluptates tenetur accusantium vitae hic quae, aspernatur omnis, nesciunt
                praesentium quo vero optio excepturi dicta sequi eius beatae.
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi est cumque ut,
                voluptates tenetur accusantium vitae hic quae, aspernatur omnis, nesciunt
                praesentium quo vero optio excepturi dicta sequi eius beatae.
              </p>
            </div>
            <div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi est cumque ut,
                voluptates tenetur accusantium vitae hic quae, aspernatur omnis, nesciunt
                praesentium quo vero optio excepturi dicta sequi eius beatae.
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi est cumque ut,
                voluptates tenetur accusantium vitae hic quae, aspernatur omnis, nesciunt
                praesentium quo vero optio excepturi dicta sequi eius beatae.
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi est cumque ut,
                voluptates tenetur accusantium vitae hic quae, aspernatur omnis, nesciunt
                praesentium quo vero optio excepturi dicta sequi eius beatae.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
