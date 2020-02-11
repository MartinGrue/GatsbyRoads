/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
var path = require("path")
module.exports = {
  siteMetadata: {
    title: "GatsbyRoads",
    description: "Explore awesome worldwide tours",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}${"\\src\\images"}`,
      },
    },
  ],

  /* Your site config here */
}
