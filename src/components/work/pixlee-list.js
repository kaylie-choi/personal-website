// https://stackoverflow.com/questions/44370592/reactjs-how-to-add-a-show-more-show-less-button
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

class PixleeList extends React.Component {
  constructor() {
    super()
    
    this.state = {
      pixlee: [
      { "index" : "1", "desc" : "Managed development, testing, review, and release of new dynamic product badge and discount pricing features within photo galleries, increasing the engagement and conversion of user generated content by as much as 105%"},
      { "index" : "2", "desc" : "Oversaw the front-end development of a complete restructure and redesign of how Instagram Business Accounts are authenticated, managed, and displayed, streamlining customer onboarding time" },
      { "index" : "3", "desc" : "Contributed to the development of a reusable web component library, now used across multiple company projects and within various technologies" },
      { "index" : "4", "desc" : "Set up event tracking to monitor click events, using Keen to demonstrate how new features impact user conversion metrics" },
      { "index" : "5", "desc" : "Communicated effectively with various areas of business, including customer success, product, design, and engineering teams, to provide timely and efficient solutions based on customer feedback" },
    ],
      itemsToShow: 3,
      expanded: false
    }

    this.showMore = this.showMore.bind(this);
  }
  
  showMore() {
    this.state.itemsToShow === 3 ? (
      this.setState({ itemsToShow: this.state.pixlee.length, expanded: true })
    ) : (
      this.setState({ itemsToShow: 3, expanded: false })
    )
  }
  
  render() {
    return (
      <ExperienceDesc>
            {this.state.pixlee.slice(0, this.state.itemsToShow).map((pixlee, i) => 
            <li key={i}>{pixlee.desc}</li>
            )}
          <a className="btn btn-primary" onClick={this.showMore}>
            {this.state.expanded ? (
              <span>- Show less</span>
            ) : (
              <span>+ Show more</span>
            )
            }
          </a>
      </ExperienceDesc>
    )
  }
}

export default PixleeList
