import React from 'react'
import styled from 'styled-components'


const SkillsWrapper = styled.div`
    padding: 1rem 0;
`
const SkillsSection = styled.p`
    margin: 0.3rem 0;
`
const SkillsBold = styled.span`
    font-weight: 600;
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
                <SkillsBold>Programming Languages ~ </SkillsBold>
                JavaScript, Python, HTML, CSS/Sass/Less, Ruby, Bash, SQL, GraphQL, MATLAB
            </SkillsSection>
            <SkillsSection>
                <SkillsBold>Libraries & Frameworks ~ </SkillsBold>
                ReactJS, jQuery, Backbone/Marionette, Ruby on Rails, Node.js, Bootstrap, Tailwind            
            </SkillsSection>
            <SkillsSection>
                <SkillsBold>Design ~ </SkillsBold>
                Figma, Adobe XD, Invision, Marvel, Visio, LaTex
            </SkillsSection>
            <SkillsSection>
                <SkillsBold>Tools & Technologies ~ </SkillsBold>
                Git, npm, Gatsby, Heroku, Netlify, CircleCI, Sentry, Alexa Skills Kit, Azure
            </SkillsSection>
            <SkillsSection>
                <SkillsBold>Management ~ </SkillsBold>
                Jira, Confluence, Agile Methodology, Scrum, Notion
            </SkillsSection>
        </SkillsWrapper>
    )
}