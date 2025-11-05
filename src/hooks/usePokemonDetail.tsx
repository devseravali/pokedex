import { useState, useEffect } from "react";
import { getPokemon } from "../services/api";
import type { PokemonFull } from "../types/pokemon";

export function usePokemonDetail(name: string) {
  const [pokemon, setPokemon] = useState<PokemonFull | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDetails = async () => {
      if (!name) return;
      setLoading(true);
      setError(null);
      try {
        const data = await getPokemon(name);
        setPokemon(data);
      } catch {
        setError("Erro ao carregar detalhes do Pokémon.");
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [name]);

  return { pokemon, loading, error };
}