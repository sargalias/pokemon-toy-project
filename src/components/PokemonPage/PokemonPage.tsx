'use client';

import { Pokemon } from '@/Pokemon.model';
import PokemonCard from '../PokemonCard/PokemonCard';
import Search from '../Search/Search';
import styles from './PokemonPage.module.scss';
import { useState } from 'react';

type PokemonPageProps = {
  pokemonData: Pokemon[];
};

const PokemonPage = ({ pokemonData }: PokemonPageProps) => {
  const [nameFilter, setNameFilter] = useState('');

  if (nameFilter !== '') {
    pokemonData = pokemonData.filter((pokemon) => {
      return pokemon.name.includes(nameFilter);
    });
  }

  return (
    <div className="PokemonPage">
      <Search onSubmit={setNameFilter} />

      <div className={styles.PokemonCards}>
        {pokemonData.map((pokemon) => (
          <PokemonCard pokemon={pokemon} key={pokemon.id} />
        ))}
      </div>
    </div>
  );
};

export default PokemonPage;
