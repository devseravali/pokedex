import type { PokemonFull, PokemonSummary, RawPokemon, FavoritePokemonType } from "../types/pokemon";

export async function fetchData<T>(url: string): Promise<T> { 
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return response.json();
}   

function mapStats(stats: { stat: { name: string }; base_stat: number }[]): PokemonFull["stats"] {
  return {
    hp: stats.find(s => s.stat.name === "hp")?.base_stat ?? 0,
    attack: stats.find(s => s.stat.name === "attack")?.base_stat ?? 0,
    defense: stats.find(s => s.stat.name === "defense")?.base_stat ?? 0,
    "special-attack": stats.find(s => s.stat.name === "special-attack")?.base_stat ?? 0,
    "special-defense": stats.find(s => s.stat.name === "special-defense")?.base_stat ?? 0,
    speed: stats.find(s => s.stat.name === "speed")?.base_stat ?? 0,
  };
}

export async function getPokemon(name: string): Promise<PokemonFull> {
  const rawData = await fetchData<RawPokemon>(`https://pokeapi.co/api/v2/pokemon/${name}`);
  
  return {
    id: rawData.id.toString(),
    name: rawData.name,
    image:
      rawData.sprites.front_default ||
      rawData.sprites.other?.['official-artwork']?.front_default ||
      rawData.sprites.other?.['dream_world']?.front_default ||
      "",
    type: rawData.types.map(t => t.type.name),
    abilities: rawData.abilities.map(a => ({ ability: { name: a.ability.name } })),
    moves: rawData.moves.map(m => ({ move: { name: m.move.name } })),
    stats: mapStats(rawData.stats),
    favorite: false
  };
}

export const getPokemonWithCache = async (name: string): Promise<PokemonFull> => { 
  const cached = localStorage.getItem(`pokemon_${name}`);
  if (cached) return JSON.parse(cached);
  const pokemon = await getPokemon(name);
  localStorage.setItem(`pokemon_${name}`, JSON.stringify(pokemon));
  return pokemon; 
}

export async function getAllPokemonsWithCache(limit = 10, offset = 0): Promise<PokemonSummary[]> {
  const data = await fetchData<{ results: PokemonSummary[] }>(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );
  return data.results;
}

export const fetchTypesWithCache = async () => {
  const cacheKey = "pokemon_types";
  const cached = localStorage.getItem(cacheKey);
  if (cached) return JSON.parse(cached);
  const res = await fetch("https://pokeapi.co/api/v2/type");
  const data = await res.json();
  const types = data.results.map((t: { name: string }) => t.name);
  localStorage.setItem(cacheKey, JSON.stringify(types));
  return types;
};

export const getFavoritePokemons = (): FavoritePokemonType[] => { 
     const stored = localStorage.getItem("favoritePokemons");
     return stored ? JSON.parse(stored) : [];
}

export const FavoritePokemon = () => { 
  const favorites: FavoritePokemonType[] = getFavoritePokemons();
  return favorites;
}

export async function buscarPokemon(
  nome: string,
  setLoading: (loading: boolean) => void,
  setPokemons: (pokemons: PokemonFull[]) => void,
  setError: (error: string) => void
) {
  setLoading(true);
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome.toLowerCase()}`);
    if (!response.ok) throw new Error('');
    const data = await response.json();
    setPokemons([data]); 
  } catch (error: unknown) {
    setPokemons([]);
    if (error instanceof Error) {
      setError("" + error.message);
    } else {
      setError(String(error));
    }
  } finally {
    setLoading(false);
  }
}

export async function buscarPokemonPorNome(nome: string) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome.toLowerCase()}`);
  if (!response.ok) throw new Error('');
  return await response.json();
}

export async function buscarPokemonsPorTipo(tipo: string) {
  const response = await fetch(`https://pokeapi.co/api/v2/type/${tipo}`);
  if (!response.ok) throw new Error('Erro ao filtrar');
  const data = await response.json();
  return data.pokemon.map((p: { pokemon: { name: string; url: string } }) => p.pokemon);
}

export function mergeUniquePokemons(prev: PokemonFull[], next: PokemonFull[]): PokemonFull[] {
  return [
    ...prev,
    ...next.filter((p) => !prev.some((existing) => existing.id === p.id))
  ];
}