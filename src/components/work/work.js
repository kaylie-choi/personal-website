// not using this one
import React from "react"
import styled from 'styled-components'
import tw from "twin.macro"
import pixleeLogo from "../../assets/work-pixlee.jpg"
import sunLifeLogo from "../../assets/work-sunlife.png"
import cibcLogo from "../../assets/work-cibc.png"
import msamLogo from "../../assets/work-msam.png"
import auraLogo from "../../assets/work-aura.png"
import ovalLogo from "../../assets/work-oval.png"


const WorkWrapper = styled.div`
    padding: 1rem 0 3rem;
`
const WorkItem = styled.div`
    padding-bottom: 2rem;
    ${tw`grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-3 md:gap-6`}
`
const WorkLeft = styled.p`
    ${tw`col-span-1 md:row-span-3`}
    border-right: 3px solid #97B08D; 
    @media screen and (max-width: 767px){
        border-right: none;
    }
`
const WorkTitle = styled.p`
    font-weight: 600;
`
const WorkTime = styled.p`
    font-weight: 300;
    font-style: italic;
`
const WorkImg = styled.img`
    height: 60px;
    width: 60px;
    object-fit: contain;
`
const WorkRight = styled.p`
    ${tw`col-span-1 md:col-end-4 md:col-span-2 row-span-3`}
    max-height: 160px;
    overflow: scroll;
`
const WorkRightTop = styled.p`
    ${tw`row-span-1`}
`
const WorkRightBottom = styled.ul`
    ${tw`row-span-2`}
`

