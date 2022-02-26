import React from 'react'
import styled from 'styled-components'


const NavItemLink = styled.a`
    position: relative;
    display: inline-block;
    margin-left: 1rem;
    text-decoration: none;
    border-bottom: 5px solid #97B08D;
    line-height: 16px;
    :hover::before, :active::before{
        transform: scaleX(1);
        transform-origin: bottom left;
    }
    ::before {
        transform: scaleX(0);
        transform-origin: bottom right;
        content: " ";
        position: absolute;
        top: 0; right: 0; bottom: 0; left: 0;
        background: #97B08D;
        z-index: -1;
        transition: transform .3s ease;
    }
`

export default function NavLink(props) {
    return (
        <div>
          <NavItemLink href={props.href} target='_blank'> {props.text} </NavItemLink>
        </div>
    )
}
        