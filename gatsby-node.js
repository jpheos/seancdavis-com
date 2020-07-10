const lodash = require("lodash")
const path = require("path")
const remark = require("remark")
const remarkHTML = require("remark-html")

/**
 * Customize GraphQL schema.
 */
exports.createSchemaCustomization = ({ actions, schema, getNodesByType }) => {
  const mdFieldsMap = [
    { type: "MarkdownRemarkFrontmatterIntro" },
    { type: "MarkdownRemarkFrontmatterBio" }
  ]

  // Process markdown for home page intro section
  actions.createTypes(
    mdFieldsMap.map(cfg =>
      schema.buildObjectType({
        name: cfg.type,
        interfaces: cfg.interfaces || [],
        fields: {
          [cfg.dest || "body"]: {
            type: "String",
            resolve: source => {
              if (!source[cfg.src || "body_md"]) return ""
              return remark()
                .use(remarkHTML)
                .processSync(source[cfg.src || "body_md"])
                .toString()
            }
          }
        }
      })
    )
  )
}

/**
 * Create pages from local markdown file content.
 */
exports.createPages = ({ actions, graphql }) => {
  return graphql(`
    {
      pages: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "//src/content/pages//" } }) {
        edges {
          node {
            id
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    // Loop through pages ...
    result.data.pages.edges.map(({ node }) => {
      // If there is no path key, move on. The page content should explicitly
      // suggest where it should live.
      if (!lodash.get(node, "frontmatter.path")) return
      // Otherwise, create the page. This data is passed through a page template
      // adapter, which will grab the page data and then render the appropriate
      // layout.
      actions.createPage({
        path: node.frontmatter.path,
        component: path.resolve(`./src/templates/page/adapter.js`),
        context: {
          id: node.id
        }
      })
    })
  })
}
