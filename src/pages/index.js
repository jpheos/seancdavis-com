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
            <h3 className="subheading">Nice to meet you</h3>
            <h2 className="section-heading">Hi, I'm Sean.</h2>
            <p className="md:text-xl">
              I'm a tinkerer and a teacher. I'm driven to learn as much as I can as fast as I can,
              and then to pass those learnings onto those who may find them beneficial.
            </p>
            <p className="md:text-xl">
              I like long walks in the woods. I also like talking about the web. Meeting new people
              is fun, too! Maybe we should chat.
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
              <h3 className="text-3xl">Rather write an email?</h3>
              <p className="text-xl max-w-md">
                I can do that, too. But I'm not very good at checking it. Maybe you should make it
                rhyme.
              </p>
            </div>
            <div>
              <Button to="mailto:hello@seancdavis.com" theme="lime">
                Email me
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
              <h2 className="section-heading">A Day in the Life</h2>
            </div>
          </div>
          <div className="grid col-gap-4 md:grid-cols-2 max-w-xl md:max-w-none">
            <div className="mb-4 md:mb-0">
              <p>
                This rubber thing that sits atop an awkward tan line on my wrist starts buzzing at
                5:00 AM every morning.
              </p>
              <p>
                Most mornings I listen to it and pop right out of bed, already anxious to get to the
                computer. But first, of course, there's weighing myself (to assure myself that I'm
                still 40 pounds less than I was two years ago), letting the dog out, and making a
                cup of decaf coffee (you know, to wake me up).
              </p>
              <p>
                While soaking the rare quiet moments on a busy street near the city, I head up to my
                office to do what I love — <em>tinker</em> and <em>teach</em>.
              </p>
              <p>
                I'll spend the next hour <em>teaching</em> —{" "}
                <Link to="https://cobwwweb.com/">
                  writing (or editing a video) about some web development topic
                </Link>{" "}
                I want to share with the world. The hour after that is when I <em>tinker</em>. I
                learn by creating something new, providing fodder for tomorrow's writing session.
              </p>
              <p>
                That's about the time my toddler begins to rise from her glorious, 12-hour slumber
                to fill the quiet space with some new sound I hadn't known before. I use that as my
                alarm clock — a cue to transition to the part of the day normal people are awake.
              </p>
              <p>
                The kid and I get dressed and walk together to daycare. I leave her with a hug and a
                hope that she'll enjoy this day more than I will, and set off for a long detour
                before I get home, popping on an audio book or calling a loved one while traversing
                the busy neighborhood streets.
              </p>
            </div>
            <div>
              <p>
                After breakfast, I start the part of the day someone pays me for, in which I act as
                Director of Technology for <Link to="https://www.helloample.com/">Ample</Link>. I'm
                likely to spend most of my day exploring how to build{" "}
                <Link to="https://cobwwweb.com/wtf-is-jamstack">Jamstack</Link> websites with
                efficiency and excellence, driving my team to find that perfect balance between
                quality and speed. Either that or I have 8 straight hours of meetings.
              </p>
              <p>
                The end of the workday often comes with accompanying my wife on another stroll up
                the street, this time to get the girl from daycare. That's the best part of most
                days, because there's no agenda for the evenings. We just have to make sure we feed
                that screaming monster at some point. And I suppose she has to be bathed
                occasionally. But otherwise, that time is ours. Not to create. Not to teach. To have
                fun.
              </p>
              <p>
                But then we put the noise machine to bed and I'm off to do something else. Maybe
                it's a quiet night and I'll read a book. Or maybe I'll dig into another hobby, like
                playing music, baking bread, writing fiction, or growing plants from seed.
              </p>
              <p>
                When most days look like this one, I head to bed, exhausted and content, but never
                satisfied. Because tomorrow I get to wake up and do it all over again, hopefully
                better than today. So I take a moment to write a few words about the day, noting the
                wins I achieved, what I'm thankful for, and what I want to tomorrow to bring.
              </p>
              <p>
                And as I drift off to sleep, thinking about the day, one idea remains, more
                important than the rest. That in the midst of all the work I did throughout the day
                — everything that drained the energy from me — that I had a little fun along the
                way.
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
