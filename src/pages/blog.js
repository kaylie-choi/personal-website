// https://www.gatsbyjs.com/docs/tutorial/part-5/

import React from 'react'
import styled from 'styled-components'
import { Link } from "gatsby"
import { graphql } from 'gatsby'
import NavMenu from "../components/navbar/nav-menu"
import { SEO } from '../components/seo'
import Footer from "../components/footer"


const FourWrapper = styled.div`
  padding: 11rem 0;
  align-content: center;
  text-align: center;
  height: 100vh;
`
const FourLink = styled.a`
  color: #97B08D;
  text-decoration: underline;
  font-weight: 600;
  font-size: 1.25rem;
  :hover {
    color: #799170;
  }
`


const BlogPage = ({ data }) => {
  return (
    <div>
      <SEO title="Blog Posts"/>
      <NavMenu/>
      <FourWrapper>
        <strong>
          BLOG PAGE
        </strong>
        <ul>
          {/* iterate over elements in the array */}
          {/* use map fn to loop over each node in data.allFile.nodes */}
          {/* retun react el that wraps node name in <li> el */}
          {
            data.allFile.nodes.map( node => (
              <li key={node.name}>
                {node.name}
              </li>
            ))
          }
        </ul>
          <br />
          <br />
          <br />
          <FourLink>
              <Link to='/'>
                  ← Take me home
              </Link>
          </FourLink>
      </FourWrapper>
      <Footer/>
    </div>
  )
}


export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`

export default BlogPage
