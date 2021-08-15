import React from 'react'
import styled from 'styled-components'
import SectionHeader from "../components/section-header"
import Intro from "../components/intro/intro"
import About from "../components/about/about"
// import Work from "../components/work/work"
import Experience from "../components/work/experience"
import Skills from "../components/skills/skills"
import SEO from './seo'
import ScrollToTop from './scroll-to-top'


const ContentWrapper = styled.div`
    scroll-behavior: smooth;
    padding: 1rem 15rem;
    font-family: 'Open Sans', sans-serif;
    font-size: 15px;
    @media screen and (max-width: 1080px) {
        padding: 1rem 10rem;
    }
    @media screen and (max-width: 924px) {
        padding: 1rem 6rem;
    }
    @media screen and (max-width: 640px) {
        padding: 1rem 3rem;
        font-size: 13px;
    }  
`

export default function Content() {
    return (
        <ContentWrapper>
            <Intro/>
            <SectionHeader headerText="About" id="about"/>
            <About/>
            <SectionHeader headerText="Work" id="work"/>
            {/* <Work/> */}
            <Experience/>
            <SectionHeader headerText="Skills" id="skills"/>
            <Skills/>
            <SEO/>
            <ScrollToTop showBelow={250} />
        </ContentWrapper>
    )
}