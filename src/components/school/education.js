import React from 'react'
import { Link } from "gatsby"
import styled from 'styled-components'


const EduWrapper = styled.div`
    padding: 1rem 0 5rem;
`
const AboutText = styled.p`
`
const AboutBold = styled.a`
    font-weight: 600;
`
const AboutLink = styled.a`
    display: inline;
    color: #97B08D;
    text-decoration: underline;
    font-weight: 600;
`

export default function Education() {
    return (
        <EduWrapper>
            <AboutText
                data-sal="slide-up"
                data-sal-duration="700"
                data-sal-delay="175"
                data-sal-easing="ease-out-back"
            >
                Hello! I’m Kaylie Choi (she/her), a developer with a 
                passion for front-end development, design, and user experience. 
                I’m a <Link to='https://uwaterloo.ca/nanotechnology/' target='_blank'>
                    <AboutBold>nanotechnology engineering</AboutBold>
                </Link> student currently studying <i>[remotely]</i> at 
                the University of Waterloo.
            </AboutText>
        </EduWrapper>
    )
}