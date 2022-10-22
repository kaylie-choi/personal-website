import React from "react"
import NavMenu from "../components/navbar/nav-menu"
import Content from "../components/content"
import Footer from "../components/footer"
import { SeO } from "../components/seo"


export default function Home() {
  console.log('hi! i\'m so happy you\'re here :D thanks for checking out my site!!\np.s. see if you can find all the easter eggs B)')

  return (
      <div>
        <NavMenu/>
        <Content/>
        <Footer/>
      </div>
  )
}

export const Head = () => (
  <SeO title="Kaylie Choi"/>
)