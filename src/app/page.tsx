import styles from './page.module.css';
import PokemonCard from '@/components/PokemonCard/PokemonCard';
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
      <div className={styles.PokemonCards}>
        {data.map((pokemon) => (
          <PokemonCard pokemon={pokemon} key={pokemon.id} />
        ))}
      </div>
    </main>
  );
}
