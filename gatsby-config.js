/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Kaylie Choi`,
    description: `Hi, I'm Kaylie! Welcome to my personal website :)`,
    twitterUsername: "@kayliechoi_",
    author: `Kaylie Choi`,
    siteUrl: `https://www.kayliechoi.com`,
    image: "/favicon.ico",
    keywords: `kaylie choi, kaylie, choi, website, personal, developer, rhythmic gymnastics, canada`
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-dark-mode`,
    `gatsby-plugin-image`,
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
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
          threshold: 0.75, // Percentage of an element's area that needs to be visible to launch animation
          once: false, // Defines if animation needs to be launched once
          disable: false, // Flag for disabling animations
  
          // Advanced Options
          selector: '[data-sal]', // Selector of the elements to be animated
          animateClassName: 'sal-animate', // Class name which triggers animation
          disabledClassName: 'sal-disabled', // Class name which defines the disabled state
          rootMargin: '0% 50%', // Corresponds to root's bounding box margin
          enterEventName: 'sal:in', // Enter event name
          exitEventName: 'sal:out', // Exit event name
      },
    },
  ],
}
