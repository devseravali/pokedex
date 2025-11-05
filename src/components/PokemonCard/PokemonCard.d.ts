import type { PokemonFull } from "../../types/pokemon";
export type PokemonCardProps = {
    pokemon: PokemonFull;
    isFavorite?: (pokemon: PokemonFull) => boolean;
    toggleFavorite?: (pokemon: PokemonFull) => void;
};
export declare const PokemonCard: ({ pokemon, isFavorite, toggleFavorite, }: PokemonCardProps) => import("react/jsx-runtime").JSX.Element;
