import React from 'react'
import styled from 'styled-components'


const SectionHeaderText = styled.p`
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
      <SectionHeaderText id={props.id}> 
        {props.headerText}&nbsp;.
      </SectionHeaderText>
    </div>
  )
}