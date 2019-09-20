import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 17px;
  background-color: ${props => (props.selected ? '#E8ECEF' : 'transparent')};
`
const buttonReset = `
  border: 0;
  padding: 0;
  background-color: transparent;
  outline: none;
`

const ScaleButton = styled.button`
  display: block;
  ${buttonReset}
  font-size: 13px;
  color: blue;
  line-height: 20px;
  font-family: monospace;
  font-weight: 550;
  width: 20px;
  height: 15px;
`

const TimescaleButton = ({ setTimescale, scale, selected, setSelected }) => {
  const handleSelect = () => {
    setTimescale(scale)
    setSelected(scale)
  }

  selected && console.log('valittiin nappi ', scale)

  return (
    <Wrapper selected={selected}>
      <ScaleButton onClick={handleSelect}>{scale}</ScaleButton>
    </Wrapper>
  )
}

export default TimescaleButton
