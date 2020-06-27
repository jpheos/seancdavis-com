import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import styles from "./styles.module.css"

// TODO: Highlight right before delete
// TODO: Refactor the code
// TODO: Add comments
// TODO: Accept durations as props

/**
 * TODO: Consider if typing duration should be identical for each character and
 * not based on the length of the word. Then set the length of the restart based
 * on how long we want to wait after the longest word.
 *
 * Another approach would be to use setTimeout for typing exclusively, so I have
 * more fine-grained control on what the next action is, and the typing and
 * pausing can be consistent and so can the duration of typing each character.
 */

const TypingAnimation = ({ text }) => {
  const [visibleText, setVisibleText] = useState("")
  const [cursorIsBlinking, setCursorIsBlinking] = useState(true)
  const [isHighlighted, setIsHighlighted] = useState(false)

  useEffect(() => {
    let typingInterval, blinkingTimeout, highlightTimeout, blankTimeout

    const typingDuration = 1000
    const viewDuration = 1500
    const highlightDuration = 250
    const blankDuration = 250

    const totalTextDuration = typingDuration + viewDuration + highlightDuration + blankDuration
    const highlightStartsAt = typingDuration + viewDuration
    const blankStartsAt = totalTextDuration - blankDuration

    let currentIdx = -1

    const textInterval = () => {
      currentIdx++
      if (currentIdx === text.length) currentIdx = 0

      clearInterval(typingInterval)
      setIsHighlighted(false)
      setCursorIsBlinking(false)

      const currentTextChars = text[currentIdx].split("")
      const charIntLength = typingDuration / currentTextChars.length

      let activeCharIdx = 0

      const typeChar = () => {
        activeCharIdx++
        setVisibleText(currentTextChars.slice(0, activeCharIdx))
      }

      typeChar()
      typingInterval = setInterval(typeChar, charIntLength)

      highlightTimeout = setTimeout(() => {
        setIsHighlighted(true)
        clearInterval(typingInterval)
      }, highlightStartsAt)

      blankTimeout = setTimeout(() => setVisibleText(""), blankStartsAt)

      blinkingTimeout = setTimeout(() => setCursorIsBlinking(true), typingDuration)
    }

    textInterval()
    const primaryInterval = setInterval(textInterval, totalTextDuration)

    return () => {
      clearInterval(typingInterval)
      clearTimeout(blinkingTimeout)
      clearTimeout(highlightTimeout)
      clearTimeout(blankTimeout)
      clearInterval(primaryInterval)
    }
  }, [])

  return (
    <span className={classNames(styles.wrapper, { [styles.isHighlighted]: isHighlighted })}>
      <span className="inline-block">{visibleText}</span>
      <span className={classNames(styles.cursor, { [styles.isBlinking]: cursorIsBlinking })} />
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
