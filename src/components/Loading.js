import React from 'react'
import styled from 'styled-components'

const AnimationWrapper = styled.div`
  width: 30%;
  margin: 0 auto;
  padding-top: 40px;
`

const LoadingText = styled.h2`
  font-size: 30px;
  color: #274262;
  font-family: monospace;
`

const Loading = () => {
  return (
    <AnimationWrapper>
      <LoadingText>Loading...</LoadingText>
    </AnimationWrapper>
  )
}

export default Loading
