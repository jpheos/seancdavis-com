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
    heading: "Social",
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
const body = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus odio justo,
  aliquam non vulputate quis, porttitor scelerisque libero.
`

export default {
  body: body,
  menus: menus
}
