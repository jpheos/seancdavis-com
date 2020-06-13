import React from "react"
import renderer from "react-test-renderer"

import Logo from "./"

describe("Logo", () => {
  it("renders correctly with no props", () => {
    const tree = renderer.create(<Logo />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it("renders correctly with theme", () => {
    const tree = renderer.create(<Logo theme="white" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it("renders correctly with className", () => {
    const tree = renderer.create(<Logo className="block" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
