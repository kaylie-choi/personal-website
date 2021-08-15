import React from "react"
import NavMenu from "../components/navbar/nav-menu"
import Content from "../components/content"
import Footer from "../components/footer"
import { useKonamiCode } from "../secrets/useKonamiCode"


export default function Home() {
  console.log('hi there! thanks for checking out my site :)')
  const konami = useKonamiCode();

  return (
      <div>
        <NavMenu/>
        <Content/>
        <Footer/>
      </div>
  )
}
