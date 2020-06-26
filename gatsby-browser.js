exports.onRouteUpdate = ({ location }) => scrollToAnchor(location)

/**
 * Smooth scroll to position of hash on page load.
 */
function scrollToAnchor(location, mainNavHeight = 0) {
  if (location && location.hash) {
    const item = document.querySelector(`${location.hash}`)
    if (!item) return

    const itemTop = item.offsetTop

    window.scrollTo({
      top: itemTop - mainNavHeight,
      behavior: "smooth"
    })
  }

  return true
}
