import React from 'react'
import styled from 'styled-components'


const NavItemLink = styled.a`
    position: relative;
    z-index: 0;
    margin-left: 1rem;
    line-height: 16px;
    top: 2px; 

    ::after {
        content: " ";
        position: absolute;
        left: 0;
        width: 100%;
        height: 2px;
        background: #97B08D;
        content: "";
        opacity: 0;
        transition: all 0.3s;
        bottom: 0px;
        transform: translateY(-10px);
        margin-bottom: -3.5px;
    }
    
    :hover::after {
        opacity: 1;
        transform: translateY(0px);
    }
`

export default function NavLink(props) {
    return (
        <div>
          <NavItemLink href={props.href} target='_blank'> {props.text} </NavItemLink>
        </div>
    )
}
        