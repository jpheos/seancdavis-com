import React from "react"
import renderer from "react-test-renderer"

import Typewriter from "./"

describe("Typewriter", () => {
  it("renders correctly with no props", () => {
    const tree = renderer.create(<Typewriter />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
