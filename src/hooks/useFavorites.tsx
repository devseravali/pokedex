import { useState, useEffect } from "react";
import type { PokemonFull } from "../types/pokemon";

export const useFavorites = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<PokemonFull[]>(() => {
    const stored = localStorage.getItem("favoritePokemons");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("favoritePokemons", JSON.stringify(favoritePokemons));
  }, [favoritePokemons]);

  const toggleFavorite = (pokemon: PokemonFull) => {
    const isFav = favoritePokemons.some((p) => p.id === pokemon.id);
    setFavoritePokemons((prev) =>
      isFav ? prev.filter((p) => p.id !== pokemon.id) : [...prev, pokemon]
    );
  };

  const isFavorite = (pokemon: PokemonFull) =>
    favoritePokemons.some((p) => p.id === pokemon.id);

  return {
    favoritePokemons,
    toggleFavorite,
    isFavorite,
  };
};