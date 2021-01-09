import React from 'react';
import styled from 'styled-components';
import { TagData } from '../../types';

const Wrapper = styled.div`
  display: flex;
  padding-top: 10px;
  border-bottom: 1px solid #274262;
`;

const Friendlyname = styled.div`
  min-width: 100px;
  font-weight: bold;
`;

const Mac = styled.div`
  min-width: 160px;
`;

const Low = styled.div`
  width: 100px;
`;

const High = styled.div`
  width: 100px;
`;

const Activated = styled.div`
  width: 100px;
`;

const Tag = ({ tag }: { tag: TagData }) => {
  return (
    <Wrapper>
      <Friendlyname>{tag.friendlyName}</Friendlyname>
      <Mac>{tag.mac}</Mac>
      <Low>{tag.low?.value}</Low>
      <Activated>{tag.low?.activated === true ? <>&#9745;</> : <>&#9746;</>}</Activated>
      <High>{tag.high?.value}</High>
      <Activated>{tag.high?.activated === true ? <>&#9745;</> : <>&#9746;</>}</Activated>
    </Wrapper>
  );
};
export default Tag;
