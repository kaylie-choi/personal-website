import React from 'react'
import styled from 'styled-components'
import { Link } from "gatsby"
import NavMenu from "../components/navbar/nav-menu"
import SEO from '../components/seo'
import Footer from "../components/footer"


const FourWrapper = styled.div`
    padding: 11rem 0;
    align-content: center;
    text-align: center;
    height: 100vh;
`
const FourHeader = styled.h1`
    font-size: 5rem;
    font-weight: 800;
`
const FourText = styled.p`
    font-size: 1.25rem;
`
const FourLink = styled.a`
    color: #97B08D;
    text-decoration: underline;
    font-weight: 600;
    font-size: 1.25rem;
`

export default function Content() {
    return (
        <div>
            <NavMenu/>
            <FourWrapper>
                <FourHeader>
                    <span role="img" aria-label="leaf">🌱</span> 404
                </FourHeader>
                <FourText>
                    Oops! Page not found :(
                </FourText>
                <br />
                <br />
                <br />
                <FourLink>
                    <Link to='/'>
                        Take me home
                    </Link>
                </FourLink>
            </FourWrapper>
            <SEO/>
            <Footer/>
        </div>
    )
}