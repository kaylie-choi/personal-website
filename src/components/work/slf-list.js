// https://stackoverflow.com/questions/44370592/reactjs-how-to-add-a-show-more-show-less-button
import React from "react"
import styled from 'styled-components'

const ExperienceDesc = styled.ul`
    list-style-type: disc;
    list-style-position: outside;
    margin-top: 0.75rem;
    margin-left: 1rem;
    font-size: 14px;
    @media screen and (max-width: 640px) {
        font-size: 13px;
    }
`
const SLFCollapse = styled.a`
    color: #97B08D;
    float: right;
    font-weight: 600;
    cursor: pointer;
    :hover {
      color: #799170;
    }
`

class SLFList extends React.Component {
  constructor() {
    super()
    
    this.state = {
      slf: [
      { "index" : "1", "desc" : "Worked within a small team to develop secure voice features for the live Sun Life Voice Skill leveraging Node.js, Alexa Skills Kit, and Azure Functions" },
      { "index" : "2", "desc" : "Participated in design thinking sessions to rapidly ideate and prototype responsive, interactive web-based MVPs, using JavaScript and Bootstrap" },
      { "index" : "3", "desc" : "Collaborated with multi-disciplinary teams to meet strict deadlines by using the Agile Scrum methodology, with tracking, version control and documentation on JIRA, BitBucket and SharePoint" },
      { "index" : "4", "desc" : "Created Visio user flows and high-fidelity wireframes with Marvel/Figma to demonstrate viability of proof of concepts to executive leadership" },
      { "index" : "5", "desc" : "Researched new technologies to determine possible use cases for identified areas of improvement" },
    ],
      itemsToShow: 3,
      expanded: false
    }

    this.showMore = this.showMore.bind(this);
  }
  
  showMore() {
    this.state.itemsToShow === 3 ? (
      this.setState({ itemsToShow: this.state.slf.length, expanded: true })
    ) : (
      this.setState({ itemsToShow: 3, expanded: false })
    )
  }
  
  render() {
    return (
      <ExperienceDesc>
            {this.state.slf.slice(0, this.state.itemsToShow).map((slf, i) => 
            <li key={i}>{slf.desc}</li>
            )}
          <SLFCollapse onClick={this.showMore}>
            {this.state.expanded ? (
              <span>- Show less</span>
            ) : (
              <span>+ Show more</span>
            )
            }
          </SLFCollapse>
      </ExperienceDesc>
    )
  }
}

export default SLFList
