import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import styles from "./styles.module.css"

const TypingAnimation = ({ text }) => {
  const [visibleText, setVisibleText] = useState("")
  const [cursorIsBlinking, setCursorIsBlinking] = useState(true)

  useEffect(() => {
    let typingInterval, blinkingTimeout

    const typingDuration = 1000
    const restartDelay = 2000

    const totalTextDuration = typingDuration + restartDelay

    let currentIdx = -1

    const textInterval = () => {
      currentIdx++
      if (currentIdx === text.length) currentIdx = 0

      clearInterval(typingInterval)
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

      blinkingTimeout = setTimeout(() => setCursorIsBlinking(true), typingDuration)
    }

    textInterval()
    const primaryInterval = setInterval(textInterval, totalTextDuration)

    return () => {
      clearInterval(typingInterval)
      clearTimeout(blinkingTimeout)
      clearInterval(primaryInterval)
    }
  }, [])

  return (
    <span className="relative">
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
