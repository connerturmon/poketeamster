import React from 'react';
import { useDispatch } from 'react-redux';
import { decrementEVs, incrementEVs, resetEVs } from '../../actions/evTrackerActions';
import './EVTrackerFunctions.scss';

export default function EVTrackerFunctions() {
  const dispatch = useDispatch();

  return (
    <div className="ev-tracker-functions">
      <button className="ev-tracker-button" onClick={() => dispatch(incrementEVs())}>+1</button>
      <button className="ev-tracker-button" onClick={() => dispatch(decrementEVs())}>-1</button>
      <button className="ev-tracker-button" onClick={() => dispatch(resetEVs())}>Reset</button>
    </div>
  );
}