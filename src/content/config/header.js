// This file is used in src/layout/header.

/**
 * Links: Nav links in the main header menu.
 *
 * {
 *   label: "Label",
 *   url: "/",
 *   theme: {
 *     desktop: "outline",
 *     mobile: "outline_white"
 *   }
 * }
 *
 * If a link has a theme, it is treated as a button and passed on to the
 * <Button /> component. The themes are passed to the button and must be set
 * for small and large screens.
 */

const links = [
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

export default {
  links: links
}
