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
  font-size: 16px;
`

const Datedisplay = ({ currentTimeperiod }) => {
  const [pickerVisible, setPickerVisible] = useState(false)

  const formatTime = dateString => {
    const date = new Date(dateString)
    if (!dateString) {
      return null
    }
    return `${date.getDate()}.${date.getMonth() + 1}.${String(date.getFullYear()).slice(2)} ${date.getHours()}:00`
  }

  return (
    <Wrapper>
      <TitleContainer>
        <CurrentTimePeriod>Timeperiod: {currentTimeperiod?.beginning !== undefined
          ? (formatTime(currentTimeperiod?.beginning) + ' – ' + formatTime(currentTimeperiod?.end))
          : 'Last 24 hours'}
        </CurrentTimePeriod>
        <ToggleButton onClick={() => setPickerVisible(!pickerVisible)}>
          Pick date
        </ToggleButton>
      </TitleContainer>
      {pickerVisible ? <Timepicker toggle={setPickerVisible} /> : null}
    </Wrapper>
  )
}

export default Datedisplay
