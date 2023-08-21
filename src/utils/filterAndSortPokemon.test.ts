import { mockPokemonData } from '../mockPokemonData';
import { describe } from 'vitest';
import filterAndSortPokemon from './filterAndSortPokemon';

const [bulbasaur, ivysaur, venusaur] = mockPokemonData;

describe('filterAndSortPokemon', () => {
  test('should return [] when called with [] pokemonData', () => {
    const result = filterAndSortPokemon([], '', '', '');
    expect(result).toEqual([]);
  });

  test('should return array with bulbasaur data only when nameFilter is bulb', () => {
    const result = filterAndSortPokemon(
      [bulbasaur, ivysaur, venusaur],
      'bulb',
      '',
      '',
    );
    expect(result).toEqual([bulbasaur]);
  });

  test('should return array [venusaur, ivysaur, bulbasaur] when sorted by attack stat', () => {
    const result = filterAndSortPokemon(
      [bulbasaur, ivysaur, venusaur],
      '',
      'attack',
      '',
    );
    expect(result).toEqual([venusaur, ivysaur, bulbasaur]);
  });
  test('should return array [bulbasaur, ivysaur, venusaur] when sorted by attack stat in ascending order', () => {
    const result = filterAndSortPokemon(
      [bulbasaur, ivysaur, venusaur],
      '',
      'attack',
      'asc',
    );
    expect(result).toEqual([bulbasaur, ivysaur, venusaur]);
  });
});
