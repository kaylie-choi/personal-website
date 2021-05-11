import React from "react"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Link } from "gatsby"
import styled from 'styled-components'
import pixleeLogo from "../../assets/work-pixlee.jpg"
import sunLifeLogo from "../../assets/work-sunlife.png"
import cibcLogo from "../../assets/work-cibc.png"
import msamLogo from "../../assets/work-msam.png"
import auraLogo from "../../assets/work-aura.png"
import ovalLogo from "../../assets/work-oval.png"

const ExperienceWrapper = styled.div`
    padding: 0 2rem;
    @media screen and (max-width: 1170px) {
        padding: 0 1rem;
    }
    @media screen and (max-width: 640px) {
        padding: 0 0.5rem;
    }
`
const LogoIcon = styled.img`
    border-radius: 50%;
    width: 40px;
    height: 40px;
    object-fit: cover;
    align-content: center;
`
const ExperiencePosition = styled.span`
    font-size: 17px;
    font-weight: 800;
    @media screen and (max-width: 640px) {
        font-size: 15px;
    }
`
const ExperienceCompany = styled.span`
    font-size: 16px;
    font-weight: 400;
    @media screen and (max-width: 640px) {
        font-size: 14px;
    }
`
const ExperienceDates = styled.h4`
    font-style: italic;
`
const ExperienceDesc = styled.ul`
    list-style-type: disc;
    list-style-position: outside;
    margin-top: 0.75rem;
    margin-left: 1rem;
    font-size: 14px;
    a {
        color: #97B08D;
        font-weight: 600;
    }
    @media screen and (max-width: 640px) {
        font-size: 13px;
    }
`


