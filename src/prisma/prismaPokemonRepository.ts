import { PokemonRepository } from '@/PokemonRepository';
import prisma from '@/configuration/db';
import { mapToPokemon } from './PokemonEntity';

const setup = (): PokemonRepository => {
  const getFirstGenPokemon = async () => {
    const result = await prisma.pokemon.findMany({
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
    });
    const pokemon = result.map(mapToPokemon);
    return pokemon;
  };

  return { getFirstGenPokemon };
};

const prismaPokemonRepository = setup();

export default prismaPokemonRepository;
