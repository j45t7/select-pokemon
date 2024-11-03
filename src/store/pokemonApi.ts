import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  types: Array<{ type: { name: string } }>;
  sprites: { front_default: string };
}

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    searchPokemon: builder.query<Pokemon, number>({
      query: (id) => `pokemon/${id}`,
    }),
  }),
});


export const { useSearchPokemonQuery } = pokemonApi;
