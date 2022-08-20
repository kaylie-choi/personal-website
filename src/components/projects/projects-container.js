import React from 'react'
import styled from 'styled-components'
import ProjectCard from './project-card'
import sadBoi from "../../assets/sad-boi.jpeg"


const ProjectsWrapper = styled.div`
    padding: 1rem 0 6rem;
`
    export default function Projects()  {
      return (
        <ProjectsWrapper>
          <ProjectCard 
            href="/blog" 
            img={sadBoi}
            alt="PTT case study img"
            title="Providing a Shoppable UGC Experience" 
            desc="Pixlee TurnTo">
          </ProjectCard>

          <ProjectCard 
            href="/blog"
            img={sadBoi}
            alt="PTT case study img 2"
            title="Creating a"
            desc="Pixlee TurnTo">
          </ProjectCard>

          <ProjectCard 
            href="/blog"
            img={sadBoi}
            alt="MPC case study img"
            title="Reimagining a"
            desc="Metrotown Podiatry Center">
          </ProjectCard>
        </ProjectsWrapper>
      )
  }