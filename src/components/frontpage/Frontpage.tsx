import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import RuuviChart from '../RuuviChart';
import Datedisplay from '../timepicker/Datedisplay';
import { RootState } from '../../types';

const MainContent = styled.div`
  width: 90%;
  margin: auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Frontpage = () => {
  const measurements = useSelector((state: RootState) => state.measurements.recurring);
  const currentTimeperiod = useSelector((state: RootState) => state.measurements.currentTimeperiod);

  return (
    <>
      <Datedisplay currentTimeperiod={currentTimeperiod} />
      <MainContent>
        {measurements.map((tag) => (
          <RuuviChart
            key={tag[0].data.friendlyname}
            recurringMeasurements={tag.map((measurement) => measurement.data)}
            tagFriendlyName={tag[tag.length - 1].data.friendlyname}
          />
        ))}
      </MainContent>
    </>
  );
};

export default Frontpage;
