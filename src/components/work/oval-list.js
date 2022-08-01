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

class OvalList extends React.Component {
  constructor() {
    super()
    
    this.state = {
      oval: [
      { "index" : "1", "desc" : "Introduced rhythmic gymnastics to the public by instructing recreational classes as part of multi-sport summer and spring break programs, showing community leadership"},
      { "index" : "2", "desc" : "Demonstrated creativity and initiative by planning fun and engaging lessons for girls of various ages to increase physical literacy" },
    ],
      itemsToShow: 2,
      expanded: false
    }

    this.showMore = this.showMore.bind(this);
  }
  
  showMore() {
    this.state.itemsToShow === 2 ? (
      this.setState({ itemsToShow: this.state.oval.length, expanded: true })
    ) : (
      this.setState({ itemsToShow: 2, expanded: false })
    )
  }
  
  render() {
    return (
      <ExperienceDesc>
            {this.state.oval.slice(0, this.state.itemsToShow).map((oval, i) => 
            <li key={i}>{oval.desc}</li>
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

export default OvalList