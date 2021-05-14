/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Kaylie Choi`,
    description: `Kaylie Choi's personal website.`,
    twitterUsername: "@kayliechoi_",
    author: `Kaylie Choi`,
    siteUrl: `https://www.kayliechoi.com`,
    url: `https://www.kayliechoi.com`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-dark-mode`,
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -90,
        duration: 500
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "UA-196942934-1", // Google Analytics / GA
        ],
      },
    },
  ],
}
