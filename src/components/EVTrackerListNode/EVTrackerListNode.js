import React from 'react';
import { useDispatch } from 'react-redux';
import { removePokemonList } from '../../actions/evTrackerActions';
import './EVTrackerListNode.scss';

export default function EVTrackerListNode({ pokemon, index }) {
  const dispatch = useDispatch();

  return (
    <div className="ev-tracker-list-node">
      <p className="ev-tracker-list-node-name">{pokemon.name}</p>
      <button className="ev-tracker-list-node-remove" onClick={() => dispatch(removePokemonList(index))}>Remove</button>
    </div>
  );
}