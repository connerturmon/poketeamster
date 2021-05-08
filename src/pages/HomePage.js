import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementEVs } from '../actions/evTrackerActions';

export default function HomePage() {
  const EVs = useSelector(state => state.EVs);
  const dispatch = useDispatch();

  return (
    <div className="homepage">
      <ul>
        <li>HP: {EVs.hitPoints}</li>
        <li>Attack: {EVs.attack}</li>
        <li>Defense: {EVs.defense}</li>
        <li>Special Attack: {EVs.specialAttack}</li>
        <li>Special Defense: {EVs.specialDefense}</li>
        <li>Speed: {EVs.speed}</li>
      </ul>
      <button onClick={() => dispatch(incrementEVs())}>Add</button>
    </div>
  );
}