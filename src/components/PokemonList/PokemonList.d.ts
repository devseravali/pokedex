import type { PokemonFull } from "../../types/pokemon";
type PokemonListProps = {
    pokemons: PokemonFull[];
    toggleFavorite?: (pokemon: PokemonFull) => void;
    isFavorite?: (pokemon: PokemonFull) => boolean;
};
export declare const PokemonList: ({ pokemons, toggleFavorite, isFavorite, }: PokemonListProps) => import("react/jsx-runtime").JSX.Element;
export {};
