import type { PokemonFull } from "../types/pokemon";
export declare const usePokemons: (limit?: number) => {
    pokemons: PokemonFull[];
    fetchPokemons: (loadMore?: boolean) => Promise<void>;
    loading: boolean;
};
