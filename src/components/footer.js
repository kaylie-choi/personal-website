import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"


const FooterContainer = styled.div`
    background-color: rgba(99, 99, 99, 0.05);
    padding: 1.5rem 0;
`
const FooterText = styled.p`
  font-size: 14px;
  text-align: center;
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
      console.log('your wish has been granted !');
    }
    
    return (
      <FooterContainer>
        <FooterText>
          <span 
            onClick={goodLuck}
            onKeyPress={goodLuck}
            role="img" 
            aria-label="4 leaf clover"
          >
            🍀
          </span>

          &nbsp;&nbsp;designed & built by&nbsp;
          {data.site.siteMetadata.author} &copy;&nbsp;2023
          
        </FooterText>
      </FooterContainer>
    )
  }
