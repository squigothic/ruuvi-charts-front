import React, { useState } from 'react';
import styled from 'styled-components';
import TimescaleButton from './TimescaleButton';

const Wrapper = styled.div`
  display: flex;
  margin-top: 10px;
  padding-left: 5px;
  width: 75px;
  justify-content: space-between;
`;
const TimescaleSelector = ({
  setTimescale,
}: {
  setTimescale: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const scales = [24, 12, 2];
  const [selected, setSelected] = useState(24);
  return (
    <Wrapper>
      {scales.map((number) => (
        <TimescaleButton
          key={number}
          setTimescale={setTimescale}
          setSelected={setSelected}
          scale={number}
          selected={selected === number}
        />
      ))}
    </Wrapper>
  );
};

export default TimescaleSelector;
