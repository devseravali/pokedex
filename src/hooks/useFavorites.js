import { useState, useEffect } from "react";
export const useFavorites = () => {
    const [favoritePokemons, setFavoritePokemons] = useState(() => {
        const stored = localStorage.getItem("favoritePokemons");
        return stored ? JSON.parse(stored) : [];
    });
    useEffect(() => {
        localStorage.setItem("favoritePokemons", JSON.stringify(favoritePokemons));
    }, [favoritePokemons]);
    const toggleFavorite = (pokemon) => {
        const isFav = favoritePokemons.some((p) => p.id === pokemon.id);
        setFavoritePokemons((prev) => isFav ? prev.filter((p) => p.id !== pokemon.id) : [...prev, pokemon]);
    };
    const isFavorite = (pokemon) => favoritePokemons.some((p) => p.id === pokemon.id);
    return {
        favoritePokemons,
        toggleFavorite,
        isFavorite,
    };
};
