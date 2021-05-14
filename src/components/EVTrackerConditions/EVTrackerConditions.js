import React from 'react';
import './EVTrackerConditions.scss';

import { disableMachoBrace, disablePokerus, enableMachoBrace, enablePokerus } from '../../actions/evTrackerActions';
import { useDispatch, useSelector } from 'react-redux';

export default function EVTrackerConditions() {
  const {machoBrace, pokerus} = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div className="ev-tracker-conditions">
      <input
        id="macho-brace-checkbox"
        type="checkbox"
        hidden={true}
        onChange={event => event.target.checked ? dispatch(enableMachoBrace()) : dispatch(disableMachoBrace())}
      />
      <label htmlFor="macho-brace-checkbox" className={`ev-tracker-conditions-button ${machoBrace ? 'macho-on' : 'macho-off'}`}>Macho Brace</label>

      <input
        id="pokerus-checkbox"
        type="checkbox"
        hidden={true}
        onChange={event => event.target.checked ? dispatch(enablePokerus()) : dispatch(disablePokerus())}
      />
      <label htmlFor="pokerus-checkbox" className={`ev-tracker-conditions-button ${pokerus ? 'pokerus-on' : 'pokerus-off'}`}>Pokerus</label>
    </div>
  );
}