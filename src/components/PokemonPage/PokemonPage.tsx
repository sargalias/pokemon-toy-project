'use client';

import { Pokemon } from '@/Pokemon.model';
import PokemonCard from '../PokemonCard/PokemonCard';
import Search from '../Search/Search';
import styles from './PokemonPage.module.scss';
import { useEffect, useState } from 'react';
import SortBy from '../SortBy/SortBy';
import filterAndSortPokemon, {
  SelectedOrderSortOption,
  SelectedStatSortOption,
} from '@/utils/filterAndSortPokemon';

type PokemonPageProps = {
  pokemonData: Pokemon[];
};

const PokemonPage = ({ pokemonData }: PokemonPageProps) => {
  const [nameFilter, setNameFilter] = useState('');
  const [selectedStatSortOption, setSelectedStatSortOption] =
    useState<SelectedStatSortOption>('');
  const [selectedOrderSortOption, setSelectedOrderSortOption] =
    useState<SelectedOrderSortOption>('');

  const [filteredAndSortedPokemonData, setFilteredAndSortedPokemonData] =
    useState(structuredClone(pokemonData));

  useEffect(() => {
    const newFilteredAndSortedPokemonData = filterAndSortPokemon(
      structuredClone(pokemonData),
      {
        nameFilter,
        selectedStatSortOption,
        selectedOrderSortOption,
      },
    );
    setFilteredAndSortedPokemonData(newFilteredAndSortedPokemonData);
  }, [
    pokemonData,
    nameFilter,
    selectedStatSortOption,
    selectedOrderSortOption,
  ]);

  return (
    <div className="PokemonPage">
      <Search onSubmit={setNameFilter} />
      <SortBy
        selectedStatSortOption={selectedStatSortOption}
        setSelectedStatSortOption={setSelectedStatSortOption}
        selectedOrderSortOption={selectedOrderSortOption}
        setSelectedOrderSortOption={setSelectedOrderSortOption}
      />

      <div className={styles.PokemonCards}>
        {filteredAndSortedPokemonData.map((pokemon) => (
          <PokemonCard pokemon={pokemon} key={pokemon.id} />
        ))}
      </div>
    </div>
  );
};

export default PokemonPage;
