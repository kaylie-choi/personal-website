import React from 'react'
import styled from 'styled-components'
import { Link } from "gatsby"
import NavMenu from "../components/navbar/nav-menu"
import SEO from '../components/seo'
import Footer from "../components/footer"


const SuccessWrapper = styled.div`
    padding: 15rem 0;
    align-content: center;
    text-align: center;
    height: 100vh;
`
const SuccessHeader = styled.h1`
    font-size: 2.5rem;
    font-weight: 800;
`
const SuccessText = styled.p`
    font-size: 1.25rem;
`
const SuccessLink = styled.a`
    color: #97B08D;
    text-decoration: underline;
    font-weight: 600;
    font-size: 1.25rem;
`

export default function Content() {
    return (
        <div>
            <NavMenu/>
            <SuccessWrapper>
                <SuccessHeader>
                <span role="img" aria-label="envelope">💌 </span>
                    Thanks for reaching out!
                </SuccessHeader>
                <SuccessText>
                  Your message has been received - I'll get back to you soon!
                </SuccessText>
                <br />
                <br />
                <br />
                <SuccessLink>
                    <Link to='/'>
                        ← Take me home
                    </Link>
                </SuccessLink>
            </SuccessWrapper>
            <SEO/>
            <Footer/>
        </div>
    )
}