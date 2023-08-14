import { PokemonRepository } from '@/PokemonRepository';
import prisma from '@/configuration/db';
import { EntityPokemon, mapToPokemon } from './PokemonEntity';
import { Pokemon } from '@/Pokemon.model';

const setup = (): PokemonRepository => {
  const getFirstGenPokemon = async (): Promise<Pokemon[]> => {
    const result = (await prisma.pokemon.findMany({
      include: {
        pokemonTypeLinks: {
          include: {
            type: true,
          },
        },
        pokemonStatLinks: {
          include: {
            stat: true,
          },
        },
      },
      orderBy: {
        pokedexIndex: 'asc',
      },
    })) as unknown as EntityPokemon[];
    const pokemon = result.map(mapToPokemon);
    return pokemon;
  };

  return { getFirstGenPokemon };
};

const prismaPokemonRepository = setup();

export default prismaPokemonRepository;
