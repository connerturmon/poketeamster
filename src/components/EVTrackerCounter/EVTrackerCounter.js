import React from 'react';
import { useSelector } from 'react-redux';
import './EVTrackerCounter.scss';

export default function EVTrackerCounter() {
  const { EVs } = useSelector(state => state);

  return (
    <div className="ev-tracker-counter">
      <h1 className="ev-tracker-counter-header">PokémonTeamster</h1>

      <div className="ev-tracker-counter-row">
        <h3 className="ev-tracker-counter-row-stat stat-hitpoints">Hit Points</h3>
        <h3 className="ev-tracker-counter-row-quantity">{EVs.hitPoints}</h3>
      </div>

      <div className="ev-tracker-counter-row">
        <h3 className="ev-tracker-counter-row-stat stat-attack">Attack</h3>
        <h3 className="ev-tracker-counter-row-quantity">{EVs.attack}</h3>
      </div>

      <div className="ev-tracker-counter-row">
        <h3 className="ev-tracker-counter-row-stat stat-defense">Defense</h3>
        <h3 className="ev-tracker-counter-row-quantity">{EVs.defense}</h3>
      </div>

      <div className="ev-tracker-counter-row">
        <h3 className="ev-tracker-counter-row-stat stat-special-attack">Special Attack</h3>
        <h3 className="ev-tracker-counter-row-quantity">{EVs.specialAttack}</h3>
      </div>

      <div className="ev-tracker-counter-row">
        <h3 className="ev-tracker-counter-row-stat stat-special-defense">Special Defense</h3>
        <h3 className="ev-tracker-counter-row-quantity">{EVs.specialDefense}</h3>
      </div>

      <div className="ev-tracker-counter-row">
        <h3 className="ev-tracker-counter-row-stat stat-speed">Speed</h3>
        <h3 className="ev-tracker-counter-row-quantity">{EVs.speed}</h3>
      </div>

    </div>
  );
}