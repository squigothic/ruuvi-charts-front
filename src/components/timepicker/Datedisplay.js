import React, { useState } from 'react'
import styled from 'styled-components'
import Timepicker from './Timepicker'

const Wrapper = styled.div`
  height: 60px;
  padding: 0 5px;
  font-family: 'Helvetica', sans-serif;
  position: sticky;
  top: 0;
  background: #e8ecef;
`

const TitleContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
`

const ToggleButton = styled.button`
  height: 30px;
  background: white;
  border: 2px solid #274262;
  border-radius: 3px;
  color: #274262;
`

const CurrentTimePeriod = styled.span`
  font-size: 22px;
`

const Datedisplay = ({ getTimeperiod }) => {
  const [pickerVisible, setPickerVisible] = useState(false)

  return (
    <Wrapper>
      <TitleContainer>
        <CurrentTimePeriod>Timeperiod:</CurrentTimePeriod>
        <ToggleButton onClick={() => setPickerVisible(!pickerVisible)} >Pick date</ToggleButton>

      </TitleContainer>
      {pickerVisible
        ? <Timepicker getTimeperiod={getTimeperiod} />
        : null
      }
    </Wrapper>
  )
}

export default Datedisplay
