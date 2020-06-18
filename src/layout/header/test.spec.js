import React from "react"
import renderer from "react-test-renderer"

import Header from "./"

// Note: The header brings its own content from the content source, so we just
// need to make sure it can render itself directly.
//
// And therefore we don't need rendering specs for children of this component.

describe("Header", () => {
  it("renders correctly with no props", () => {
    const tree = renderer.create(<Header />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
