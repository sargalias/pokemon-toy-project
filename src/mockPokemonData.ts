import { Pokemon } from './Pokemon.model';

const mockPokemonData: Pokemon[] = [
  {
    id: 1,
    name: 'bulbasaur',
    stats: [
      { name: 'hp', base_stat: 45 },
      { name: 'attack', base_stat: 49 },
      { name: 'defense', base_stat: 49 },
      { name: 'speed', base_stat: 45 },
      { name: 'special-attack', base_stat: 65 },
      { name: 'special-defense', base_stat: 65 },
    ],
    types: [{ name: 'grass' }, { name: 'poison' }],
  },
  {
    id: 2,
    name: 'ivysaur',
    stats: [
      { name: 'hp', base_stat: 60 },
      { name: 'attack', base_stat: 62 },
      { name: 'defense', base_stat: 63 },
      { name: 'speed', base_stat: 60 },
      { name: 'special-attack', base_stat: 80 },
      { name: 'special-defense', base_stat: 80 },
    ],
    types: [{ name: 'grass' }, { name: 'poison' }],
  },
  {
    id: 3,
    name: 'venusaur',
    stats: [
      { name: 'hp', base_stat: 80 },
      { name: 'attack', base_stat: 82 },
      { name: 'defense', base_stat: 83 },
      { name: 'speed', base_stat: 80 },
      { name: 'special-attack', base_stat: 100 },
      { name: 'special-defense', base_stat: 100 },
    ],
    types: [{ name: 'grass' }, { name: 'poison' }],
  },
];

export { mockPokemonData };
