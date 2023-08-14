import { Pokemon, StatNames } from '@/Pokemon.model';

export type SelectedStatSortOption = StatNames[number] | '';

const filterAndSortPokemon = (
  pokemonData: Pokemon[],
  nameFilter: string,
  selectedStatSortOption: SelectedStatSortOption,
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
      _pokemonByStatSorter(selectedStatSortOption),
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
  (selectedStatSortOption: StatNames[number]) => (a: Pokemon, b: Pokemon) => {
    const aStat = a.stats.find((stat) => {
      return stat.name === selectedStatSortOption;
    });
    const bStat = b.stats.find((stat) => {
      return stat.name === selectedStatSortOption;
    });
    return bStat!.base_stat - aStat!.base_stat;
  };

export default filterAndSortPokemon;
