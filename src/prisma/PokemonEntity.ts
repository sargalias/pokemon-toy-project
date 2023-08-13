import { Pokemon } from '../Pokemon.model';

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
  name: string;
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
    stats: pokemonStatLinks.map(_mapEntityStatLinkToPokemonStat),
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
    base_stat: value,
    effort: 0,
    stat: {
      name,
    },
  };
};

const _mapPokemonTypeLinkToPokemonType = (
  pokemonTypeLink: EntityPokemonTypeLink,
) => {
  const {
    type: { name },
  } = pokemonTypeLink;
  return {
    slot: 0,
    type: {
      name,
    },
  };
};
