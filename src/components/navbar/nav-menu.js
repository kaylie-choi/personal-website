import React from 'react'
import NavSection from './nav-section'
import styled from 'styled-components'



const NavContainer = styled.div`
    background-color: rgba(252, 252, 252, 0.5);
    width: 100vw;
    padding: 1rem 3rem;
    position: fixed;
    z-index: 1;
`
const NavWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
    a {
        text-decoration: none;
        color: #212121;
    }
`

export default function NavMenu() {    
    return (
        <NavContainer>
            <NavWrapper>
                {/* <AnchorLink to="/#about">HELLO</AnchorLink> */}

                <NavSection to='/' text='home' />
                <NavSection to='#about' text='about'/>
                <NavSection to='#work' text='work' />
                <NavSection to='https://drive.google.com/file/d/1zdvyE9qg0QSJa_q8IBu9ggv-I9rEqndG/view?usp=sharing' text='resume'/>
            </NavWrapper>
        </NavContainer>
    )
}

