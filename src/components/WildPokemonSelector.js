import React from 'react';
import { useDispatch } from 'react-redux';
import { setWildPokemon } from '../actions/evTrackerActions';
import pokemonData from '../data/pokemonData';

export default function WildPokemonSelector() {
  const dispatch = useDispatch();

  // This maps all the options to each pokemon in the pokemonData array.
  // It passes the pokemon's ID as the value so that the ID can be grabbed
  // when the selector is changed. This is used to dispatch the propper pokemon
  // to the store.
  return (
    <div className="wild-pokemon-selector">
      <label htmlFor="wild-pokemon-selector">Wild Pokemon: </label>
      <select
        name="wild-pokemon"
        id="wild-pokemon-selector"
        onChange={event => {
          event.preventDefault();
          console.log(event.target.value);
          console.log(pokemonData[event.target.value]);
          dispatch(setWildPokemon(pokemonData[event.target.value]));
        }}>
        
        {pokemonData.map((pokemon, id) => (
          <option key={id} value={id}>{pokemon.id}: {pokemon.name}</option>
        ))}

      </select>
    </div>
  );
}