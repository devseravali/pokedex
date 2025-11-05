import {
    fetchData,
    getPokemon,
    getPokemonWithCache,
    getAllPokemonsWithCache,
    fetchTypesWithCache,
    getFavoritePokemons,
    FavoritePokemon,
    mergeUniquePokemons,
    buscarPokemon,
    buscarPokemonPorNome,
    buscarPokemonsPorTipo
  } from '../services/api';
  import type { PokemonFull } from '../types/pokemon';
  
  describe('API Service', () => {
    const mockPokemon: PokemonFull = {
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
  
    beforeEach(() => {
      jest.clearAllMocks();
      global.fetch = jest.fn();
      localStorage.clear();
    });
  
    it('fetchData deve lançar erro quando response.ok é false', async () => {
      (global.fetch as jest.Mock).mockResolvedValue({ ok: false, status: 404 });
      await expect(fetchData('url')).rejects.toThrow('HTTP error! status: 404');
    });
  
    it('fetchData deve retornar JSON quando response.ok é true', async () => {
      (global.fetch as jest.Mock).mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ foo: 'bar' })
      });
      const data = await fetchData<{ foo: string }>('url');
      expect(data.foo).toBe('bar');
    });
  
    it('getPokemon deve mapear corretamente os dados', async () => {
      (global.fetch as jest.Mock).mockResolvedValue({
        ok: true,
        json: () =>
          Promise.resolve({
            id: 25,
            name: 'pikachu',
            sprites: { front_default: 'url.png', other: {} },
            types: [{ type: { name: 'electric' } }],
            abilities: [{ ability: { name: 'static' } }],
            moves: [{ move: { name: 'thunderbolt' } }],
            stats: [
              { stat: { name: 'hp' }, base_stat: 35 },
              { stat: { name: 'attack' }, base_stat: 55 },
              { stat: { name: 'defense' }, base_stat: 40 },
              { stat: { name: 'special-attack' }, base_stat: 50 },
              { stat: { name: 'special-defense' }, base_stat: 50 },
              { stat: { name: 'speed' }, base_stat: 90 }
            ]
          })
      });
      const pokemon = await getPokemon('pikachu');
      expect(pokemon.name).toBe('pikachu');
      expect(pokemon.stats.hp).toBe(35);
    });
  
    it('getPokemonWithCache retorna do localStorage se disponível', async () => {
      localStorage.setItem('pokemon_pikachu', JSON.stringify(mockPokemon));
      const pokemon = await getPokemonWithCache('pikachu');
      expect(pokemon.name).toBe('pikachu');
    });
  
    it('getAllPokemonsWithCache retorna lista', async () => {
      (global.fetch as jest.Mock).mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ results: [{ name: 'pikachu', url: 'url' }] })
      });
      const data = await getAllPokemonsWithCache();
      expect(data[0].name).toBe('pikachu');
    });
  
    it('fetchTypesWithCache retorna tipos e salva no cache', async () => {
      (global.fetch as jest.Mock).mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ results: [{ name: 'fire' }, { name: 'water' }] })
      });
      const types = await fetchTypesWithCache();
      expect(types).toEqual(['fire', 'water']);
      expect(localStorage.getItem('pokemon_types')).toBe(JSON.stringify(['fire', 'water']));
    });
  
    it('getFavoritePokemons retorna array vazio se não houver favoritos', () => {
      expect(getFavoritePokemons()).toEqual([]);
    });
  
    it('FavoritePokemon retorna favoritos', () => {
      localStorage.setItem('favoritePokemons', JSON.stringify([mockPokemon]));
      expect(FavoritePokemon()).toEqual([mockPokemon]);
    });
  
    it('mergeUniquePokemons mescla sem duplicar', () => {
      const prev = [mockPokemon];
      const next = [
        mockPokemon,
        { ...mockPokemon, id: '26', name: 'bulbasaur' }
      ];
      const merged = mergeUniquePokemons(prev, next as PokemonFull[]);
      expect(merged).toHaveLength(2);
      expect(merged.find(p => p.id === '26')?.name).toBe('bulbasaur');
    });
  
    it('buscarPokemon atualiza corretamente os estados', async () => {
      const setLoading = jest.fn();
      const setPokemons = jest.fn();
      const setError = jest.fn();
      (global.fetch as jest.Mock).mockResolvedValue({
        ok: true,
        json: () => Promise.resolve(mockPokemon)
      });
      await buscarPokemon('pikachu', setLoading, setPokemons, setError);
      expect(setLoading).toHaveBeenCalledWith(true);
      expect(setPokemons).toHaveBeenCalledWith([mockPokemon]);
      expect(setLoading).toHaveBeenCalledWith(false);
    });
  
    it('buscarPokemonPorNome retorna o Pokémon', async () => {
      (global.fetch as jest.Mock).mockResolvedValue({
        ok: true,
        json: () => Promise.resolve(mockPokemon)
      });
      const pokemon = await buscarPokemonPorNome('pikachu');
      expect(pokemon.name).toBe('pikachu');
    });
  
    it('buscarPokemonsPorTipo retorna lista filtrada', async () => {
      (global.fetch as jest.Mock).mockResolvedValue({
        ok: true,
        json: () =>
          Promise.resolve({ pokemon: [{ pokemon: { name: 'pikachu', url: 'url' } }] })
      });
      const pokemons = await buscarPokemonsPorTipo('electric');
      expect(pokemons[0].name).toBe('pikachu');
    });
  });
  