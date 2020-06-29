import React from "react"
import renderer from "react-test-renderer"

import Icon from "."

describe("Icon", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Icon name="circle" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
