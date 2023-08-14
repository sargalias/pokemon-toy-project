type StatNames = [
  'hp',
  'attack',
  'defense',
  'special-attack',
  'special-defense',
  'speed',
];

export type Stat = {
  name: StatNames[number];
  base_stat: number;
};

type Type = {
  name: string;
};

export type Pokemon = {
  id: number;
  name: string;
  stats: Stat[];
  types: Type[];
};

export const statOrder = {
  hp: 0,
  attack: 1,
  defense: 2,
  speed: 3,
  'special-attack': 4,
  'special-defense': 5,
};

export const statSorter = (a: Stat, b: Stat) => {
  return statOrder[a.name] - statOrder[b.name];
};
