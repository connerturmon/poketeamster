import React from 'react';
import { useSelector } from 'react-redux';
import EVTrackerListNode from '../EVTrackerListNode/EVTrackerListNode';
import './EVTrackerList.scss';

export default function EVTrackerList() {
  const { pokemonList } = useSelector(state => state);

  return (
    <div className="ev-tracker-list">
      {pokemonList.map((pokemon, id) => (
        <EVTrackerListNode key={id} index={id} pokemon={pokemon} />
      ))}
    </div>
  );
}