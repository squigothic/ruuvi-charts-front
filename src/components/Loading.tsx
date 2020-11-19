import React from 'react';
import styled from 'styled-components';

const AnimationWrapper = styled.div`
  padding-top: 40px;
  display: flex;
  justify-content: center;
`;

const LoadingText = styled.h2`
  font-size: 30px;
  color: #274262;
  font-family: monospace;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
type Props = {
  text: string;
};

const Loading = ({ text }: Props) => {
  return (
    <AnimationWrapper>
      <LoadingText>{text}</LoadingText>
    </AnimationWrapper>
  );
};

export default Loading;
