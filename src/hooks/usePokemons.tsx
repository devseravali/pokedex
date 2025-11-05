import { useState, useEffect } from "react";
import type { PokemonFull } from "../types/pokemon";
import { getAllPokemonsWithCache, getPokemonWithCache } from "../services/api";

export const usePokemons = (limit = 10) => {
  const [pokemons, setPokemons] = useState<PokemonFull[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [offset, setOffset] = useState<number>(0);

  const fetchPokemons = async (loadMore = false) => {
    setLoading(true);
    try {
      let startOffset = 0;
      if (loadMore) {
        startOffset = offset;
      }
      const summaries = await getAllPokemonsWithCache(limit, startOffset);
      const fullPokemons = await Promise.all(
        summaries.map((p) => getPokemonWithCache(p.name))
      );

      setPokemons((prev) =>
        loadMore
          ? [
              ...prev,
              ...fullPokemons.filter(
                (p) => !prev.some((existing) => existing.id === p.id)
              ),
            ]
          : fullPokemons
      );

      setOffset((prev) => (loadMore ? prev + limit : limit));
    } catch (error) {
      console.error("Erro ao buscar Pokémons:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemons();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { pokemons, fetchPokemons, loading };
};
