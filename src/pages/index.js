import React from "react"
import NavMenu from "../components/navbar/nav-menu"
import Content from "../components/content"
import Footer from "../components/footer"


export default function Home() {
  console.log('hi there! thanks for checking out my site :)')

  return (
      <div>
        <NavMenu/>
        <Content/>
        <Footer/>
      </div>
  )
}
