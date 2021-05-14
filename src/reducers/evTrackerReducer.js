import { DECREMENT_EVS, DISABLE_MACHO_BRACE, DISABLE_POKERUS, ENABLE_MACHO_BRACE, ENABLE_POKERUS, INCREMENT_EVS, PUSH_POKEMON_LIST, REMOVE_POKEMON_LIST, RESET_EVS, SET_WILD_POKEMON } from "../actions/evTrackerTypes";
const pokemonData = require('../data/pokemonData.json');

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
  pokerus: false,
  wildPokemon: pokemonData[0],
  pokemonList: []
};

export default function evTrackerReducer(state = initialEVTrackerState, action) {
  switch (action.type) {
    case INCREMENT_EVS:
      let gain = 1;
      const pokemonToIncrement = state.pokemonList[action.payload];
      if (state.machoBrace) gain *= 2;
      if (state.pokerus) gain *= 2;
      return {
        ...state,
        EVs: {
          ...state.EVs,
          hitPoints: state.EVs.hitPoints += (pokemonToIncrement.hitPoints * gain),
          attack: state.EVs.attack += (pokemonToIncrement.attack * gain),
          defense: state.EVs.defense += (pokemonToIncrement.defense * gain),
          specialAttack: state.EVs.specialAttack += (pokemonToIncrement.specialAttack * gain),
          specialDefense: state.EVs.specialDefense += (pokemonToIncrement.specialDefense * gain),
          speed: state.EVs.speed += (pokemonToIncrement.speed * gain),
        }
      }

    case DECREMENT_EVS:
      let reduction = 1;
      if (state.machoBrace) reduction *= 2;
      if (state.pokerus) reduction *= 2;
      return {
        ...state,
        EVs: {
          ...state.EVs,
          hitPoints: state.EVs.hitPoints -= (state.wildPokemon.hitPoints * reduction),
          attack: state.EVs.attack -= (state.wildPokemon.attack * reduction),
          defense: state.EVs.defense -= (state.wildPokemon.defense * reduction),
          specialAttack: state.EVs.specialAttack -= (state.wildPokemon.specialAttack * reduction),
          specialDefense: state.EVs.specialDefense -= (state.wildPokemon.specialDefense * reduction),
          speed: state.EVs.speed -= (state.wildPokemon.speed * reduction),
        }
      }

    case RESET_EVS:
      return {
        ...state,
        EVs: {
          hitPoints: 0,
          attack: 0,
          defense: 0,
          specialAttack: 0,
          specialDefense: 0,
          speed: 0
        }
      }

    case SET_WILD_POKEMON:
      return { ...state, wildPokemon: action.payload }

    case ENABLE_MACHO_BRACE:
      return { ...state, machoBrace: true }

    case DISABLE_MACHO_BRACE:
      return { ...state, machoBrace: false }

    case ENABLE_POKERUS:
      return { ...state, pokerus: true }

    case DISABLE_POKERUS:
      return { ...state, pokerus: false }

    case PUSH_POKEMON_LIST:
      const newList = state.pokemonList;
      newList.push(action.payload);
      return { ...state, pokemonList: newList }

    case REMOVE_POKEMON_LIST:
      console.log(action.payload);
      const splicedList = state.pokemonList;
      splicedList.splice(action.payload, 1);
      return { ...state, pokemonList: splicedList }

    default:
      return state;
  }
}