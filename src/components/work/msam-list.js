import React from "react"
import styled from 'styled-components'

const ExperienceDesc = styled.ul`
  list-style-type: disc;
  list-style-position: outside;
  font-size: 14px;
  a {
      font-weight: 600;
  }
  @media screen and (max-width: 640px) {
      font-size: 13px;
  }
`
const MsamCollapse = styled.a`
  color: #97B08D;
  float: right;
  font-weight: 600;
  cursor: pointer;
  :hover {
    color: #799170;
  }
`

class MsamList extends React.Component {
  constructor() {
    super()
    
    this.state = {
      msam: [
      { "index" : "1", "desc" : "Contributed to various research projects involving industrial and medical partners, including Rio Tinto, Siemens, and Mount Sinai Hospital" },
      { "index" : "2", "desc" : "Performed tests and analyses to characterize materials; created and updated standard operating procedures; tasked to maintain and troubleshoot equipment" },
      { "index" : "3", "desc" : "Operated several characterization instruments with minimal supervision, including a high-precision 3D optical scanner, digital image processing particle size and shape analyzer, powder rheometer system and automatic density analyzer. Prepared samples for analysis using rotary cutters, grinders and polishers" },
    ],
      itemsToShow: 1,
      expanded: false
    }

    this.showMore = this.showMore.bind(this);
  }
  
  showMore() {
    this.state.itemsToShow === 1 ? (
      this.setState({ itemsToShow: this.state.msam.length, expanded: true })
    ) : (
      this.setState({ itemsToShow: 1, expanded: false })
    )
  }
  
  render() {
    return (
      <ExperienceDesc>
            {this.state.msam.slice(0, this.state.itemsToShow).map((msam, i) => 
            <li key={i}>{msam.desc}</li>
            )}
          <MsamCollapse onClick={this.showMore}>
            {this.state.expanded ? (
              <span>- Show less</span>
            ) : (
              <span>+ Show more</span>
            )
            }
          </MsamCollapse>
      </ExperienceDesc>
    )
  }
}

export default MsamList