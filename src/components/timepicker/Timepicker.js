import React, { useState, useEffect } from 'react'
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

const Timepicker = ({ getTimeperiod, showNotification, notification, toggle, measurements }) => {
  const [year, setYear] = useState('')
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [hour, setHour] = useState('')
  const [endyear, setYearEnd] = useState('')
  const [endday, setDayEnd] = useState('')
  const [endmonth, setMonthEnd] = useState('')
  const [endhour, setHourEnd] = useState('')


  useEffect(() => {
    const beginningData = JSON.parse(measurements[0][0].data)
    const endData = JSON.parse(measurements[0][measurements[0].length - 1].data)
    const beginning = new Date(beginningData.timestamp * 1000)
    const end = new Date(endData.timestamp * 1000)
    setYear(String(beginning.getFullYear()).slice(2))
    setMonth(beginning.getMonth())
    setDay(beginning.getDate())
    setHour(beginning.getHours())
    setYearEnd(String(end.getFullYear()).slice(2))
    setMonthEnd(end.getMonth())
    setDayEnd(end.getDate())
    setHourEnd(end.getHours())
  }, [measurements])

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
    const formYear = String(year.length) > 2 ? String(year).slice(2) : year
    const formMonth = String(month).length < 2 ? `0${month}` : month
    const formDay = String(day).length < 2 ? `0${day}` : day
    const formHour = String(hour).length < 2 ? `0${hour}` : hour
    const formEndYear = String(endyear).length > 2 ? String(endyear).slice(2) : endyear
    const formEndMonth = String(endmonth).length < 2 ? `0${endmonth}` : endmonth
    const formEndDay = String(endday).length < 2 ? `0${endday}` : endday
    const formEndHour = String(endhour).length < 2 ? `0${endhour}` : endhour

    const beginning = `20${formYear}-${formMonth}-${formDay}T${formHour}:00:00${getAndformatTimezone()}`
    const end = `20${formEndYear}-${formEndMonth}-${formEndDay}T${formEndHour}:00:00${getAndformatTimezone()}`
    if (!checkDateValidity(beginning, end)) {
      showNotification('Date(s) malformed', 4)
      return
    }
    if (new Date(beginning) > new Date(end)) {
      showNotification('Beginning is later than end', 4)
      return
    }
    const timeperiod = {
      beginning,
      end,
    }
    getTimeperiod(timeperiod)
    toggle()
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
    measurements: state.measurements.data
  }
}

const mapDispatchToProps = {
  getTimeperiod,
  showNotification,
}



export default connect(mapStateToProps, mapDispatchToProps)(Timepicker)
