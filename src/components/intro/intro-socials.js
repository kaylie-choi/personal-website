import React from 'react'
import { Link } from "gatsby"
import styled from 'styled-components'
import {
    FaRegFileAlt,
    FaGithub,
    FaLinkedin,
    FaEnvelope,
} from "react-icons/fa";


const IntroSocialsItem = styled.span`
    display: inline-block;
    margin-right: 10px; 
    padding-top: 1.75rem;   
    font-size: 18px;
    :hover {
        filter: drop-shadow(2px 2px 2px #97B08D);
    }
`

export default function IntroSocials() {
    return (
        <div>
            <IntroSocialsItem>
                <Link to='https://github.com/kaylie-choi' target='_blank'>
                    <FaGithub title='link to github profile'/>
                </Link>
            </IntroSocialsItem>

            <IntroSocialsItem>
                <Link to='https://www.linkedin.com/in/kaylie-choi/' target='_blank'>
                    <FaLinkedin title='link to linkedIn profile'/>
                </Link>
            </IntroSocialsItem>

            <IntroSocialsItem>
                <Link to='https://drive.google.com/file/d/1q6MQ5b4LIqjmwT4EG3kbIrFJDrCW7DcY/view?usp=sharing' target='_blank'>
                    <FaRegFileAlt title='link to resume'/>
                </Link>
            </IntroSocialsItem>

            <IntroSocialsItem>
                <a href='mailto:kayli3choi@gmail.com'>
                    <FaEnvelope title='link to send me an email'/>
                </a>
            </IntroSocialsItem>
        </div>
    )
}