export default function Work() {
    return (
        <WorkWrapper>
            <WorkItem>
                <WorkLeft>
                    <WorkTitle>Pixlee TurnTo</WorkTitle>
                    <WorkTime>Jan 2021 - Aug 2021</WorkTime>
                    <WorkImg src={pixleeLogo} alt='Pixlee TurnTo'></WorkImg>
                </WorkLeft>
                <WorkRight>
                    <WorkRightTop>
                        <WorkTitle>Full Stack Software Engineer</WorkTitle>
                    </WorkRightTop>
                    <WorkRightBottom>
                        <li>
                        ~ Coming Soon ! 
                        </li>
                    </WorkRightBottom>
                </WorkRight>
            </WorkItem>
            <WorkItem>
                <WorkLeft>
                    <WorkTitle>Sun Life Financial</WorkTitle>
                    <WorkTime>Jan 2020 - Apr 2020</WorkTime>
                    <WorkImg src={sunLifeLogo} alt='Sun Life'></WorkImg>
                </WorkLeft>
                <WorkRight>
                    <WorkRightTop>
                        <WorkTitle>Innovation Web Application Developer</WorkTitle>
                    </WorkRightTop>
                    <WorkRightBottom>
                        <li>
                        ~ Worked with a small team to develop voice features for the live 
                        Sun Life Voice Skill using Node.js. Alexa Skills Kit and Azure Functions
                        </li>
                        <li>
                        ~ Collaborated with multi-disciplinary teams to meet strict deadlines by 
                        using the SCRUM Agile methodology, JIRA, BitBucket and SharePoint
                        </li>
                        <li>
                        ~ Followed the Design Thinking methodology to ideate and prototype innovative 
                        solutions for user stories and identified areas of improvement
                        </li>
                        <li>
                        ~ Prototyped responsive, interactive websites using Marvel, Figma, HTML, 
                        CSS/Sass, JavaScript and jQuery
                        </li>
                        <li>
                        ~ Created wireframes and Visio user flows to demonstrate viability of proof of concepts
                        </li>
                    </WorkRightBottom>
                </WorkRight>
            </WorkItem>
            <WorkItem>
                <WorkLeft>
                    <WorkTitle>CIBC Capital Markets</WorkTitle>
                    <WorkTime>Sept 2019 - Dec 2019</WorkTime>
                    <WorkImg src={cibcLogo} alt='CIBC'></WorkImg>

                </WorkLeft>
                <WorkRight>
                    <WorkRightTop>
                        <WorkTitle>Application Developer</WorkTitle>
                    </WorkRightTop>
                    <WorkRightBottom>
                        <li>
                        ~ Collaborated with team members to integrate ReactJS and KendoReact UI 
                        with ASP.NET MVC and WebAPI components in existing web-based applications
                        </li>
                        <li>
                        ~ Updated Microsoft SQL Server Reporting Services (SSRS) reports using 
                        SQL and MDX queries
                        </li>
                        <li>
                        ~ Employed PowerShell scripts to manipulate and deploy SharePoint reports
                        </li>
                        <li>
                        ~ Utilized Visual Studio Team System (VSTS) Pipelines to update Build 
                        and Release templates used to deploy applications to Azure DEV, SIT, 
                        UAT and PROD environments
                        </li>
                        <li>
                        ~ Contributed in the migration of Capital Market Finance applications to Azure Cloud
                        </li>
                    </WorkRightBottom>
                </WorkRight>
            </WorkItem>
            <WorkItem>
                <WorkLeft>
                    <WorkTitle>MSAM Lab</WorkTitle>
                    <WorkTime>May 2018 - Aug 2018</WorkTime>
                    <WorkImg src={msamLogo} alt='MSAM'></WorkImg>
                </WorkLeft>
                <WorkRight>
                    <WorkRightTop>
                        <WorkTitle>Research Assistant: Additive Manufacturing Material Developer</WorkTitle>
                    </WorkRightTop>
                    <WorkRightBottom>
                    <li>
                    ~ Co-author of "Study of Powder Recycling and its Effect on Printed Parts 
                    during Laser Powder-bed Fusion of 17-4 PH Stainless Steel", accepted by 
                    the Journal of Materials Processing Technology, Nov 2019
                    </li>
                    <li>
                    ~ Performed tests and analyses to characterize materials; created and 
                    updated standard operating procedures; tasked to maintain and troubleshoot 
                    equipment
                    </li>
                    <li>
                    ~ Contributed to various research projects involving industrial and medical 
                    partners, such as Rio Tinto, Siemens, and Mount Sinai Hospital
                    </li>
                    <li>
                    ~ Operated several characterization instruments with minimal supervision, 
                    including a high-precision 3D optical scanner, digital image processing 
                    particle size and shape analyzer, powder rheometer system and automatic 
                    density analyzer. Prepared samples for analysis using rotary cutters, 
                    grinders and polishers
                    </li>
                    </WorkRightBottom>
                </WorkRight>
            </WorkItem>
            <WorkItem>
                <WorkLeft>
                    <WorkTitle>Aura Rhythmics</WorkTitle>
                    <WorkTime>2013 - 2019</WorkTime>
                    <WorkImg src={auraLogo} alt='Aura'></WorkImg>
                </WorkLeft>
                <WorkRight>
                    <WorkRightTop>
                        <WorkTitle>Rhythmic Gymnastics Coach</WorkTitle>
                    </WorkRightTop>
                    <WorkRightBottom>
                        <li>
                        ~ Led and mentored young athletes through excellent interpersonal skills, 
                        by providing a safe and supportive environment while teaching and correcting 
                        technique and apparatus mastery
                        </li>
                        <li>
                        ~ Communicated gymnast’s progress to other coaches, ensuring individual development 
                        and efficient use of training time
                        </li>
                        <li>
                        ~ Success achieved by numerous all-around champions and medalists at Provincial 
                        and Western championships across multiple levels and disciplines
                        </li>
                    </WorkRightBottom>
                </WorkRight>
            </WorkItem>
            <WorkItem>
                <WorkLeft>
                    <WorkTitle>Richmond Olympic Oval</WorkTitle>
                    <WorkTime>July 2017 - Aug 2017</WorkTime>
                    <WorkTime>March 2017</WorkTime>
                    <WorkImg src={ovalLogo} alt='Aura'></WorkImg>
                </WorkLeft>
                <WorkRight>
                    <WorkRightTop>
                        <WorkTitle>Program Leader</WorkTitle>
                    </WorkRightTop>
                    <WorkRightBottom>
                        <li>
                        ~ Introduced rhythmic gymnastics to the public by instructing recreational 
                        classes as part of multi-sport summer and spring break programs, showing 
                        community leadership
                        </li>
                        <li>
                        ~ Demonstrated creativity and initiative by planning fun and engaging 
                        lessons for girls of various ages to increase physical literacy
                        </li>
                    </WorkRightBottom>
                </WorkRight>
            </WorkItem>
        </WorkWrapper>
    )
}