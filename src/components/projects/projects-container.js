import React from 'react'
import styled from 'styled-components'
import ProjectCard from './project-card'
import pixelPaint from "../../assets/projects-pixelPaint.png"
import shoppableGallery from "../../assets/projects-shoppableGallery.png"
import productRecos from "../../assets/projects-productRecos.png"
import {
  FaLink, 
  FaLaptopCode,
  FaPalette,
  FaShareSquare
} from "react-icons/fa";


const ProjectsWrapper = styled.div`
    padding: 1rem 0 6rem;
`

export default function Projects()  {
  return (
    <ProjectsWrapper>
      <ProjectCard 
        img={shoppableGallery}
        alt="ptt badges img"
        title="Shoppable Social UGC Widgets" 
        subtitle="Pixlee TurnTo"
        desc="Developing and releasing a new dynamic product badge and discount pricing features within photo galleries."
        firstLink="./pixelFirst"
        firstIcon={<FaLink title='view case study'/>}
        firstLinkText="Case Study"
      >
      </ProjectCard>

      <ProjectCard 
        img={productRecos}
        alt="ptt recommendation img"
        title="Out of Stock Product Recommendations" 
        subtitle="Pixlee TurnTo"
        desc="Ideating and developing a rapid proof of concept to suggest recommended alternatives when products featured 
        in user generated content are out of stock."
        firstLink="./recoFirst"
        firstIcon={<FaLink title='view case study'/>}
        firstLinkText="Case Study"
      >
      </ProjectCard>

      <ProjectCard 
        img={pixelPaint}
        alt="MPC case study img"
        title="Website Redesign"
        subtitle="Metrotown Podiatry Center"
        desc="Reimagining a"
        firstLink="./mpcFirst"
        firstIcon={<FaLink title='view case study'/>}
        firstLinkText="Case Study"
        secondLink="./mpcSecond"
        secondIcon={<FaPalette title='view prototype'/> }
        secondLinkText="Prototype"
      >
      </ProjectCard>

      <ProjectCard 
        img={pixelPaint}
        alt="pixel paint img"
        title="Pixel Paint"
        subtitle="Personal Project"
        desc="A pixel art editor React app inspired by the retro design of Windows95 MS Paint."
        firstLink="https://github.com/kaylie-choi/pixel-paint"
        firstIcon={<FaLaptopCode title='view source code'/> }
        firstLinkText="View Source"
        secondLink="https://kaylie-choi.github.io/pixel-paint/"
        secondIcon={<FaShareSquare title='view live demo'/>}
        secondLinkText="Live Demo"
      >
      </ProjectCard>
    </ProjectsWrapper>
  )
}