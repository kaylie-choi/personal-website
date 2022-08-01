import React from "react"
import styled from 'styled-components'

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

class AuraList extends React.Component {
  constructor() {
    super()
    
    this.state = {
      aura: [
      { "index" : "1", "desc" : "Led and mentored young athletes through excellent interpersonal skills, by providing a safe and supportive environment while teaching and correcting technique and apparatus mastery"},
      { "index" : "2", "desc" : "Communicated gymnast’s progress to other coaches, ensuring individual development and efficient use of training time" },
      { "index" : "3", "desc" : "Success achieved by numerous all-around champions and medalists at Provincial and Western championships across multiple levels and disciplines" },
    ],
      itemsToShow: 3,
      expanded: false
    }

    this.showMore = this.showMore.bind(this);
  }
  
  showMore() {
    this.state.itemsToShow === 3 ? (
      this.setState({ itemsToShow: this.state.aura.length, expanded: true })
    ) : (
      this.setState({ itemsToShow: 3, expanded: false })
    )
  }
  
  render() {
    return (
      <ExperienceDesc>
            {this.state.aura.slice(0, this.state.itemsToShow).map((aura, i) => 
            <li key={i}>{aura.desc}</li>
            )}
          {/* <a className="btn btn-primary" onClick={this.showMore}>
            {this.state.expanded ? (
              <span>- Show less</span>
            ) : (
              <span>+ Show more</span>
            )
            }
          </a> */}
      </ExperienceDesc>
    )
  }
}

export default AuraList