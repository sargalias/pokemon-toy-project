import { Pokemon } from './Pokemon.model';

export type PokemonRepository = {
  getFirstGenPokemon(): Promise<Pokemon[]>;
};
