import React from 'react'
import styled from 'styled-components'
import { AnchorLink } from 'gatsby-plugin-anchor-links';


const NavItem = styled.li`
    position: relative;
    z-index: 0;
    margin-left: 1rem;
    line-height: 16px;
    margin-top: 6px;

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
        margin-bottom: -5px;
    }

    :hover::after {
        opacity: 1;
        transform: translateY(0px);
    }
`

export default function NavSection(props) {
    return (
        <div>
            <AnchorLink to={props.to}>
                <NavItem>{props.text}</NavItem>
            </AnchorLink>
        </div>
    )
}
        