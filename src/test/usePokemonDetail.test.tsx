import { renderHook, waitFor } from '@testing-library/react';
import * as api from '../services/api';
import { usePokemonDetail } from '../hooks/usePokemonDetail';

const mockPokemon = {
  id: '25',
  name: 'pikachu',
  image: 'https://pokeapi.co/sprites/pikachu.png',
  type: ['electric'],
  abilities: [{ ability: { name: 'static' } }],
  moves: [{ move: { name: 'thunderbolt' } }],
  stats: {
    hp: 35,
    attack: 55,
    defense: 40,
    'special-attack': 50,
    'special-defense': 50,
    speed: 90
  },
  favorite: false
};

describe('usePokemonDetail', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(api, 'getPokemon').mockResolvedValue(mockPokemon);
  });

  it('retorna loading e pokemon', async () => {
    const { result } = renderHook(() => usePokemonDetail('pikachu'));

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.pokemon).toBeDefined();
    expect(result.current.pokemon?.name).toBe('pikachu');
    expect(result.current.error).toBeNull();
  });

  it('retorna erro se getPokemon falhar', async () => {
    jest.spyOn(api, 'getPokemon').mockRejectedValueOnce(new Error('Erro ao buscar'));
    const { result } = renderHook(() => usePokemonDetail('pikachu'));

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.pokemon).toBeNull();
    expect(result.current.error).toBe('Erro ao carregar detalhes do Pokémon.');
  });

  it('não busca se name for vazio', async () => {
    const spy = jest.spyOn(api, 'getPokemon');
    const { result } = renderHook(() => usePokemonDetail(''));

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(spy).not.toHaveBeenCalled();
    expect(result.current.pokemon).toBeNull();
  });
});