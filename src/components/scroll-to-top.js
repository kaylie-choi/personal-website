import React, { useState, useEffect } from 'react'
import { FaChevronUp } from 'react-icons/fa'
import styled from 'styled-components'

// adapted from https://juliapottinger.com/react-gatsby-scroll-to-top/

const ScrollButton = styled.button`
    position: fixed;
    right: 3rem;
    bottom: 2rem;
    font-size: 16px;
    background-color: #DCDCDC;
    border-radius: 50%;
    padding: 0.5rem;
    color: black;
    &:hover {
        transition: 0.2s;
        background-color: #bdbdbd;
    }
`

const ScrollToTop = ({showBelow}) => {

    const [show, setShow] = useState(showBelow ? false : true)

    const handleScroll = () => {
        if (window.pageYOffset > showBelow) {
            if (!show) setShow(true)
        } else {
            if (show) setShow(false)
        }
    }

    const handleClick = () => {
        window[`scrollTo`]({ top: 0, behavior: `smooth` })
    }

    useEffect(() => {
        if (showBelow) {
            window.addEventListener(`scroll`, handleScroll)
            return () => window.removeEventListener(`scroll`, handleScroll)
        }
    })

    return (
        <div>
            {show &&
                <ScrollButton onClick={handleClick}>
                    <FaChevronUp title='up arrow to scroll back to top'/>
                </ScrollButton>
            }
        </div>
    )
}
export default ScrollToTop
