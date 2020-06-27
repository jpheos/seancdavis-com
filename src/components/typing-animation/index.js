import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import styles from "./styles.module.css"

// TODO: Add comments
// TODO: Accept durations as props

const TypingAnimation = ({ text }) => {
  const [visibleText, setVisibleText] = useState("")
  const [isBlinking, setIsBlinking] = useState(true)
  const [isHighlighted, setIsHighlighted] = useState(false)

  useEffect(() => {
    const charTypingDuration = 75
    const viewDuration = 2000
    const highlightDuration = 250
    const blankDuration = 250

    let currentIdx = -1

    const resetCycle = () => {
      setIsBlinking(false)
      setVisibleText("")
      setIsHighlighted(false)
      textCycle()
    }

    const textCycle = () => {
      clearTimeout(nextTimeout)

      currentIdx++
      if (currentIdx === text.length) currentIdx = 0

      const currentTextChars = text[currentIdx].split("")

      typeChar(currentTextChars, 0)
    }

    const typeChar = (currentTextChars, idx) => {
      clearTimeout(nextTimeout)

      if (idx === currentTextChars.length) {
        setIsBlinking(true)
        nextTimeout = setTimeout(highlight, viewDuration)
        return
      }

      setVisibleText(currentTextChars.slice(0, idx).join(""))

      nextTimeout = setTimeout(() => typeChar(currentTextChars, idx + 1), charTypingDuration)
    }

    const highlight = () => {
      clearTimeout(nextTimeout)

      setIsHighlighted(true)

      return (nextTimeout = setTimeout(deleteText, highlightDuration))
    }

    const deleteText = () => {
      clearTimeout(nextTimeout)

      setVisibleText("")
      setIsHighlighted(false)

      nextTimeout = setTimeout(resetCycle, blankDuration)
    }

    let nextTimeout = setTimeout(resetCycle, 0)

    return () => clearTimeout(nextTimeout)
  }, [])

  return (
    <span className={classNames(styles.wrapper, { [styles.isHighlighted]: isHighlighted })}>
      <span className="inline-block">{visibleText.replace(/ /g, "\u00a0")}</span>
      <span className={classNames(styles.cursor, { [styles.isBlinking]: isBlinking })} />
    </span>
  )
}

TypingAnimation.propTypes = {
  /**
   * An array of text to animate. The first element renders on the page at
   * first, then is deleted, while subsequent text nodes are typed then deleted,
   * and so on.
   */
  text: PropTypes.arrayOf(PropTypes.string).isRequired
}

TypingAnimation.defaultProps = {
  text: []
}

export default TypingAnimation
