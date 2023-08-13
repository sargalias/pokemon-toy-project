import PokemonPage from '@/components/PokemonPage/PokemonPage';
import { Pokemon } from '@/Pokemon.model';
import prismaPokemonRepository from '@/prisma/prismaPokemonRepository';

async function getData(): Promise<Pokemon[]> {
  const result = await prismaPokemonRepository.getFirstGenPokemon();
  return result;
}

export default async function Home() {
  const data = await getData();

  return (
    <main>
      <h1>Pokemon</h1>
      <PokemonPage pokemonData={data} />
    </main>
  );
}
