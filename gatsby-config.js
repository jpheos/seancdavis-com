module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`
  },
  plugins: [
    /**
     * Creates playgrounds from .mdx files in src/templates and src/components.
     * Pulled from Ample's starter kit and adjusted for this project. Lives in
     * plugins directory.
     */
    {
      resolve: `gatsby-alias-imports`,
      options: {
        aliases: {
          components: "./src/components/"
        }
      }
    },
    {
      resolve: `gatsby-plugin-playgrounds`,
      options: {
        disable: process.env.GATSBY_PLAYGROUND_DISABLED === "true"
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `seancdavis-com`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#008291`,
        theme_color: `#008291`,
        display: `minimal-ui`,
        icon: `src/images/seancdavis-icon.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `DM Serif Display`,
            variants: [`400`]
          },
          {
            family: `Lato`,
            variants: [`300`, `400`, `700`]
          },
          {
            family: `Source Serif Pro`,
            variants: [`400`]
          }
        ]
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
