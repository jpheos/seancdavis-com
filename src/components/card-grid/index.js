import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames/bind"

import Card from "../card"

const CardGrid = ({ cards }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((card, idx) => {
        card = {
          ...card,
          key: idx,
          className: classNames(card.className, { ["md:col-span-2"]: card.theme === "horizontal" })
        }
        return <Card {...card} />
      })}
    </div>
  )
}

CardGrid.propTypes = {
  /**
   * An array of data objects that represent a card. Passed on to the <Card />
   * component.
   */
  cards: PropTypes.arrayOf(PropTypes.object)
}

CardGrid.defaultProps = {
  cards: []
}

export default CardGrid
