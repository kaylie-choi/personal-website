import React from 'react'
import { Link } from "gatsby"
import styled from 'styled-components'
import IntroSocials from './intro-socials'
import tw from "twin.macro"
import Sparkles from '../sparkles'


const IntroTextContainer = styled.div`
    ${tw`flex justify-center sm:justify-start`}
`
const IntroTextWrapper = styled.div`
    margin-left: 0;
    width: 300px;
    ${tw`md:ml-6`}
`
const IntroName = styled.p`
    font-size: 44px;
    font-weight: 700;
    margin: 15px 0;
    width: 10ch;
    white-space: nowrap;
    overflow: hidden;
`
const IntroHello = styled.p`
`
const IntroLink = styled.a`
    display: inline;
    color: #97B08D;
    text-decoration: underline;
    font-weight: 600;
`

export default function IntroText() {
    return (
        <IntroTextContainer>
            <IntroTextWrapper>
                <IntroName>
                    <Sparkles colors={'rainbow'} >
                        Kaylie Choi
                    </Sparkles>
                </IntroName>
                <IntroHello>
                    Hi, I'm Kaylie! I'm a developer and recent engineering graduate
                    of the <Link to='https://uwaterloo.ca/'>
                        <IntroLink>University of Waterloo</IntroLink>
                    </Link>.
                    <br/>
                    <br/>
                    Previously, I've worked at <Link to='https://www.pixlee.com/home' target='_blank'>
                        <IntroLink>Pixlee&nbsp;TurnTo</IntroLink>
                    </Link>, <Link to='https://www.sunlife.ca/en/careers/digital-jobs/' target='_blank'>
                        <IntroLink>Sun&nbsp;Life&nbsp;Financial</IntroLink>
                    </Link>, and <Link to='https://cibccm.com/en/' target='_blank'>
                        <IntroLink>CIBC</IntroLink>
                    </Link>.
                </IntroHello>
                <IntroSocials/>
            </IntroTextWrapper>
        </IntroTextContainer>
    )
}