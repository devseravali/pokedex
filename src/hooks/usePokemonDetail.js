import { useState, useEffect } from "react";
import { getPokemon } from "../services/api";
export function usePokemonDetail(name) {
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchDetails = async () => {
            if (!name)
                return;
            setLoading(true);
            setError(null);
            try {
                const data = await getPokemon(name);
                setPokemon(data);
            }
            catch {
                setError("Erro ao carregar detalhes do Pokémon.");
            }
            finally {
                setLoading(false);
            }
        };
        fetchDetails();
    }, [name]);
    return { pokemon, loading, error };
}
