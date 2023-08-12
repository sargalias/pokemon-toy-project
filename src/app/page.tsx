import styles from './page.module.css';
import PokemonCard from '@/components/PokemonCard/PokemonCard';
import { Pokemon } from '@/Pokemon.model';
import { getFirstGenPokemon } from '@/clients/pokemonApiClient';

async function getData(): Promise<Pokemon[]> {
  console.log(result);
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
