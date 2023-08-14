import { Pokemon, statSorter } from '../Pokemon.model';

type EntityStatNames = [
  'hp',
  'attack',
  'defense',
  'special-attack',
  'special-defense',
  'speed',
];

export type EntityPokemon = {
  id: number;
  pokedexIndex: number;
  name: string;
  pokemonStatLinks: EntityPokemonStatLink[];
  pokemonTypeLinks: EntityPokemonTypeLink[];
};

type EntityPokemonTypeLink = {
  id: number;
  pokemonId: number;
  typeId: number;
  type: EntityType;
};

type EntityPokemonStatLink = {
  id: number;
  pokemonId: number;
  statId: number;
  value: number;
  stat: EntityStat;
};

type EntityStat = {
  id: number;
  name: EntityStatNames[number];
};

type EntityType = {
  id: number;
  name: string;
};

export const mapToPokemon = (entityPokemon: EntityPokemon): Pokemon => {
  const { pokedexIndex, name, pokemonStatLinks, pokemonTypeLinks } =
    entityPokemon;

  const result = {
    id: pokedexIndex,
    name,
    stats: pokemonStatLinks
      .map(_mapEntityStatLinkToPokemonStat)
      .sort(statSorter),
    types: pokemonTypeLinks.map(_mapPokemonTypeLinkToPokemonType),
  };
  return result;
};

const _mapEntityStatLinkToPokemonStat = (
  entityStatLink: EntityPokemonStatLink,
) => {
  const {
    stat: { name },
    value,
  } = entityStatLink;
  return {
    name,
    base_stat: value,
  };
};

const _mapPokemonTypeLinkToPokemonType = (
  pokemonTypeLink: EntityPokemonTypeLink,
) => {
  const {
    type: { name },
  } = pokemonTypeLink;
  return {
    name,
  };
};
