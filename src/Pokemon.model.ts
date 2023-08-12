type Stat = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
  };
};

type Type = {
  slot: number;
  type: {
    name: string;
  };
};

export type Pokemon = {
  id: number;
  name: string;
  stats: Stat[];
  types: Type[];
};
