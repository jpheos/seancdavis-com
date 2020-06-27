import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import styles from "./styles.module.css"

const TypingAnimation = ({
  blankDuration,
  characterDuration,
  highlightDuration,
  texts,
  viewDuration
}) => {
  //
  // ---------------------------------------- | State Control
  //
  // Controls the text that is rendered to the screen.
  const [visibleText, setVisibleText] = useState("")
  // Controls the cursor blinking effect. The cursor should only blink when not
  // actively typing.
  const [isBlinking, setIsBlinking] = useState(true)
  // Controls when the text is highlighted, which happens right before deleting
  // it.
  const [isHighlighted, setIsHighlighted] = useState(false)

  // ---------------------------------------- | Animation Process

  /**
   * Controller for the typing interactivity. This effect only runs a single
   * time to avoid an infinite loop, as it updates state within it.
   */
  useEffect(() => {
    // This process is single-threaded, so there is only ever one active
    // timeout. We share a variable for this timeout so that we can clear it and
    // instantiate a new variable each time we implement a new timeout, helping
    // protect against running into a memory leak.
    let activeTimeout

    // Since this only runs once, we use an index to control the current text.
    // It increments at the beginning of the process, which is why it is
    // initialized as -1.
    let currentIdx = -1

    /**
     * Kicks off a new text cycle.
     *
     * Prepares the states for beginning to type, ensuring there is no text on
     * screen, the cursor is not blinking, and the text won't be highlighted.
     *
     * It then clears the active timeout, increments the index, finds the
     * appropriate text, then begins typing.
     */
    const initTextCycle = () => {
      // The cursor should be blinking because we're not actively typing. This
      // will be adjusted when the typing starts again. The time between these
      // actions is negligible, but this feels more declarative.
      setIsBlinking(true)
      // There should be no text on the screen.
      setVisibleText("")
      // Ensure the text will not be highlighted when typing the next text
      // begins.
      setIsHighlighted(false)
      // Clear the current timeout.
      clearTimeout(activeTimeout)
      // Increment the index control, resetting to 0 if we're at the last text
      // in the list.
      currentIdx++
      if (currentIdx === texts.length) currentIdx = 0
      // Extract the individual characters from the current text and then begin
      // typing them.
      const currentTextChars = texts[currentIdx].split("")
      activeTimeout = setTimeout(() => typeChar(currentTextChars, 1), 0)
    }

    /**
     * Types an individual character, then increments the index and sets a delay
     * to call itself again, to type the next character.
     */
    const typeChar = (currentTextChars, numChars) => {
      // Clear the active timeout.
      clearTimeout(activeTimeout)
      // If there are no remaining characters to type, the cursor should return
      // to blinking. The next step is then to highlight the text (before
      // deleting), but we want to delay that action for the amount of time the
      // parent has requested each word be viewed.
      if (numChars > currentTextChars.length) {
        setIsBlinking(true)
        return (activeTimeout = setTimeout(highlight, viewDuration))
      }
      // If there is another character to type, add that character to the
      // string. This triggers a re-render, which will add the character to the
      // screen.
      setVisibleText(currentTextChars.slice(0, numChars).join(""))
      // Then call this function again, but delay by the amount of time the
      // parent component requested it take to type each character.
      activeTimeout = setTimeout(() => typeChar(currentTextChars, numChars + 1), characterDuration)
    }

    /**
     * Highlights the text, then delays deleting the text.
     */
    const highlight = () => {
      // Clear the active timeout.
      clearTimeout(activeTimeout)
      // Set the highlighted state to true, which re-renders the component and
      // adjusts the style.
      setIsHighlighted(true)
      // Prepare to delete the text, delaying by the amount of time the parent
      // component requested each text remain highlighted before deleting.
      return (activeTimeout = setTimeout(deleteText, highlightDuration))
    }

    /**
     * Delete the current then recycle the typing loop.
     */
    const deleteText = () => {
      // Clear the active timeout.
      clearTimeout(activeTimeout)
      // Remove the visible text from the screen and ensure the text won't be
      // highlighted when typing begins again. (These are both also run in the
      // init function.)
      setVisibleText("")
      setIsHighlighted(false)
      // Recycle the typing loop, delaying by the amount of time the parent
      // component requested the screen sit without text.
      activeTimeout = setTimeout(initTextCycle, blankDuration)
    }

    // This is the trigger the kicks everything off, as the actual actions live
    // within the functions above.
    activeTimeout = setTimeout(initTextCycle, 0)

    // Return a function that clears the active timeout. This helps avoid memory
    // leakage when the component is unmounted.
    return () => clearTimeout(activeTimeout)
  }, [blankDuration, characterDuration, highlightDuration, texts, viewDuration])

  // ---------------------------------------- | Rendered Output

  return (
    <span className={classNames(styles.wrapper, { [styles.isHighlighted]: isHighlighted })}>
      <span className="inline-block">{visibleText.replace(/ /g, "\u00a0")}</span>
      <span className={classNames(styles.cursor, { [styles.isBlinking]: isBlinking })} />
    </span>
  )
}

TypingAnimation.propTypes = {
  /**
   * Amount of time (ms) between deleting the current text and typing the next
   * text.
   */
  blankDuration: PropTypes.number.isRequired,
  /**
   * Amount of time (ms) spent typing each character.
   */
  characterDuration: PropTypes.number.isRequired,
  /**
   * Amount of time (ms) during which the text is highlighted before deleting.
   */
  highlightDuration: PropTypes.number.isRequired,
  /**
   * An array of text to animate. The first element renders on the page at
   * first, then is deleted, while subsequent text nodes are typed then deleted,
   * and so on.
   */
  texts: PropTypes.arrayOf(PropTypes.string).isRequired,
  /**
   * Amount of time (ms) to let the word sit after typing and before deleting.
   */
  viewDuration: PropTypes.number.isRequired
}

TypingAnimation.defaultProps = {
  blankDuration: 250,
  characterDuration: 75,
  highlightDuration: 250,
  texts: [],
  viewDuration: 2000
}

export default TypingAnimation
