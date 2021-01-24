import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { updateTag } from '../../reducers/tagReducer';
import { RootState, TagData } from '../../types';
import Button from '../common/Button';
import { updateTag as updateRemoteTag } from '../../services/tagService';

const Wrapper = styled.div`
  display: flex;
  padding-bottom: 5px;
  padding-top: 8px;
  border-bottom: 1px solid #274262;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Friendlyname = styled.div`
  min-width: 120px;
  font-weight: bold;
  vertical-align: middle;
  @media (max-width: 768px) {
    padding-top: 7px;
    display: flex;
    flex-direction: row;
  }
`;

const Mac = styled.div`
  min-width: 160px;
  vertical-align: middle;
  @media (max-width: 768px) {
    padding-top: 7px;
    display: flex;
    flex-direction: row;
  }
`;

const Low = styled.div`
  width: 100px;
  @media (max-width: 768px) {
    width: 600px;
    vertical-align: middle;
    padding-top: 7px;
    display: flex;
    flex-direction: row;
  }
`;

const High = styled.div`
  width: 100px;
  @media (max-width: 768px) {
    width: 600px;
    vertical-align: middle;
    padding-top: 7px;
    display: flex;
    flex-direction: row;
  }
`;

const Activated = styled.div`
  width: 85px;
  vertical-align: middle;
  @media (max-width: 768px) {
    padding-top: 7px;
    display: flex;
    flex-direction: row;
  }
`;

const CheckboxWrapper = styled.div`
  margin-top: -4px;
`;

const MobileLabel = styled.div`
  display: none;
  vertical-align: middle;
  @media (max-width: 768px) {
    display: inline-block;
    padding-right: 10px;
    padding-left: 10px;
  }
`;

const UpdateForm = styled.form`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const InputWrapper = styled.div`
  @media (max-width: 768px) {
    flex-direction: row;
    padding-top: 4px;
  }
`;

const FriendlyInput = styled.input`
  width: 105px;
  margin-right: 5px;
`;

const MacInput = styled.input`
  width: 147px;
  margin-right: 5px;
`;

const LowInput = styled.input`
  width: 85px;
  margin-right: 5px;
`;

const HighInput = styled.input`
  width: 85px;
  margin-right: 5px;
`;

const ActiveInput = styled.input`
  margin-right: 70px;
`;

const Tag = ({ tag }: { tag: TagData }) => {
  const [isEditable, setIsEditable] = useState(false);
  const [hasChanged, setHasChanged] = useState(false);
  const [friendlyname, setFriendlyname] = useState(tag.friendlyName);
  const [mac, setMac] = useState(tag.mac);
  const [low, setLow] = useState(tag.low?.value || 0);
  const [isLowActive, setIsLowActive] = useState(tag.low?.activated || false);
  const [high, setHigh] = useState(tag.high?.value || 0);
  const [isHighActive, setIsHighActive] = useState(tag.high?.activated || false);

  const dispatch = useDispatch();
  console.log('renderöin tagin');
  const username = useSelector((state: RootState) => state.user.username);

  const handleSubmit = () => {
    if (hasChanged === false) {
      setIsEditable(false);
      return;
    }
    console.log('submit');
    setIsEditable(false);
    setHasChanged(false);
    const editedTag = {
      tagName: tag.tagName,
      mac,
      friendlyName: friendlyname,
      englishName: tag.englishName,
      high: {
        activated: isHighActive,
        triggered: tag.high?.triggered,
        value: high,
      },
      low: {
        activated: isLowActive,
        triggered: tag.low?.triggered,
        value: low,
      },
    };
    dispatch(updateTag([editedTag]));
    updateRemoteTag(username, editedTag, tag.tagName);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, setter: Function) => {
    setHasChanged(true);
    setter(event.target.value);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHasChanged(true);
    switch (event.target.value) {
      case 'low':
        setIsLowActive(!isLowActive);
        break;
      case 'high':
        setIsHighActive(!isHighActive);
        break;
      default:
        return null;
    }
  };
  return (
    <Wrapper>
      {isEditable === false ? (
        <>
          <Friendlyname>
            <MobileLabel>Name: </MobileLabel>
            {tag.friendlyName}
          </Friendlyname>
          <Mac>
            <MobileLabel>Mac: </MobileLabel>
            {tag.mac}
          </Mac>
          <Low>
            <MobileLabel>Lower limit: </MobileLabel>
            {tag.low?.value || 'not set'}
          </Low>
          <Activated>
            <MobileLabel>Activated: </MobileLabel>
            <CheckboxWrapper>
              {tag.low?.activated === true ? <>&#9745;</> : <>&#9744;</>}
            </CheckboxWrapper>
          </Activated>
          <High>
            <MobileLabel>Higher limit: </MobileLabel>
            {tag.high?.value || 'not set'}
          </High>
          <Activated>
            <MobileLabel>Activated: </MobileLabel>
            <CheckboxWrapper>
              {tag.high?.activated === true ? <>&#9745;</> : <>&#9744;</>}
            </CheckboxWrapper>
          </Activated>
          <Button onClick={() => setIsEditable(true)} marginTop={5}>
            Edit
          </Button>
        </>
      ) : (
        <>
          <UpdateForm onSubmit={() => handleSubmit()}>
            <InputWrapper>
              <MobileLabel>Name: </MobileLabel>
              <FriendlyInput
                type="text"
                value={friendlyname}
                onChange={(event) => handleChange(event, setFriendlyname)}
              />
            </InputWrapper>
            <InputWrapper>
              <MobileLabel>Mac: </MobileLabel>
              <MacInput type="text" value={mac} onChange={(event) => handleChange(event, setMac)} />
            </InputWrapper>
            <InputWrapper>
              <MobileLabel>Lower limit: </MobileLabel>
              <LowInput
                type="number"
                value={low}
                disabled={!isLowActive}
                onChange={(event) => handleChange(event, setLow)}
              />
            </InputWrapper>
            <InputWrapper>
              <MobileLabel>Activated: </MobileLabel>
              <ActiveInput
                type="checkbox"
                value="low"
                checked={isLowActive}
                onChange={(event) => handleCheckboxChange(event)}
              />
            </InputWrapper>
            <InputWrapper>
              <MobileLabel>Higher limit: </MobileLabel>
              <HighInput
                type="number"
                value={high}
                disabled={!isHighActive}
                onChange={(event) => handleChange(event, setHigh)}
              />
            </InputWrapper>
            <InputWrapper>
              <MobileLabel>Activated: </MobileLabel>
              <ActiveInput
                type="checkbox"
                value="high"
                checked={isHighActive}
                onChange={(event) => handleCheckboxChange(event)}
              />
            </InputWrapper>
            <Button type="submit" marginTop={5}>
              Save
            </Button>
          </UpdateForm>
          <Button type="button" marginTop={5} onClick={() => setIsEditable(false)}>
            Cancel
          </Button>
        </>
      )}
    </Wrapper>
  );
};
export default Tag;
