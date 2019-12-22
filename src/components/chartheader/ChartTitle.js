import React, { useState } from 'react'
import styled from 'styled-components'
import DatePicker, { registerLocale } from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { fi } from 'date-fns/locale';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  line-height: 35px;
`

const Title = styled.h4`
  font-size: 35px;
  @media (max-width: 768px) {
    font-size: 25px;
  }
  margin-bottom: 0.1em;
  margin-top: 0;
  margin-right: 0.2em;
  color: #3089af;
  font-family: helvetica;
`
const DatePickerContainer = styled.div`
  line-height: 35px;
`

const ChartTitle = ({ titleText }) => {
  const [selected, setSelected] = useState(new Date())

  const handleChange = date => {
    setSelected(date)
  }

  registerLocale('fi', fi)

  return (
    <Container>
      <Title>{titleText}</Title>
      <DatePickerContainer>
        <DatePicker
          selected={selected}
          onChange={handleChange}
          showTimeSelect
          locale="fi"
        />
      </DatePickerContainer>
    </Container>
  )

}

export default ChartTitle
