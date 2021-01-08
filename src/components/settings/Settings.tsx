import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { setTags } from '../../reducers/tagReducer';
import { getTags, setToken } from '../../services/tagService';
import { RootState } from '../../types';
import Loading from '../Loading';

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
  const dispatch = useDispatch();
  const tags = useSelector((state: RootState) => state.tags);
  const user = useSelector((state: RootState) => state.user);
  useEffect(() => {
    setToken(user.token);
    getTags(user.username)
      .then((result) => dispatch(setTags(result.data)))
      .catch((error) => console.log('Tag fetch error:', error));
  }, []);

  return (
    <Wrapper>
      <Title>Settings</Title>
      {tags.length === 0 ? (
        <Loading text="Loading tags" />
      ) : (
        tags.map((tag) => <p key={tag.tagName}>{tag.friendlyName}</p>)
      )}
    </Wrapper>
  );
};

export default Settings;
