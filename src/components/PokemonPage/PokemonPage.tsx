'use client';

import { Pokemon } from '@/Pokemon.model';
import PokemonCard from '../PokemonCard/PokemonCard';
import Search from '../Search/Search';
import styles from './PokemonPage.module.scss';
import { useState } from 'react';
import SortBy from '../SortBy/SortBy';
import filterAndSortPokemon, {
  SelectedStatSortOption,
} from '@/utils/filterAndSortPokemon';

type PokemonPageProps = {
  pokemonData: Pokemon[];
};

const PokemonPage = ({ pokemonData }: PokemonPageProps) => {
  const [nameFilter, setNameFilter] = useState('');
  const [selectedStatSortOption, setSelectedStatSortOption] =
    useState<SelectedStatSortOption>('');

  const filteredAndSortedPokemonData = filterAndSortPokemon(
    pokemonData,
    nameFilter,
    selectedStatSortOption,
  );

  return (
    <div className="PokemonPage">
      <Search onSubmit={setNameFilter} />
      <SortBy
        selectedStatSortOption={selectedStatSortOption}
        setSelectedStatSortOption={setSelectedStatSortOption}
      />

      <div className={styles.PokemonCards}>
        {filteredAndSortedPokemonData.map((pokemon) => (
          <PokemonCard pokemon={pokemon} key={pokemon.id} />
        ))}
        S
      </div>
    </div>
  );
};

export default PokemonPage;
