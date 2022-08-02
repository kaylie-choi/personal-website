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
const CibcCollapse = styled.a`
    color: #97B08D;
    float: right;
    font-weight: 600;
    cursor: pointer;
`
class CibcList extends React.Component {
  constructor() {
    super()
    
    this.state = {
      cibc: [
      { "index" : "1", "desc" : "Collaborated with team members to integrate ReactJS and KendoReact UI with ASP.NET MVC and WebAPI components in existing web-based applications"},
      { "index" : "2", "desc" : "Updated Microsoft SQL Server Reporting Services (SSRS) reports using SQL and MDX queries" },
      { "index" : "3", "desc" : "Utilized Visual Studio Team System Pipelines to update Build and Release templates used to deploy applications to Azure DEV, SIT, UAT and PROD environments" },
      { "index" : "4", "desc" : "Employed PowerShell scripts to manipulate and deploy SharePoint reports" },
      { "index" : "5", "desc" : "Contributed in the migration of Capital Market Finance applications to Azure Cloud" },
    ],
      itemsToShow: 3,
      expanded: false
    }

    this.showMore = this.showMore.bind(this);
  }
  
  showMore() {
    this.state.itemsToShow === 3 ? (
      this.setState({ itemsToShow: this.state.cibc.length, expanded: true })
    ) : (
      this.setState({ itemsToShow: 3, expanded: false })
    )
  }
  
  render() {
    return (
      <ExperienceDesc>
            {this.state.cibc.slice(0, this.state.itemsToShow).map((cibc, i) => 
            <li key={i}>{cibc.desc}</li>
            )}
          <CibcCollapse onClick={this.showMore}>
            {this.state.expanded ? (
              <span>- Show less</span>
            ) : (
              <span>+ Show more</span>
            )
            }
          </CibcCollapse>
      </ExperienceDesc>
    )
  }
}

export default CibcList