import React from 'react'
import styled from 'styled-components'

const AnimationWrapper = styled.div`
  padding-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LoadingText = styled.h2`
  font-size: 30px;
  color: #274262;
  font-family: monospace;
`

const Loading = ({ text }) => {
  return (
    <AnimationWrapper>
      <LoadingText>{text}</LoadingText>
    </AnimationWrapper>
  )
}

export default Loading
