import React from 'react';
import { useSelector } from 'react-redux';
import RuuviChart from '../RuuviChart';
import Datedisplay from '../timepicker/Datedisplay';
import { RootState } from '../../types';
import Loading from '../Loading';

const Frontpage = () => {
  const measurements = useSelector((state: RootState) => state.measurements.recurring);
  const currentTimeperiod = useSelector((state: RootState) => state.measurements.currentTimeperiod);

  return (
    <>
      <Datedisplay currentTimeperiod={currentTimeperiod} />
      {measurements.length !== 0 ? (
        measurements.map((tag) => (
          <RuuviChart
            key={tag[0].data.friendlyname}
            recurringMeasurements={tag.map((measurement) => measurement.data)}
            tagFriendlyName={tag[tag.length - 1].data.friendlyname}
          />
        ))
      ) : (
        <Loading text="No data available for selected timeperiod" />
      )}
    </>
  );
};

export default Frontpage;
