import React from 'react'
import NavSection from './nav-section'
import styled from 'styled-components'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'


const NavContainer = styled.div`
    background-color: rgba(99, 99, 99, 0.1);
    width: 100vw;
    padding: 1rem 3rem;
    position: fixed;
    z-index: 1;
    @media screen and (max-width: 640px) {
        padding: 1rem 2rem;
    } 
`
const NavWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
    a {
        text-decoration: none;
    }
    @media screen and (max-width: 640px) {
        justify-content: center;
    }  
`

export default function NavMenu() {    
    return (
        <NavContainer>
            <NavWrapper>
                <ThemeToggler>
                    {({ theme, toggleTheme }) => (
                        <span
                            role='button'
                            aria-label="Toggle dark mode"
                            tabindex="0"
                            className={theme === 'light' ? 'dark-toggle moon' : 'dark-toggle sun'}
                            onClick={() => theme === 'light' ? toggleTheme('dark') : toggleTheme('light')}
                            onKeyPress={() => theme === 'light' ? toggleTheme('dark') : toggleTheme('light')}
                        />
                    )}
                </ThemeToggler>
                <NavSection to='/' text='home' />
                <NavSection to='#about' text='about'/>
                <NavSection to='#work' text='work' />
                <NavSection to='#skills' text='skills' />
                <NavSection to='https://drive.google.com/file/d/1q6MQ5b4LIqjmwT4EG3kbIrFJDrCW7DcY/view?usp=sharing' text='resume'/>
            </NavWrapper>
        </NavContainer>
    )
}

