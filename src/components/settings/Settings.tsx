import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState, TagData } from '../../types';
import Loading from '../Loading';
import Tag from './Tag';

const Wrapper = styled.div`
  width: 80%;
  background-color: cyan;
`;

const Title = styled.h1`
  color: #274262;
  font-size: 40px;
  margin-top: 0;
  margin-bottom: 0;
  font-family: 'Helvetica', sans-serif;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const Settings = () => {
  const tags: TagData[] = useSelector((state: RootState) => state.tags);
  console.log(tags);

  return (
    <Wrapper>
      <Title>Settings</Title>
      {tags.length === 0 ? (
        <Loading text="Loading tags" />
      ) : (
        <>
          {tags.map((tag) => (
            <Tag key={tag.tagName} tag={tag} />
          ))}
        </>
      )}
    </Wrapper>
  );
};

export default Settings;
