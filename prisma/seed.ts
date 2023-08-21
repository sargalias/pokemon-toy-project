import { PrismaClient } from '@prisma/client';
import { ApiPokemon } from './pokemonApiClient/Client.model';
import jsonPokemonData from '../pokemonData.json';

// Using this instead of making network requests for internet politeness
// Otherwise, we can import and use the pokemonApiClient in src
const pokemonData = JSON.parse(jsonPokemonData) as ApiPokemon[];

const prisma = new PrismaClient();

async function main() {
  for (let i = 0; i < pokemonData.length; i++) {
    const { id, name, stats, types } = pokemonData[i];

    const pokemonTypeLinksCreateObject = types.map((type) => {
      return {
        type: {
          connectOrCreate: {
            create: {
              name: type.type.name,
            },
            where: {
              name: type.type.name,
            },
          },
        },
      };
    });

    const pokemonStatLinksCreateObject = stats.map((stat) => {
      return {
        value: stat.base_stat,
        stat: {
          connectOrCreate: {
            create: {
              name: stat.stat.name,
            },
            where: {
              name: stat.stat.name,
            },
          },
        },
      };
    });

    await prisma.pokemon.create({
      data: {
        name,
        pokedexIndex: id,
        pokemonTypeLinks: {
          create: pokemonTypeLinksCreateObject,
        },
        pokemonStatLinks: {
          create: pokemonStatLinksCreateObject,
        },
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
