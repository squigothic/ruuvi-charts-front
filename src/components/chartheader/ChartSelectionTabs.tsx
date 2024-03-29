import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 25px;
  align-self: flex-end;
  justify-content: center;
  align-items: center;
`;

const Tab = styled.div<{ background: boolean }>`
  height: 100%;
  padding: 0 10px 0 10px;
  font-family: helvetica;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.background ? '#e8ecef' : '#d7dce0')};
`;

const ChartSelectionTabs = ({
  changeView,
}: {
  changeView: (selection: 'recurring' | 'average') => void;
}) => {
  const [selectedTab, setSelectedTab] = useState('recurring');

  const handleClick = (selection: 'recurring' | 'average') => {
    setSelectedTab(selection);
    changeView(selection);
  };

  return (
    <Wrapper>
      <Tab onClick={() => handleClick('recurring')} background={selectedTab === 'recurring'}>
        All
      </Tab>
      <Tab onClick={() => handleClick('average')} background={selectedTab === 'average'}>
        Averages
      </Tab>
    </Wrapper>
  );
};

export default ChartSelectionTabs;
