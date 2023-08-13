type Stat = {
  name: string;
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
