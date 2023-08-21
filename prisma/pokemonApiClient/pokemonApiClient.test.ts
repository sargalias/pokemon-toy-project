import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { afterAll, afterEach, beforeAll, describe, expect, test } from 'vitest';
import { bulbasaurApiData, ivisaurApiData } from './pokemonMockData';
import { getFirstGenPokemon, getPokemon } from './pokemonApiClient';

const server = setupServer(
  rest.get('https://pokeapi.co/api/v2/pokemon/1', (req, res, ctx) => {
    return res(ctx.json(bulbasaurApiData));
  }),
  rest.get('https://pokeapi.co/api/v2/pokemon/ivisaur', (req, res, ctx) => {
    return res(ctx.json(ivisaurApiData));
  }),
  rest.get('https://pokeapi.co/api/v2/pokemon/*', (req, res, ctx) => {
    return res(ctx.json(ivisaurApiData));
  }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('pokemonApiClient', () => {
  describe('getPokemon', () => {
    test('should return bulbasaur data when called with 1', async () => {
      const result = await getPokemon(2);
      expect(result.id).toBe(2);
    });
    test('should return ivisaur data when called with ivisaur', async () => {
      const result = await getPokemon('ivisaur');
      expect(result.id).toBe(2);
    });
  });

  describe('get1stGenPokemon', () => {
    test('should return array of 151 objects with pokemon data', async () => {
      const result = await getFirstGenPokemon();
      expect(result.length).toBe(151);
      expect(result[0].id).toBe(1);
      expect(result[1].id).toBe(2);
    });
  });
});
