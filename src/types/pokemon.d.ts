export interface PokemonFull {
    id: string;
    name: string;
    image: string;
    type: string[];
    abilities: {
        ability: {
            name: string;
        };
    }[];
    moves: {
        move: {
            name: string;
        };
    }[];
    stats: {
        hp: number;
        attack: number;
        defense: number;
        "special-attack": number;
        "special-defense": number;
        speed: number;
    };
    favorite?: boolean;
}
export interface FavoriteContextType {
    favoritePokemons: PokemonFull[];
    toggleFavorite: (pokemon: PokemonFull) => void;
    isFavorite: (pokemon: PokemonFull) => boolean;
    removeFavorite: (pokemon: PokemonFull) => void;
}
export interface PokemonSummary {
    name: string;
    url: string;
}
export interface PokemonListResponse {
    count: number;
    results: PokemonSummary[];
}
export interface RawPokemon {
    name: string;
    id: number;
    types: {
        type: {
            name: string;
        };
    }[];
    abilities: {
        ability: {
            name: string;
        };
    }[];
    moves: {
        move: {
            name: string;
        };
    }[];
    stats: {
        stat: {
            name: string;
        };
        base_stat: number;
    }[];
    sprites: {
        front_default: string;
        other?: {
            "official-artwork"?: {
                front_default?: string;
            };
            dream_world?: {
                front_default?: string;
            };
        };
    };
}
export interface FilterByTypeProps {
    selectedType: string;
    onTypeChange: (type: string) => void;
    types: string[];
}
export interface ThemeContextType {
    theme: string;
    toggleTheme: () => void;
}
export interface SearchInputProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
}
export interface FavoritePokemonType {
    id: string;
    name: string;
    image: string;
    type: string[];
}
export type ThemeType = 'light' | 'dark';
