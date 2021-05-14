import React from 'react';
import { useDispatch } from 'react-redux';
import { resetEVs } from '../../actions/evTrackerActions';
import './EVTrackerFunctions.scss';

export default function EVTrackerFunctions() {
  const dispatch = useDispatch();

  return (
    <div className="ev-tracker-functions">
      <button className="ev-tracker-button" onClick={() => dispatch(resetEVs())}>Reset</button>
    </div>
  );
}