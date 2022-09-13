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
    image: "/twitterimg.png",
    keywords: `kaylie choi, kaylie, choi, kayliechoi, website, personal, developer, rhythmic gymnastics, Nanotechnology Engineering, UWaterloo, University of Waterloo, canada`
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
          "UA-196942934-1", // Google Universal Analytics
          "G-3329PQ2J9C", // GA-4 Measurement ID
        ],
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true
        },
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
