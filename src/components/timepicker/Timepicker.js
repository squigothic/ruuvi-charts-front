import React, { useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import Notification from '../Notification'
import { getTimeperiod } from '../../reducers/measurementsReducer'
import { showNotification } from '../../reducers/notificationReducer'

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

const Timepicker = ({ getTimeperiod, showNotification, notification }) => {
  const [year, setYear] = useState('20')
  const [day, setDay] = useState('01')
  const [month, setMonth] = useState('01')
  const [hour, setHour] = useState('00')
  const [endyear, setYearEnd] = useState('20')
  const [endday, setDayEnd] = useState('01')
  const [endmonth, setMonthEnd] = useState('01')
  const [endhour, setHourEnd] = useState('00')

  const checkDateValidity = (beginning, end) => {
    if (
      beginning.match(/(\d{4})-(\d{2})-(\d{2})T(\d{2})/) &&
      end.match(/(\d{4})-(\d{2})-(\d{2})T(\d{2})/)
    ) {
      return true
    }
    return false
  }

  const getAndformatTimezone = () => {
    const offset = (new Date().getTimezoneOffset() / 60).toString()
    const sign = offset.charAt(0) === '-' ? '+' : '-'
    const hours = sign === '-' ? offset : offset.slice(1)
    const timezone = offset > 9 ? `${sign}${hours}:00` : `${sign}0${hours}:00`
    return timezone
  }

  const handleSubmit = event => {
    event.preventDefault()
    const beginning = `20${year}-${month}-${day}T${hour}:00:00${getAndformatTimezone()}`
    const end = `20${endyear}-${endmonth}-${endday}T${endhour}:00:00${getAndformatTimezone()}`
    if (!checkDateValidity(beginning, end)) {
      showNotification('Date(s) malformed', 4)
      return
    }
    if (new Date(beginning.concat(':00:00')) > new Date(end.concat(':00:00'))) {
      showNotification('Beginning is later than end', 4)
      return
    }
    const timeperiod = {
      beginning,
      end,
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
                onChange={event => setYear(event.target.value)}
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
                onChange={event => setMonth(event.target.value)}
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
                onChange={event => setDay(event.target.value)}
              />
            </InputWrapper>
            <InputWrapper>
              <Label>Hour</Label>
              <InputField
                type="number"
                name="starthour"
                value={hour}
                onChange={event => setHour(event.target.value)}
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
                onChange={event => setYearEnd(event.target.value)}
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
                onChange={event => setMonthEnd(event.target.value)}
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
                onChange={event => setDayEnd(event.target.value)}
              />
            </InputWrapper>
            <InputWrapper>
              <Label>Hour</Label>
              <InputField
                type="number"
                name="hour"
                value={endhour}
                onChange={event => setHourEnd(event.target.value)}
              />
            </InputWrapper>
          </EndDateWrapper>
          <SubmitButton type="submit">Submit</SubmitButton>
          {notification.status === true && (
            <Notification message={notification.content} />
          )}
        </FlexWrapper>
      </form>
    </Wrapper>
  )
}

const mapStateToProps = state => {
  return {
    notification: state.notification,
  }
}

const mapDispatchToProps = {
  getTimeperiod,
  showNotification,
}

export default connect(mapStateToProps, mapDispatchToProps)(Timepicker)
