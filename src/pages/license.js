import React from "react"

import Layout from "../layout"

import Link from "../components/link"

const LicensePage = () => {
  return (
    <Layout>
      <div className="py-24">
        <div className="container max-w-4xl">
          <h1 className="text-4xl">A License (Sort of)</h1>
          <p className="text-2xl">
            This license governs all content and code found within this site.
          </p>
        </div>
      </div>

      <div className="py-24 bg-gray-light">
        <div className="container max-w-4xl">
          <div className="max-w-xl text-lg">
            <p>
              I thought about copying{" "}
              <Link to="https://css-tricks.com/license/">the CSS-Tricks license</Link>, you know,
              for the irony. But also because it's almost exactly how I feel.
            </p>
            <p>
              As this site grows, I intend for its purpose to remain the same — to inspire and help
              those working with the web. And I don't want some silly, protective license to get in
              the way of that.
            </p>
            <p>
              In fact, I actually <em>want</em> you to take what you find on this site and use it in
              your own projects. Use it to have fun. Use it to make money. Either way, that's great
              — that's what it's here for.
            </p>
            <p>
              And you don't have to share attribution or credit, although that would very much make
              me happy.
            </p>
            <p>I have just one exception and one request.</p>
            <p>
              <strong>Exception:</strong> You may not copy my brand directly. You can use it for
              inspiration. But please don't up and lift it for your own, at least without asking
              first.
            </p>
            <p>
              <strong>Request:</strong> Share your work with me and how the content here helped you!
              I like knowing that what I'm doing is helping, and that's a great way to give back for
              what you've received.
            </p>
            <p>
              In the end, I want you to have fun playing with the web. I want you to earn money from
              it. I want you to help make it better. And if you can use something here to do that,
              do it!
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

LicensePage.propTypes = {}

LicensePage.defaultProps = {}

export default LicensePage
