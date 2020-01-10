import React from 'react'
import styled from 'styled-components'

import InputGroup from './InputGroup'

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

const Timepicker = () => {

  return (
    <Wrapper>
      <InputGroup title={'Start'} />
      <InputGroup title={'End'} />
    </Wrapper>
  )
}

export default Timepicker
