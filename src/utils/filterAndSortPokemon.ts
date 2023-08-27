import { Pokemon, StatNames } from '@/Pokemon.model';

export type SelectedStatSortOption = StatNames[number] | '';
export type SelectedOrderSortOption = '' | 'asc' | 'desc';

export type SortOptions = {
  nameFilter: string;
  selectedStatSortOption: SelectedStatSortOption;
  selectedOrderSortOption: SelectedOrderSortOption;
};

const filterAndSortPokemon = (
  pokemonData: Pokemon[],
  { nameFilter, selectedStatSortOption, selectedOrderSortOption }: SortOptions,
) => {
  let filteredAndSortedPokemonData = Array.from(pokemonData);

  if (nameFilter !== '') {
    filteredAndSortedPokemonData = _pokemonFilterByName(
      filteredAndSortedPokemonData,
      nameFilter,
    );
  }

  if (selectedStatSortOption) {
    filteredAndSortedPokemonData = filteredAndSortedPokemonData.sort(
      _pokemonByStatSorter(selectedStatSortOption, selectedOrderSortOption),
    );
  } else {
    filteredAndSortedPokemonData =
      filteredAndSortedPokemonData.sort(_pokemonByIdSorter);
  }

  return filteredAndSortedPokemonData;
};

const _pokemonFilterByName = (pokemonData: Pokemon[], nameFilter: string) => {
  return pokemonData.filter((pokemon) => {
    return pokemon.name.includes(nameFilter);
  });
};

const _pokemonByStatSorter =
  (
    selectedStatSortOption: StatNames[number],
    selectedOrderSortOption: string,
  ) =>
  (a: Pokemon, b: Pokemon) => {
    const aStat = a.stats.find((stat) => {
      return stat.name === selectedStatSortOption;
    });
    const bStat = b.stats.find((stat) => {
      return stat.name === selectedStatSortOption;
    });
    if (!selectedOrderSortOption || selectedOrderSortOption === 'desc') {
      return bStat!.base_stat - aStat!.base_stat;
    }
    return aStat!.base_stat - bStat!.base_stat;
  };

const _pokemonByIdSorter = (a: Pokemon, b: Pokemon) => {
  return a.id - b.id;
};

export default filterAndSortPokemon;
