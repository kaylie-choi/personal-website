import React from 'react'
import styled from 'styled-components'
import SectionHeader from '../components/section-header'
import Intro from '../components/intro/intro'
import About from '../components/about/about'
import Experience from '../components/work/experience'
import SelectedProjects from './projects/projects-container-selected'
import Skills from '../components/skills/skills'
import Contact from '../components/contact/contact'
import ScrollToTop from './scroll-to-top'
import Surprise from '../components/secret/surprise'


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
            <Surprise/>
            <Intro/>
            <SectionHeader headerText="about" id="about"/>
            <About/>
            <SectionHeader headerText="work" id="work"/>
            <Experience/>
            <SectionHeader headerText="projects" id="projects" href='/portfolio'/>
            <SelectedProjects/>
            <SectionHeader headerText="skills" id="skills"/> 
            <Skills/>
            <SectionHeader headerText="contact" id="contact"/>
            <Contact/>
            <ScrollToTop showBelow={250} />
        </ContentWrapper>
    )
}

