import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

const FooterText = styled.p`
  padding: 1rem 0 2rem;
  font-size: 14px;
  text-align: center;
  
  a {
    cursor: pointer;
  }
`

export default function Footer() {
    const data = useStaticQuery(
      graphql`
        query {
          site {
            siteMetadata {
              author
            }
          }
        }
      `
    )

    function goodLuck(e){
      e.preventDefault();
      console.log('your wish has been granted.');
    }
    
    // window.onload = console.log('hi there! thanks for checking out my site :)')

    return (
      <div>
        <FooterText>
          <a onClick={goodLuck} role="img" aria-label="leaf">
            🍀
          </a>

          &nbsp;&nbsp;designed & built by&nbsp;
          {data.site.siteMetadata.author} &copy;
          
        </FooterText>
      </div>
    )
  }