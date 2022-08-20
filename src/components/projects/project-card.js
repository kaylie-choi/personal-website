import React from 'react'
import styled from 'styled-components'
import tw from "twin.macro"

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
  ${tw`object-cover w-full h-44 rounded-t-lg md:h-auto md:w-40 md:rounded-none md:rounded-l-lg`}
`
const CardText = styled.div`
  width: 100%;
  ${tw`flex flex-col justify-between p-4 leading-normal`}
`
const CardTitle = styled.h3`
  font-size: 17px;
  font-weight: 800;
  text-decoration: underline;
  padding-bottom: 1rem;
`
const CardDesc = styled.h4`
  font-style: italic;
`

export default function ProjectCard(props)  {
  return (
    <span>  
      <CardContainer href={props.href}>
        <CardImg src={props.img} alt={props.alt}></CardImg>
        <CardText>
            <CardTitle>{props.title}</CardTitle>
            <CardDesc>{props.desc}</CardDesc>
        </CardText>
      </CardContainer>
    </span>
  )
}

