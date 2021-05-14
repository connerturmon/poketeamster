import React from 'react';
import './EVTracker.scss';

import EVTrackerFunctions from '../EVTrackerFunctions/EVTrackerFunctions';
import EVTrackerConditions from '../EVTrackerConditions/EVTrackerConditions';
import EVTrackerCounter from '../EVTrackerCounter/EVTrackerCounter';
import PokemonSearchBar from '../PokemonSearchBar/PokemonSearchBar';

export default function EVTracker() {
  return (
    <div className="ev-tracker">
      <EVTrackerCounter />
      <PokemonSearchBar />
      <EVTrackerConditions />
      <EVTrackerFunctions />
    </div>
  );
}