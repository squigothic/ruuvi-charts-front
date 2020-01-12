import React, { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: absolute;
  top: 60px;
  right: 0%;
  background: lightgray;
  padding: 5px 5px;
  @media (min-width: 768px) {
    width: 20%;
  }
  
`

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const StarDateWrapper = styled.div`
  display: flex;
  width: 100%;
`

const EndDateWrapper = styled.div`
  display: flex;
  width: 100%;
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
  margin-top: 10px;
`

const Timepicker = ({ getTimeperiod }) => {
  const [year, setYear] = useState('20')
  const [day, setDay] = useState('01')
  const [month, setMonth] = useState('01')
  const [hour, setHour] = useState('00')
  const [endyear, setYearEnd] = useState('20')
  const [endday, setDayEnd] = useState('01')
  const [endmonth, setMonthEnd] = useState('01')
  const [endhour, setHourEnd] = useState('00')

  const handleSubmit = (event) => {
    event.preventDefault()
    const beginning = new Date(`20${year}-${month}-${day}T${hour}:00:00`)
    const end = new Date(`20${endyear}-${endmonth}-${endday}T${endhour}:00:00`)
    const timeperiod = {
      beginning,
      end
    }
    getTimeperiod(timeperiod)
  }

  return (
    <Wrapper>
      <Title>Start</Title>
      <form onSubmit={handleSubmit}>
        <FlexWrapper>
          <StarDateWrapper>
            <InputWrapper>
              <Label>Year</Label>
              <InputField
                type="number"
                min="20"
                max="30"
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
                name="startday"
                min="1"
                max="31"
                value={day}
                onChange={(event) => setDay(event.target.value)}
              />
            </InputWrapper>
            <InputWrapper>
              <Label>Hour</Label>
              <InputField
                type="number"
                name="starthour"
                value={hour}
                onChange={(event) => setHour(event.target.value)}
              />
            </InputWrapper>
          </StarDateWrapper>
          <Title>End</Title>
          <EndDateWrapper>
            <InputWrapper>
              <Label>Year</Label>
              <InputField
                type="number"
                min="20"
                max="30"
                name="year"
                value={endyear}
                onChange={(event) => setYearEnd(event.target.value)}
              />
            </InputWrapper>
            <InputWrapper>
              <Label>Month</Label>
              <InputField
                type="number"
                name="month"
                min="1"
                max="12"
                value={endmonth}
                onChange={(event) => setMonthEnd(event.target.value)}
              />
            </InputWrapper>
            <InputWrapper>
              <Label>Day</Label>
              <InputField
                type="number"
                name="day"
                min="1"
                max="31"
                value={endday}
                onChange={(event) => setDayEnd(event.target.value)}
              />
            </InputWrapper>
            <InputWrapper>
              <Label>Hour</Label>
              <InputField
                type="number"
                name="hour"
                value={endhour}
                onChange={(event) => setHourEnd(event.target.value)}
              />
            </InputWrapper>
          </EndDateWrapper>
          <SubmitButton type="submit">Submit</SubmitButton>
        </FlexWrapper>
      </form>
    </Wrapper>
  )
}

export default Timepicker
