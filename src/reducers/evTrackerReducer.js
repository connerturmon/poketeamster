import { INCREMENT_EVS } from "../actions/evTrackerTypes";

const initialEVTrackerState = {
  EVs: {
    hitPoints: 0,
    attack: 0,
    defense: 0,
    specialAttack: 0,
    specialDefense: 0,
    speed: 0
  },
  machoBrace: false,
  pokerus: false
};

export default function evTrackerReducer(state = initialEVTrackerState, action) {
  switch (action.type) {
    case INCREMENT_EVS:
      let multiplier = 1;
      if (state.machoBrace) multiplier *= 2;
      if (state.pokerus) multiplier *= 2;
      return {...state, EVs: {...state.EVs, attack: state.EVs.attack += (1 * multiplier)}}

    default:
      return state;
  }
}