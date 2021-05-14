import React, { useEffect, useState } from 'react';
import './PokemonSearchBar.scss';
import SelectSearch, { fuzzySearch } from 'react-select-search';
import pokemonData from '../../data/pokemonData.json';
import { useDispatch } from 'react-redux';
import { setWildPokemon } from '../../actions/evTrackerActions';

export default function PokemonSearchBar() {
  const [pokemonValue, setPokemonValue] = useState('001');
  const dispatch = useDispatch();

  const updateWildPokemon = event => {
    setPokemonValue(event);
    const pokemonFound = pokemonData.find(pokemon => pokemon.value === event);
    if (pokemonFound !== undefined)
      dispatch(setWildPokemon(pokemonFound))
    else
      alert('Error selecting pokemon in PokemonSearchBar() component.');
  }

  return (
    <div className="pokemon-search-bar">
      <SelectSearch
        search
        options={pokemonData}
        filterOptions={fuzzySearch}
        name="pokemon"
        value={pokemonValue}
        onChange={updateWildPokemon}
        placeholder="Choose a Pokemon"
      />
    </div>
  )
}