import { Pokemon } from '../../Pokemon.model';
import { ApiPokemon, mapToPokemon } from './Client.model';

const getPokemon = async (idOrName: string | number): Promise<Pokemon> => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${idOrName}`);
  const apiData: ApiPokemon = await response.json();
  const mappedData = mapToPokemon(apiData);
  return mappedData;
};

const getFirstGenPokemon = async (): Promise<Pokemon[]> => {
  const pokemonApiPromises = [];
  for (let i = 1; i <= 151; i++) {
    const promise = getPokemon(i);
    pokemonApiPromises.push(promise);
  }
  const data = await Promise.all(pokemonApiPromises);
  return data;
};

export { getPokemon, getFirstGenPokemon };
