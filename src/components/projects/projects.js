// not using this one
// https://flowbite.com/docs/components/card/#horizontal-card
// https://www.gatsbyjs.com/docs/tutorial/part-4/#task-create-a-new-blog-page

import React from 'react'
import styled from 'styled-components'
import tw from "twin.macro"
import sadBoi from "../../assets/sad-boi.jpeg"
// import { graphql, useStaticQuery } from 'gatsby'


const ProjectsWrapper = styled.div`
    padding: 1rem 0 6rem;
`
const CardContainer = styled.a`
    ${tw`flex flex-col items-center md:flex-row`}
    border: 1px solid #c9c9c9;
    border-radius: 10px;
    transform: translateZ(0);
    transition: 0.3s transform ease-out;
    background-color: rgba(99, 99, 99, 0.1);
    margin-bottom: 1rem;
    :hover {
        transform: translateY(-5px);
        box-shadow: 0 5px 20px rgb(99, 99, 99, 0.2);
    }
`
const CardImg = styled.img`
    ${tw`object-cover w-full h-48 rounded-t-lg md:h-auto md:w-44 md:rounded-none md:rounded-l-lg`}
`
const CardText = styled.div`
    ${tw`flex flex-col justify-between p-4 leading-normal`}
`
const CardTitle = styled.h3`
    font-size: 1.25rem;
    font-weight: 800;
    text-decoration: underline;
    padding-bottom: 1rem;
`
const CardDesc = styled.p`
    font-size: 1rem;
`


export default function Projectss()  {
    // localhost:8000/___graphql 
    // GraphQL Querry to pull data out of data layer
    // const data = useStaticQuery(
    //     graphql`
    //       query {
    //         allFile {
    //           nodes {
    //             name
    //           }
    //         }
    //       }
    //     `
    // )
    return (
      <ProjectsWrapper>
        <CardContainer href={propTypes.href}>
            <CardImg src={sadBoi} alt="cardimg"></CardImg>
            <CardText>
                <CardTitle>{propTypes.title}</CardTitle>
                <CardDesc>{propTypes.desc}</CardDesc>
            </CardText>
        </CardContainer>

        <CardContainer href="/blog">
            <CardImg src={sadBoi} alt="cardimg"></CardImg>
            <CardText>
                <CardTitle>Creating a </CardTitle>
                <CardDesc>Pixlee TurnTo</CardDesc>
            </CardText>
        </CardContainer>

        <CardContainer href="/blog">
            <CardImg src={sadBoi} alt="cardimg"></CardImg>
            <CardText>
                <CardTitle>Reimagining a </CardTitle>
                <CardDesc>Metrotown Podiatry Center</CardDesc>
            </CardText>
        </CardContainer>
      </ProjectsWrapper>
    )
}


{/* <ul> */}
    {/* iterate over elements in the array */}
    {/* use map fn to loop over each node in data.allFile.nodes */}
    {/* retun react el that wraps node name in <li> el */}
    // {
    //     data.allFile.nodes.map( node => (
    //     <div key={node.name}>
    //         <CardContainer href="/blog">
    //             <CardImg src={sadBoi} alt="cardimg"></CardImg>
    //             <CardText>
    //                 <CardTitle>{node.name}</CardTitle>
    //                 <CardDesc>Pixlee TurnTo</CardDesc>
    //             </CardText>
    //         </CardContainer>
    //     </div>
    //     ))
    // }
{/* </ul> */}