import React, { useState } from 'react'
import styled from 'styled-components'
import Timepicker from './Timepicker'

const Wrapper = styled.div`
  margin: 0 5px 15px 5px;
  font-family: 'Helvetica', sans-serif;
`

const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  line-height: 21px;
  font-size: 16px;
`

const ToggleButton = styled.button`
  background: white;
  border: 2px solid #274262;
  border-radius: 3px;
  color: #274262;
`

const Datedisplay = () => {
  const [pickerVisible, setPickerVisible] = useState(false)

  return (
    <Wrapper>
      <TitleContainer>
        Timeperiod:
        <ToggleButton onClick={() => setPickerVisible(!pickerVisible)} >Pick date</ToggleButton>

      </TitleContainer>
      {pickerVisible
        ? <Timepicker />
        : null
      }
    </Wrapper>
  )
}

export default Datedisplay
