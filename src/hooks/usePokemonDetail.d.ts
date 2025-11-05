import type { PokemonFull } from "../types/pokemon";
export declare function usePokemonDetail(name: string): {
    pokemon: PokemonFull | null;
    loading: boolean;
    error: string | null;
};
