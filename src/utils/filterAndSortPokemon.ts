import { Pokemon, StatNames } from '@/Pokemon.model';

export type SelectedStatSortOption = StatNames[number] | '';

const filterAndSortPokemon = (
  pokemonData: Pokemon[],
  nameFilter: string,
  selectedStatSortOption: SelectedStatSortOption,
  selectedOrderSortOption: string,
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

export default filterAndSortPokemon;
