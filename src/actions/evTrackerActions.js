import { 
  DECREMENT_EVS, 
  DISABLE_MACHO_BRACE, 
  DISABLE_POKERUS, 
  ENABLE_MACHO_BRACE, 
  ENABLE_POKERUS, 
  INCREMENT_EVS, 
  RESET_EVS, 
  SET_WILD_POKEMON 
} from "./evTrackerTypes";

export function incrementEVs() {
  return {
    type: INCREMENT_EVS
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

export function setWildPokemon() {
  return {
    type: SET_WILD_POKEMON
  };
}