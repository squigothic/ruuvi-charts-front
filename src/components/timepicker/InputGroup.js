import React, { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-bottom: 10px;
`

const FlexWrapper = styled.div`
  display: flex;
`

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin-right: 5px;
`

const Label = styled.span`
  margin-bottom: 3px;
  font-size: 12px;
`

const Title = styled.span`
  font-size: 14px;
  margin: 5px 0px;
`

const InputField = styled.input`
  width: 35px;
`

const SubmitButton = styled.button`

`

const InputGroup = ({ title }) => {
  const [year, setYear] = useState('20')
  const [day, setDay] = useState('01')
  const [month, setMonth] = useState('01')
  const [hour, setHour] = useState('00')

  return (
    <Wrapper>
      <Title>{title}</Title>
      <form>
        <FlexWrapper>
          <InputWrapper>
            <Label>Year</Label>
            <InputField
              type="number"
              min="1990"
              max="2030"
              name="startyear"
              value={year}
              onChange={(event) => setYear(event.target.value)}
            />
          </InputWrapper>
          <InputWrapper>
            <Label>Month</Label>
            <InputField
              type="number"
              name="startmonth"
              min="1"
              max="12"
              value={month}
              onChange={(event) => setMonth(event.target.value)}
            />
          </InputWrapper>
          <InputWrapper>
            <Label>Day</Label>
            <InputField
              type="number"
              name="day"
              min="1"
              max="31"
              value={day}
              onChange={(event) => setDay(event.target.value)}
            />
          </InputWrapper>
          <InputWrapper>
            <Label>Hours</Label>
            <InputField
              type="number"
              name="hours"
              value={hour}
              onChange={(event) => setHour(event.target.value)}
            />
          </InputWrapper>
          <SubmitButton type="submit">Submit</SubmitButton>
        </FlexWrapper>
      </form>
    </Wrapper>
  )
}

export default InputGroup
