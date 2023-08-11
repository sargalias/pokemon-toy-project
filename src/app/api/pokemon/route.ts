import { NextResponse } from 'next/server';
import { getFirstGenPokemon } from '../../../clients/pokemonApiClient';
import type { Pokemon } from '@/Pokemon.model';

export async function GET(request: Request): Promise<NextResponse<Pokemon[]>> {
  const pokemon = await getFirstGenPokemon();
  return NextResponse.json(pokemon);
}
