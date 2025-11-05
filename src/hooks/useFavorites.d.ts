import type { PokemonFull } from "../types/pokemon";
export declare const useFavorites: () => {
    favoritePokemons: PokemonFull[];
    toggleFavorite: (pokemon: PokemonFull) => void;
    isFavorite: (pokemon: PokemonFull) => boolean;
};
