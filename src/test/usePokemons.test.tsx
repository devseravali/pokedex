import { renderHook, act, waitFor } from '@testing-library/react';
import * as api from '../services/api';
import { usePokemons } from '../hooks/usePokemons';

const mockSummaries = [
  { name: 'pikachu', url: 'https://pokeapi.co/api/v2/pokemon/25' },
];
const mockPokemons = [
  {
    id: '25',
    name: 'pikachu',
    url: 'https://pokeapi.co/api/v2/pokemon/25',
    image: '',
    type: ['electric'],
    abilities: [],
    moves: [],
    stats: {
      hp: 35,
      attack: 55,
      defense: 40,
      'special-attack': 50,
      'special-defense': 50,
      speed: 90,
    },
    favorite: false,
  },
];

beforeEach(() => {
  jest.clearAllMocks();
  localStorage.clear();
});

describe('usePokemons', () => {
  it('inicia com loading true e pokemons vazio', () => {
    const { result } = renderHook(() => usePokemons());
    expect(result.current.loading).toBe(true);
    expect(result.current.pokemons).toEqual([]);
  });

  it('retorna pokemons e loading', async () => {
    jest.spyOn(api, 'getAllPokemonsWithCache').mockResolvedValue(mockSummaries);
    jest.spyOn(api, 'getPokemonWithCache').mockImplementation(async (name) => {
      const found = mockPokemons.find((p) => p.name === name);
      if (!found) throw new Error('Pokemon não encontrado');
      return found;
    });

    const { result } = renderHook(() => usePokemons(1));

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.pokemons.length).toBe(1);
    expect(result.current.pokemons[0]).toBeDefined();
    expect(result.current.pokemons[0].name).toBe('pikachu');
    expect(result.current.pokemons[0].id).toBe('25');
  });

  it('atualiza pokemons e loading', async () => {
    jest.spyOn(api, 'getAllPokemonsWithCache').mockResolvedValue(mockSummaries);
    jest.spyOn(api, 'getPokemonWithCache').mockResolvedValue(mockPokemons[0]);

    const { result } = renderHook(() => usePokemons());
    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.loading).toBe(false);
    expect(Array.isArray(result.current.pokemons)).toBe(true);
  });

  it('retorna erro se getAllPokemonsWithCache falhar', async () => {
    const spyConsole = jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(api, 'getAllPokemonsWithCache').mockRejectedValueOnce(new Error('Erro ao buscar'));
    const { result } = renderHook(() => usePokemons());
    await waitFor(() => expect(result.current.loading).toBe(false));
    expect(result.current.pokemons).toEqual([]);
    expect(spyConsole).toHaveBeenCalledWith('Erro ao buscar Pokémons:', expect.any(Error));
    spyConsole.mockRestore();
  });

  it('carrega mais pokemons', async () => {
    jest.spyOn(api, 'getAllPokemonsWithCache').mockResolvedValue(mockSummaries);
    jest.spyOn(api, 'getPokemonWithCache').mockResolvedValue(mockPokemons[0]);

    const { result } = renderHook(() => usePokemons());
    act(() => {
      result.current.fetchPokemons(true);
    });

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(Array.isArray(result.current.pokemons)).toBe(true);
    expect(result.current.pokemons.length).toBeGreaterThan(0);
  });
});