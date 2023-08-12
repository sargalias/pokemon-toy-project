import React from 'react';
import { describe, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import PokemonCard from './PokemonCard';
import { bulbasaurApiData } from '../../clients/pokemonApiClient/pokemonMockData';

const bulbasaur = bulbasaurApiData;
const { stats } = bulbasaur;

describe.only('PokemonCard', () => {
  test('should display name', () => {
    render(<PokemonCard pokemon={bulbasaur} />);
    const name = screen.getByRole('heading');
    expect(name).toHaveTextContent(/bulbasaur/i);
  });

  test('should display types correctly', () => {
    render(<PokemonCard pokemon={bulbasaur} />);

    const { types } = bulbasaur;
    types.forEach((type) => {
      const typeName = screen.getByText(type.type.name, { exact: false });

      expect(typeName).toBeInTheDocument();
    });
  });

  test('should display stats correctly', () => {
    render(<PokemonCard pokemon={bulbasaur} />);

    stats.forEach((stat) => {
      const statNameRegExp = new RegExp(stat.stat.name, 'i');
      const statValueRegExp = new RegExp(stat.base_stat.toString(), 'i');

      const statName = screen.getAllByText(statNameRegExp);
      const statValue = screen.getAllByText(statValueRegExp);

      expect(statName).toBeTruthy();
      expect(statValue).toBeTruthy();
    });
  });
});
