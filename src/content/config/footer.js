import React from "react"

import Link from "components/link"

// This file is used in src/layout/footer.

/**
 * Menus:
 *
 * An array of menus to render in the footer. They are displayed in the
 * order in which they are shown.
 *
 * {
 *   heading: "Label",
 *   links: [
 *     {
 *       label: "Label",
 *       url: "/"
 *     }
 *   ]
 * }
 *
 */
const menus = [
  {
    heading: "Social Links",
    links: [
      {
        label: "Blog",
        url: "https://cobwwweb.com/"
      },
      {
        label: "Twitter",
        url: "https://twitter.com/seancdavis29"
      },
      {
        label: "GitHub",
        url: "https://github.com/seancdavis"
      }
    ]
  }
]

/**
 * Body:
 *
 * The text that appears below the logo.
 */
const body = (
  <>
    <p>
      This site was created and is maintained by{" "}
      <Link to="https://twitter.com/seancdavis29" className="text-white underline">
        Sean C Davis
      </Link>
      . It was designed by{" "}
      <Link to="https://mattwillettdesign.com/" className="text-white underline">
        Matt Willett
      </Link>
      .
    </p>

    <p>
      The site is built with{" "}
      <Link to="https://www.gatsbyjs.org/" className="text-white underline">
        Gatsby
      </Link>
      ,{" "}
      <Link to="https://tailwindcss.com/" className="text-white underline">
        Tailwind CSS
      </Link>
      , and loads of other open-source software. It is built, deployed, and hosted with help from{" "}
      <Link to="http://github.com/" className="text-white underline">
        GitHub
      </Link>{" "}
      and{" "}
      <Link to="https://www.netlify.com/" className="text-white underline">
        Netlify
      </Link>
      .
    </p>

    <p>
      And here's{" "}
      <Link to="/license" className="text-white underline">
        a super important legal document
      </Link>{" "}
      Sean made up.
    </p>
  </>
)

export default {
  body: body,
  menus: menus
}
