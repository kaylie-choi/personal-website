import React from "react"
import { useSiteMetadata } from "../components/hooks/use-site-metadata"

export const SeO = ({ title, description, pathname, children }) => {
  const { title: defaultTitle, description: defaultDescription, image, siteUrl, twitterUsername, keywords, author } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    keywords,
    author,
    twitterUsername,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="author" content={seo.author} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />  
      <meta name="keywords" content={seo.keywords} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.twitterUsername} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content="https://www.kayliechoi.com/twitterimg.png" />  
      <meta property="og:locale" content="en_CA" />  
  
      <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>🌱</text></svg>" />
      {children}
    </>
  )
}