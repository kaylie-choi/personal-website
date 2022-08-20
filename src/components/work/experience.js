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
import PixleeList from "./pixlee-list";
import SLFList from "./slf-list";
import CibcList from "./cibc-list";
import MsamList from "./msam-list";
import AuraList from "./aura-list";
import OvalList from "./oval-list";

const ExperienceWrapper = styled.div`
    padding: 1rem 2rem 6rem;
    @media screen and (max-width: 1170px) {
        padding: 0 1rem 6rem;
    }
    @media screen and (max-width: 640px) {
        padding: 0 0.5rem 5rem;
    }
`
const ExperienceSub = styled.span`
    margin-left: -2rem;
`
const ExperienceLink = styled.a`
    display: inline;
    color: #97B08D;
    text-decoration: underline;
    font-weight: 600;
    :hover {
        color: #799170;
    }
`
const LogoIcon = styled.img`
    border-radius: 50%;
    width: 40px;
    height: 40px;
    object-fit: cover;
    align-content: center;
`
const ExperiencePosition = styled.h3`
    display: inline;
    font-size: 17px;
    font-weight: 800;
    @media screen and (max-width: 640px) {
        font-size: 15px;
    }
`
const ExperienceCompany = styled.span`
    display: inline;
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
        font-weight: 600;
    }
    @media screen and (max-width: 640px) {
        font-size: 13px;
    }
`

export default function Experience() {
    return (
        <ExperienceWrapper>
            <ExperienceSub>For my full work experience, check out&nbsp;
                <Link to='https://drive.google.com/file/d/1q6MQ5b4LIqjmwT4EG3kbIrFJDrCW7DcY/view?usp=sharing' target='_blank'>
                    <ExperienceLink>my resume</ExperienceLink>
                </Link>.
            </ExperienceSub>
            <VerticalTimeline layout={ '1-column-left' }
            className="vertical-timeline vertical-timeline-custom-line">
                <VerticalTimelineElement icon={<LogoIcon src={pixleeLogo} alt='pixlee logo'/>}>
                    <ExperiencePosition>Full Stack SWE</ExperiencePosition>
                    <ExperienceCompany> @ Pixlee TurnTo</ExperienceCompany>
                    <ExperienceDates>Jan 2021 - Aug 2021</ExperienceDates>
                    <PixleeList />
                </VerticalTimelineElement>

                <VerticalTimelineElement icon={<LogoIcon src={sunLifeLogo} alt='slf logo'/>}>
                    <ExperiencePosition>Innovation Web Application Developer</ExperiencePosition>
                    <ExperienceCompany> @ Sun Life Financial</ExperienceCompany>
                    <ExperienceDates>Jan 2020 - Apr 2020</ExperienceDates>
                    <SLFList/>
                </VerticalTimelineElement>

                <VerticalTimelineElement icon={<LogoIcon src={cibcLogo} alt='cibc logo'/>}>
                    <ExperiencePosition>Application Developer</ExperiencePosition>
                    <ExperienceCompany> @ CIBC Capital Markets</ExperienceCompany>
                    <ExperienceDates>Sept 2019 - Dec 2019</ExperienceDates>
                    <CibcList/>
                </VerticalTimelineElement>

                <VerticalTimelineElement icon={<LogoIcon src={msamLogo} alt='msam logo'/>}>
                    <ExperiencePosition>Additive Manufacturing Material Developer</ExperiencePosition>
                    <ExperienceCompany> @ MSAM Lab</ExperienceCompany>
                    <ExperienceDates>May 2018 - Aug 2018</ExperienceDates>
                    <ExperienceDesc>
                        <li>
                            Co-author of <Link to='https://www.sciencedirect.com/science/article/abs/pii/S0924013619304959' target='_blank'>
                            "Study of Powder Recycling and its Effect on Printed Parts during Laser Powder-bed Fusion of 17-4 PH Stainless Steel"
                            </Link>, accepted by the Journal of Materials Processing Technology, Nov 2019
                        </li>
                        <MsamList/>
                    </ExperienceDesc>
                </VerticalTimelineElement>

                <VerticalTimelineElement icon={<LogoIcon src={auraLogo} alt='aura logo'/>}>
                    <ExperiencePosition>Rhythmic Gymnastics Coach</ExperiencePosition>
                    <ExperienceCompany> @ Aura Rhythmics</ExperienceCompany>
                    <ExperienceDates>2013 - 2019</ExperienceDates>
                    <AuraList/>
                </VerticalTimelineElement>

                <VerticalTimelineElement icon={<LogoIcon src={ovalLogo} alt='oval logo'/>}>
                    <ExperiencePosition>Program Leader</ExperiencePosition>
                    <ExperienceCompany> @ Richmond Olympic Oval</ExperienceCompany>
                    <ExperienceDates>July 2017 - Aug 2017 | March 2017</ExperienceDates>
                    <OvalList/>
                </VerticalTimelineElement>

                {/* <VerticalTimelineElement icon={<LogoIcon src={} alt='sbux logo'/>}>
                    <ExperiencePosition>Barista</ExperiencePosition>
                    <ExperienceCompany> ~ Starbucks Canada</ExperienceCompany>
                    <ExperienceDates>July 2017 - Aug 2017</ExperienceDates>
                    <ExperienceDesc>
                        <li>
                            Developed strong multitasking abilities and conflict resolution 
                            skills to create an optimal customer experience while maintaining a 
                            courteous and professional manner
                        </li>
                        <li>
                            Quickly adapted to a fast-paced working environment to ensure 
                            streamlined efficiency and finely honed attention to detail and accuracy 
                            by managing currency and transactions at point of service till
                        </li>
                    </ExperienceDesc>
                </VerticalTimelineElement> */}

            </VerticalTimeline>
        </ExperienceWrapper>
    )
}
