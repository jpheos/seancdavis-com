import React from "react"
import PropTypes from "prop-types"
// import { Link } from "gatsby"

import Layout from "../layout"

import Button from "../components/button"
import Card from "../components/card"
// import Image from "../components/image"
// import SEO from "../components/seo"

const MyWorkPage = ({ data }) => {
  console.log(data)

  return (
    <Layout>
      <div className="bg-gray-light p-12">
        <h1>My Work</h1>

        <div style={{ width: "500px" }}>
          <Card
            title="Lorem ipsum sil dolor Rhoncus Amet fili sed xerunt"
            image="fpo-image.jpg"
            subtitle="March 31, 2020"
            to="/work"
          />
          <Card
            title="Lorem ipsum sil dolor Rhoncus Amet fili sed xerunt"
            theme="featured"
            image="fpo-image.jpg"
            subtitle="March 31, 2020"
            to="/work"
          />
          <Card
            title="Lorem ipsum sil dolor Rhoncus Amet fili sed xerunt"
            theme="horizontal"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus odio justo, aliquam non vulputate quis xerunt."
            image="fpo-image.jpg"
            subtitle="March 31, 2020"
            to="/work"
          />
        </div>
      </div>
    </Layout>
  )
}

MyWorkPage.propTypes = {}

MyWorkPage.defaultProps = {}

export default MyWorkPage