export default function Experience() {
    return (
        <ExperienceWrapper>
        <VerticalTimeline layout={ '1-column-left' }
        className="vertical-timeline vertical-timeline-custom-line"
        animate={ false }
        >
            <VerticalTimelineElement icon={<LogoIcon src={pixleeLogo} alt='pixlee logo'/>}>
                <ExperiencePosition>Full Stack SWE</ExperiencePosition>
                <ExperienceCompany> ~ Pixlee TurnTo</ExperienceCompany>
                <ExperienceDates>Jan 2021 - present</ExperienceDates>
                <ExperienceDesc style={{ marginLeft: '0'}}>
                    ~ Coming Soon ~
                </ExperienceDesc>
            </VerticalTimelineElement>

            <VerticalTimelineElement icon={<LogoIcon src={sunLifeLogo} alt='slf logo'/>}>
                <ExperiencePosition>Innovation Web Application Developer</ExperiencePosition>
                <ExperienceCompany> ~ Sun Life Financial</ExperienceCompany>
                <ExperienceDates>Jan 2020 - Apr 2020</ExperienceDates>
                <ExperienceDesc>
                    <li>
                        Worked with a small team to develop voice features for the live 
                        Sun Life Voice Skill using Node.js. Alexa Skills Kit and Azure Functions
                    </li>
                    <li>
                        Collaborated with multi-disciplinary teams to meet strict deadlines by 
                        using the SCRUM Agile methodology, JIRA, BitBucket and SharePoint
                    </li>
                    <li>
                        Followed the Design Thinking methodology to ideate and prototype innovative 
                        solutions for user stories and identified areas of improvement
                    </li>
                    {/* <li>
                        Prototyped responsive, interactive websites using Marvel, Figma, HTML, 
                        CSS/Sass, JavaScript and jQuery
                    </li>
                    <li>
                        Created wireframes and Visio user flows to demonstrate viability of proof of concepts
                    </li> */}
                 </ExperienceDesc>
            </VerticalTimelineElement>

            <VerticalTimelineElement icon={<LogoIcon src={cibcLogo} alt='cibc logo'/>}>
                <ExperiencePosition>Application Developer</ExperiencePosition>
                <ExperienceCompany> ~ CIBC Capital Markets</ExperienceCompany>
                <ExperienceDates>Sept 2019 - Dec 2019</ExperienceDates>
                <ExperienceDesc>
                    <li>
                        Collaborated with team members to integrate ReactJS and KendoReact UI 
                        with ASP.NET MVC and WebAPI components in existing web-based applications
                    </li>
                    <li>
                        Updated Microsoft SQL Server Reporting Services (SSRS) reports using 
                        SQL and MDX queries
                    </li>
                    <li>
                        Utilized Visual Studio Team System Pipelines to update Build 
                        and Release templates used to deploy applications to Azure DEV, SIT, 
                        UAT and PROD environments
                    </li>
                    {/* <li>
                        Employed PowerShell scripts to manipulate and deploy SharePoint reports
                    </li>
                    <li>
                        Contributed in the migration of Capital Market Finance applications to Azure Cloud
                    </li> */}
                </ExperienceDesc>
            </VerticalTimelineElement>

            <VerticalTimelineElement icon={<LogoIcon src={msamLogo} alt='msam logo'/>}>
                <ExperiencePosition>Additive Manufacturing Material Developer</ExperiencePosition>
                <ExperienceCompany> ~ MSAM Lab</ExperienceCompany>
                <ExperienceDates>May 2018 - Aug 2018</ExperienceDates>
                <ExperienceDesc>
                    <li>
                        Co-author of <Link to='https://www.sciencedirect.com/science/article/abs/pii/S0924013619304959' target='_blank'>
                         "Study of Powder Recycling and its Effect on Printed Parts during Laser Powder-bed Fusion of 17-4 PH Stainless Steel"
                        </Link>, accepted by the Journal of Materials Processing Technology, Nov 2019
                    </li>
                    <li>
                        Contributed to various research projects involving industrial and medical 
                        partners, including Rio Tinto, Siemens, and Mount Sinai Hospital
                    </li>
                    {/* <li>
                        Performed tests and analyses to characterize materials; created and 
                        updated standard operating procedures; tasked to maintain and troubleshoot 
                        equipment
                    </li>
                    <li>
                        Operated several characterization instruments with minimal supervision, 
                        including a high-precision 3D optical scanner, digital image processing 
                        particle size and shape analyzer, powder rheometer system and automatic 
                        density analyzer. Prepared samples for analysis using rotary cutters, 
                        grinders and polishers
                    </li> */}
                </ExperienceDesc>
            </VerticalTimelineElement>

            <VerticalTimelineElement icon={<LogoIcon src={auraLogo} alt='aura logo'/>}>
                <ExperiencePosition>Rhythmic Gymnastics Coach</ExperiencePosition>
                <ExperienceCompany> ~ Aura Rhythmics</ExperienceCompany>
                <ExperienceDates>2013 - 2019</ExperienceDates>
                <ExperienceDesc>
                    <li>
                        Led and mentored young athletes through excellent interpersonal skills, 
                        by providing a safe and supportive environment while teaching and correcting 
                        technique and apparatus mastery
                    </li>
                    <li>
                        Communicated gymnast’s progress to other coaches, ensuring individual development 
                        and efficient use of training time
                    </li>
                    <li>
                        Success achieved by numerous all-around champions and medalists at Provincial 
                        and Western championships across multiple levels and disciplines
                    </li>
                </ExperienceDesc>
            </VerticalTimelineElement>

            <VerticalTimelineElement icon={<LogoIcon src={ovalLogo} alt='oval logo'/>}>
                <ExperiencePosition>Program Leader</ExperiencePosition>
                <ExperienceCompany> ~ Richmond Olympic Oval</ExperienceCompany>
                <ExperienceDates>July 2017 - Aug 2017 | March 2017</ExperienceDates>
                <ExperienceDesc>
                    <li>
                        Introduced rhythmic gymnastics to the public by instructing recreational 
                        classes as part of multi-sport summer and spring break programs, showing 
                        community leadership
                    </li>
                    <li>
                        Demonstrated creativity and initiative by planning fun and engaging 
                        lessons for girls of various ages to increase physical literacy
                    </li>
                </ExperienceDesc>
            </VerticalTimelineElement>

        </VerticalTimeline>
        </ExperienceWrapper>
    )
}