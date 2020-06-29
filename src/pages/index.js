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

import jumbotronBg from "../images/bg-jumbotron.svg"

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
      <div className={styles.jumbotron} style={{ backgroundImage: `url(${jumbotronBg})` }}>
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

      <div className="container py-24">
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

      <hr />
      <h1>Hi people</h1>
      <Button to="/">Hello World</Button>
      <p>
        Sint laboris cupidatat nostrud culpa incididunt exercitation. Est mollit dolore in laborum
        in aliquip proident nostrud enim laborum Lorem. Amet aliqua nulla elit consectetur sint enim
        ut. Duis ea ad aliqua aute labore cillum duis eiusmod consequat ullamco nostrud ea culpa.
        Duis deserunt officia et non.
      </p>
      <p>
        Proident ex voluptate commodo qui nisi duis. Tempor velit est pariatur esse occaecat
        incididunt enim irure. Tempor culpa et mollit eu velit nisi velit. Eiusmod duis magna
        eiusmod anim eiusmod. Amet cupidatat in magna incididunt ut pariatur esse. Irure amet
        eiusmod laborum mollit proident quis. Et pariatur laboris cillum nulla duis enim irure ipsum
        ea ex consectetur nostrud.
      </p>
      <p>
        Elit voluptate pariatur cillum magna aliquip consequat. Nulla id voluptate culpa aliqua
        dolore eu adipisicing consequat aliqua laborum sit in. Exercitation eu velit elit proident
        anim excepteur sint aute consectetur anim sit qui. Aliquip fugiat cillum proident ad. Amet
        ut Lorem elit culpa.
      </p>
      <p>
        Enim elit aliquip commodo proident magna. Veniam deserunt et occaecat sunt incididunt fugiat
        veniam consequat officia dolore. Ipsum et laboris veniam id cupidatat in esse do eu. Ullamco
        labore veniam culpa occaecat aute ipsum minim do do. Consectetur cillum occaecat officia
        deserunt irure excepteur sunt. Reprehenderit eu officia do pariatur occaecat ea nisi eiusmod
        magna enim eu anim.
      </p>
    </Layout>
  )
}

export default IndexPage
