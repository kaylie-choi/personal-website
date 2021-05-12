/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Kaylie Choi`,
    description: `Kaylie Choi's personal website.`,
    image: "/src/assets/meta.jpg",
    twitterUsername: "@kayliechoi_",
    author: `Kaylie Choi`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-dark-mode`,
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -90,
        duration: 500
      },
    },
  ],
}
