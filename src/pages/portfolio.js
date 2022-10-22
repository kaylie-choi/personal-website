import React from 'react'
import styled from 'styled-components'
import NavMenu from "../components/navbar/nav-menu"
import Sparkles from '../components/secret/sparkles'
import Projects from '../components/projects/projects-container'
import ScrollToTop from '../components/scroll-to-top'
import Footer from "../components/footer"
import { SeO } from '../components/seo'


const PortfolioWrapper = styled.div`
    scroll-behavior: smooth;
    padding: 6rem 15rem 2rem;
    font-family: 'Open Sans', sans-serif;
    @media screen and (max-width: 1080px) {
        padding: 5rem 10rem 0rem;
    }
    @media screen and (max-width: 924px) {
        padding: 5rem 6rem 0rem;
    }
    @media screen and (max-width: 640px) {
        padding: 5rem 3rem 0rem;
        font-size: 13px;
    }
`
const PortfolioName = styled.h1`
    font-size: 25px;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    font-family: "PT Serif";
    z-index: 2;
    padding-top: 0.75rem;
    padding-left: 3rem;
    position: fixed;
    @media screen and (max-width: 640px) {
        display: none;
    } 
`
const PortfolioHeader = styled.h2`
    display: inline-block;
    padding-top: 1rem;
    border-bottom: 14px solid #97B08D;
    line-height: 7px;
    font-family: "PT Serif";
    font-size: 30px;
    font-weight: 700;
`

export default function Content() {
    return (
        <div>
            <NavMenu/>
            <PortfolioName>
                <Sparkles colors={'rainbow'} >
                    Kaylie Choi
                </Sparkles>
            </PortfolioName>
            <PortfolioWrapper>
                <PortfolioHeader>portfolio projects .</PortfolioHeader>
                <Projects/>
                <ScrollToTop showBelow={100} />
            </PortfolioWrapper>
            <Footer/>
        </div>
    )
}

export const Head = () => (
    <SeO title="Kaylie Choi - Portfolio"/>
)