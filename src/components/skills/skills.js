import React from 'react'
import styled from 'styled-components'


const SkillsWrapper = styled.div`
    padding: 1rem 0;
    margin: 0 -1.5rem 0 0;
`
const SkillsSection = styled.p`
    margin: 0.3rem 0;
    font-size: 14px;
`
const SkillsBold = styled.span`
    font-weight: 600; 
    margin: 0 7px 5px;
`
const SkillsList = styled.span`
`
export default function Skills() {
    return (
        <SkillsWrapper
            data-sal="slide-up"
            data-sal-duration="700"
            data-sal-delay="200"
            data-sal-easing="ease-out-back"
        >
            <SkillsSection>
                🖥
                <SkillsBold>Programming Languages &nbsp;~</SkillsBold>
                <SkillsList>
                    JavaScript, Python, HTML/CSS, Ruby, Bash, SQL, GraphQL, MATLAB
                </SkillsList>
            </SkillsSection>
            <SkillsSection>
                📚
                <SkillsBold>Libraries & Frameworks &nbsp;~</SkillsBold>
                <SkillsList>
                    ReactJS, jQuery, Backbone/Marionette, Ruby on Rails, Node.js, Bootstrap, Tailwind            
                </SkillsList>
            </SkillsSection>
            <SkillsSection>
                🎨 
                <SkillsBold>Design &nbsp;~</SkillsBold>
                <SkillsList>
                    Figma, Adobe XD, Invision, Marvel, Visio, LaTex
                </SkillsList>
            </SkillsSection>
            <SkillsSection>
                🛠
                <SkillsBold>Tools & Technologies &nbsp;~</SkillsBold>
                <SkillsList>
                    Git, npm, Gatsby, Heroku, Netlify, CircleCI, Sentry, Alexa Skills Kit, Azure
                </SkillsList>
            </SkillsSection>
            <SkillsSection>
                🗂
                <SkillsBold>Management &nbsp;~ &nbsp;</SkillsBold>
                <SkillsList>
                    Jira, Confluence, Agile Methodology, Scrum, Notion
                </SkillsList>
            </SkillsSection>
        </SkillsWrapper>
    )
}