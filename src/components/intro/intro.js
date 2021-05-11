import React from "react"
import styled from 'styled-components'
import IntroPictures from './intro-pictures'
import IntroText from './intro-text'
import tw from "twin.macro"


const IntroWrapper = styled.div`
    padding: 10rem 0 15rem;
    ${tw`grid grid-cols-1 sm:grid-cols-2`}
    
    @media screen and (max-width: 640px) {
        padding: 8rem 0 6rem;
    }
`

export default function Intro() {
    return (
        <IntroWrapper>
            <IntroPictures/>
            <IntroText/>
        </IntroWrapper>
    )
}