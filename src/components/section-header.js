import React from 'react'
import styled from 'styled-components'


const SectionHeaderText = styled.h2`
  display: inline-block;
  padding-top: 1rem;
  font-size: 34px;
  font-weight: 700;
  border-bottom: 14px solid #97B08D;
  line-height: 7px;
`

export default function SectionHeader(props) {
  return (
    <div>
      <SectionHeaderText 
        data-sal="slide-right"
        data-sal-duration="800"
        data-sal-delay="150"
        data-sal-easing="ease-out-back"
        id={props.id}
      > 
        {props.headerText}&nbsp;.
      </SectionHeaderText>
    </div>
  )
}