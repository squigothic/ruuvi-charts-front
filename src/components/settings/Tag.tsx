import React, { useState } from 'react';
import styled from 'styled-components';
import { TagData } from '../../types';
import Button from '../common/Button';

const Wrapper = styled.div`
  display: flex;
  padding-top: 9px;
  padding-bottom: 5px;
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
  const [isEditable, setIsEditable] = useState(false);
  const [friendlyname, setFriendlyname] = useState(tag.friendlyName);
  const [mac, setMac] = useState(tag.mac);
  const [low, setLow] = useState(tag.low?.value);
  const [isLowActive, setIsLowActive] = useState(tag.low?.activated || false);
  const [high, setHigh] = useState(tag.high?.value);
  const [isHighActive, setIsHighActive] = useState(tag.high?.activated || false);

  const handleSubmit = () => {
    setIsEditable(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, setter: Function) => {
    setter(event.target.value);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
          <Friendlyname>{tag.friendlyName}</Friendlyname>
          <Mac>{tag.mac}</Mac>
          <Low>{tag.low?.value}</Low>
          <Activated>{tag.low?.activated === true ? <>&#9745;</> : <>&#9744;</>}</Activated>
          <High>{tag.high?.value}</High>
          <Activated>{tag.high?.activated === true ? <>&#9745;</> : <>&#9744;</>}</Activated>
          <Button onClick={() => setIsEditable(true)}>Edit</Button>
        </>
      ) : (
        <>
          <form onSubmit={() => handleSubmit()}>
            <input
              type="text"
              value={friendlyname}
              onChange={(event) => handleChange(event, setFriendlyname)}
            />
            <input type="text" value={mac} onChange={(event) => handleChange(event, setMac)} />
            <input type="number" value={low} onChange={(event) => handleChange(event, setLow)} />
            <input
              type="checkbox"
              value="low"
              checked={isLowActive}
              onChange={(event) => handleCheckboxChange(event)}
            />
            <input type="number" value={high} onChange={(event) => handleChange(event, setHigh)} />
            <input
              type="checkbox"
              value="high"
              checked={isHighActive}
              onChange={(event) => handleCheckboxChange(event)}
            />

            <button type="submit">save</button>
          </form>
        </>
      )}
    </Wrapper>
  );
};
export default Tag;
