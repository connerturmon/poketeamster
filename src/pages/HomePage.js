import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementEVs, disableMachoBrace, disablePokerus, enableMachoBrace, enablePokerus, incrementEVs, resetEVs } from '../actions/evTrackerActions';
import WildPokemonSelector from '../components/WildPokemonSelector';

export default function HomePage() {
  const EVs = useSelector(state => state.EVs);
  const dispatch = useDispatch();

  return (
    <div className="homepage">
      <ul>
        <li>HP:              {EVs.hitPoints}</li>
        <li>Attack:          {EVs.attack}</li>
        <li>Defense:         {EVs.defense}</li>
        <li>Special Attack:  {EVs.specialAttack}</li>
        <li>Special Defense: {EVs.specialDefense}</li>
        <li>Speed:           {EVs.speed}</li>
      </ul>

      <input
        id="macho-brace-checkbox"
        type="checkbox"
        onChange={event => event.target.checked ? dispatch(enableMachoBrace()) : dispatch(disableMachoBrace())}
      />
      <label htmlFor="macho-brace-checkbox">Macho Brace</label>
      <br/>

      <input
        id="pokerus-checkbox"
        type="checkbox"
        onChange={event => event.target.checked ? dispatch(enablePokerus()) : dispatch(disablePokerus())}
      />
      <label htmlFor="pokerus-checkbox">Pokerus</label>
      <br/>

      <WildPokemonSelector />

      <button onClick={() => dispatch(incrementEVs())}>Add</button>
      <button onClick={() => dispatch(decrementEVs())}>Decrement</button>
      <button onClick={() => dispatch(resetEVs())}>Reset</button>
    </div>
  );
}