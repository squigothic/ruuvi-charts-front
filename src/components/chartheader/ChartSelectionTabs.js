import React, { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 10px;
  
  height: 25px;
  align-self: flex-end;
  justify-content: center;
  align-items: center;
  border-top: 1px solid black;
  border-right: 1px solid black;
  border-left: 1px solid black;
`

const Tab = styled.div`
  height: 100%;
  padding: 0 10px 0 10px;
  font-family: helvetica;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.background ? '#e8ecef': 'white'};
`

const ChartSelectionTabs = ({ changeView }) => {
  const [selectedTab, setSelectedTab] = useState('recurring')
  
  const handleClick = selection  => {
    setSelectedTab(selection)
    changeView(selection)
  }

  return (
    <Wrapper>
      <Tab onClick={() => handleClick('recurring')} background={selectedTab === 'recurring'}>All</Tab>
      <Tab onClick={() => handleClick('average')} background={selectedTab === 'average'}>Averages</Tab>
    </Wrapper>
  )
}

export default ChartSelectionTabs
