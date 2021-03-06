const path = require("path")
const webpack = require("webpack")

const env = process.env.ELEVENTY_ENV || "production"

module.exports = {
  entry: "./src/_includes/js/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist/js"),
    libraryTarget: "var",
    library: "App"
  },
  plugins: [new webpack.DefinePlugin({ ENV: JSON.stringify(env) })],
  mode: env,
  watch: env === "development"
}
