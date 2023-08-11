import { Pokemon } from '../../Pokemon.model';

type ApiStat = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
};

type ApiType = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

export type ApiPokemon = {
  id: number;
  name: string;
  stats: ApiStat[];
  types: ApiType[];
};

export const mapToPokemon = (pokemonApiData: ApiPokemon): Pokemon => {
  const { id, name, stats, types } = pokemonApiData;
  const pokemon: Pokemon = {
    id,
    name,
    stats,
    types,
  };
  return pokemon;
};
