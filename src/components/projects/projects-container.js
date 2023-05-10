import React from 'react'
import styled from 'styled-components'
import ProjectCard from './project-card'
import pixelPaint from "../../assets/projects-pixelPaint.png"
import shoppableGallery from "../../assets/projects-shoppableGallery.png"
import productRecos from "../../assets/projects-productRecos.png"
import syde542 from "../../assets/projects-syde542.png"
import impactAlliance from "../../assets/projects-impactAlliance.png"
import sudokuSolver from "../../assets/projects-sudokuSolver.png"

import {
  FaLink, 
  FaLaptopCode,
  FaPalette,
  FaShareSquare,
  FaArrowRight
} from "react-icons/fa";


const ProjectsWrapper = styled.div`
    padding: 1rem 0 6rem;
`

export default function Projects() {
  return (
    <ProjectsWrapper>

      <ProjectCard 
        img={syde542}
        alt="design portfolio img"
        title="Design Portfolio"
        subtitle="Interface Design Final Project"
        desc="Proposing, prototyping and evaluating 2 different interfaces, focusing on 
        the importance of design goals, user requirements/testing, and iteration."
        firstLink="https://drive.google.com/file/d/1GPQevMvKslvRS94Q1lKg9pJOFUFx8tBK/view?usp=sharing"
        firstLinkText="Design Portfolio "
        firstIcon={<FaArrowRight title='view portfolio'/>}
        secondLink="https://drive.google.com/file/d/1hqB0x9LNb57wwirxrgTXDgNBoRg1PUh5/view?usp=sharing"
        secondLinkText="Portfolio Appendix "
        secondIcon={<FaArrowRight title='view appendix'/> }
      >
      </ProjectCard>

      {/* <ProjectCard 
        img={shoppableGallery}
        alt="ptt badges img"
        title="Shoppable Social UGC Widgets" 
        subtitle="Pixlee TurnTo"
        desc="Developing and releasing a new dynamic product badge and discount pricing features within photo galleries."
        firstLink="https://kayliechoi.notion.site/Shoppable-Social-UGC-Widgets-2afc4b5ba59f4aa7bdb2601913c78986"
        firstLinkText="Case Study "
        firstIcon={<FaArrowRight title='view case study'/>}
      >
      </ProjectCard> */}

      <ProjectCard 
        img={productRecos}
        alt="ptt recommendation img"
        title="Out of Stock Product Recommendations" 
        subtitle="Pixlee TurnTo"
        desc="Ideating and developing a rapid proof of concept to suggest recommended alternatives when products featured 
        in user generated content are out of stock."
        firstLink="https://kayliechoi.notion.site/Out-of-Stock-Product-Recommendations-9bd04a523444436eb74f0107e349bdce"
        firstLinkText="Case Study "
        firstIcon={<FaArrowRight title='view case study'/>}
      >
      </ProjectCard>

      {/* <ProjectCard 
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
      </ProjectCard> */}

      <ProjectCard 
        img={pixelPaint}
        alt="pixel paint img"
        title="Pixel Paint"
        subtitle="Personal Project"
        desc="A pixel art editor React app inspired by the retro design of Windows95 MS Paint."
        firstLink="https://github.com/kaylie-choi/pixel-paint"
        firstLinkText="View Source "
        firstIcon={<FaArrowRight title='view source code'/> }
        secondLink="https://kaylie-choi.github.io/pixel-paint/"
        secondLinkText="Live Demo "
        secondIcon={<FaArrowRight title='view live demo'/>}
      >
      </ProjectCard>
      <ProjectCard 
        img={sudokuSolver}
        alt="sudoku solver img"
        title="Sudoku Solver"
        subtitle="Personal Project"
        desc="A Python sudoku solver using the backtracking algorithm."
        firstLink="https://github.com/kaylie-choi/sudoku-solver"
        firstLinkText="View Source "
        firstIcon={<FaArrowRight title='view source code'/> }
      >
      </ProjectCard>
      <ProjectCard 
        img={impactAlliance}
        alt="sdg img"
        title="Impact & Communications Team"
        subtitle="SDG Impact Alliance Graphic Designer"
        desc="Created content for SDG  Impact Alliance's social media channels, 
              researching and designing for both informative carousel posts and 
              weekly engaging stories."
        firstLink="https://www.instagram.com/p/CVsr-q3gy4u/"
        firstLinkText="Instagram Post "
        firstIcon={<FaArrowRight title='ig post'/> }
        secondLink="https://www.instagram.com/p/CVstCfugVLV/"
        secondLinkText="Instagram Post "
        secondIcon={<FaArrowRight title='ig post 2'/>}
        thirdLink="https://www.instagram.com/p/CWs-2e3girk/"
        thirdLinkText="Instagram Post "
        thirdIcon={<FaArrowRight title='ig post 3'/> }
      >
      </ProjectCard>
    </ProjectsWrapper>
  )
}