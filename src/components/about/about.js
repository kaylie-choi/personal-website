import React from 'react'
import { Link } from "gatsby"
import styled from 'styled-components'


const AboutWrapper = styled.div`
    padding: 1rem 0 6rem;
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

export default function About() {
    return (
        <AboutWrapper>
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
                </Link> student currently studying at 
                the University of Waterloo.
            </AboutText>
            <br/>
            <AboutText
                data-sal="slide-up"
                data-sal-duration="700"
                data-sal-delay="175"
                data-sal-easing="ease-out-back"
            >
                I was national champion and 5-time member of the <Link to='http://www.gymcan.org/disciplines/rhythmic/national-teams/kaylie-choi' target='_blank'>
                    <AboutBold>Canadian Rhythmic Gymnastics National Team</AboutBold>
                </Link> where I had the opportunity to represent Canada at several international 
                competitions. Since retiring, I've coached and mentored several young athletes 
                - I hope to give back to the community that helped raise me. 
                <br/>
                In my spare time, I love hiking, going on foodventures, and
                discovering new music... but can usually be found spending way too many hours on TikTok.
            </AboutText>
            <br/>   
            <AboutText
                data-sal="slide-up"
                data-sal-duration="700"
                data-sal-delay="175"
                data-sal-easing="ease-out-back"
            >
                Feel free to connect with me on <Link to='https://www.linkedin.com/in/kaylie-choi/' target='_blank'>
                    <AboutLink>Linkedin</AboutLink>, 
                </Link> check out my projects on <Link to='https://github.com/kaylie-choi' target='_blank'>
                    <AboutLink>Github</AboutLink>, 
                </Link> or email to chat at <a href='mailto:kayli3choi@gmail.com'>
                    <AboutLink>kayli3choi@gmail.com</AboutLink>. 
                </a>
            </AboutText>
        </AboutWrapper>
    )
}