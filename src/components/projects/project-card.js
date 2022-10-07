import React from 'react'
import styled from 'styled-components'
import tw from "twin.macro"


const CardContainer = styled.span`
  ${tw`flex flex-col items-center md:flex-row`}
  border: 0.5px solid rgba(99, 99, 99, 0.2);
  border-radius: 10px;
  transform: translateZ(0);
  transition: 0.3s transform ease-out;
  margin-bottom: 1.5rem;
  :hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 20px rgb(99, 99, 99, 0.2);
  }
`
const CardImg = styled.img`
  ${tw`object-cover w-full h-auto rounded-t-lg md:w-2/5 md:h-auto md:rounded-none md:rounded-l-lg`}
`
const CardText = styled.div`
  width: 100%;
  ${tw`flex flex-col justify-between p-4 leading-normal`}
`
const CardTitle = styled.h3`
  font-size: 17px;
  font-weight: 800;
`
const CardSubTitle = styled.h4`
  font-style: italic;
`
const CardDesc = styled.p`
  padding: 1rem 0;
  font-size: 14px;
`
const CardLinks = styled.span`
  font-size: 14px;
`
// background-color: ${props=>console.log(props)};
// background-color: ${props => props.href ? "#97B08D" : "transparent"};
const CardLink = styled.a`
  color: #97B08D;
  display: inline-block;
  font-weight: 800;
  margin-right: 15px;
  svg {
    margin-right: 8px; 
    display: inline-block;
    vertical-align: middle;
  }
  :hover {
    transition: 0.2s ease-in;
    color: #799170;
  }
`

export default function ProjectCard(props)  {
  return (
    <span>  
      <CardContainer>
        <CardImg src={props.img} alt={props.alt}></CardImg>
        <CardText>
          <CardTitle>{props.title}</CardTitle>
          <CardSubTitle>{props.subtitle}</CardSubTitle>
          <CardDesc>{props.desc}</CardDesc>
          
          <CardLinks>
            <CardLink href={props.firstLink} target="_blank">
              {props.firstLinkText}
              {props.firstIcon}
            </CardLink>
            <CardLink href={props.secondLink} target="_blank">
              {props.secondLinkText}
              {props.secondIcon}
            </CardLink>
            <CardLink href={props.thirdLink} target="_blank">
              {props.thirdLinkText}
              {props.thirdIcon}
            </CardLink>
          </CardLinks>

        </CardText>
      </CardContainer>
    </span>
  )
}

