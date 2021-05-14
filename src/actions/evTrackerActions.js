import { 
  DECREMENT_EVS, 
  DISABLE_MACHO_BRACE, 
  DISABLE_POKERUS, 
  ENABLE_MACHO_BRACE, 
  ENABLE_POKERUS, 
  INCREMENT_EVS, 
  PUSH_POKEMON_LIST, 
  REMOVE_POKEMON_LIST, 
  RESET_EVS, 
  RESET_POKEMON_LIST, 
  SET_WILD_POKEMON 
} from "./evTrackerTypes";

export function incrementEVs(index) {
  return {
    type: INCREMENT_EVS,
    payload: index
  };
}

export function decrementEVs() {
  return {
    type: DECREMENT_EVS
  };
}

export function resetEVs() {
  return {
    type: RESET_EVS
  };
}

export function enablePokerus() {
  return {
    type: ENABLE_POKERUS
  };
}

export function disablePokerus() {
  return {
    type: DISABLE_POKERUS
  };
}

export function enableMachoBrace() {
  return {
    type: ENABLE_MACHO_BRACE
  };
}

export function disableMachoBrace() {
  return {
    type: DISABLE_MACHO_BRACE
  };
}

export function setWildPokemon(pokemon) {
  return {
    type: SET_WILD_POKEMON,
    payload: pokemon
  };
}

export function pushPokemonList(pokemon) {
  return {
    type: PUSH_POKEMON_LIST,
    payload: pokemon
  }
}

export function removePokemonList(index) {
  return {
    type: REMOVE_POKEMON_LIST,
    payload: index
  }
}

export function resetPokemonList() {
  return {
    type: RESET_POKEMON_LIST
  }
}