import { renderHook, act } from '@testing-library/react';
import { useFavorites } from '../hooks/useFavorites';
describe('useFavorites', () => {
    it('adiciona e remove favorito', () => {
        const { result } = renderHook(() => useFavorites());
        const pokemon = {
            id: '25',
            name: 'pikachu',
            favorite: false,
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
            type: ['electric'],
            abilities: [{ ability: { name: 'static' } }],
            moves: [{ move: { name: 'thunderbolt' } }],
            stats: {
                hp: 35,
                attack: 55,
                defense: 40,
                'special-attack': 50,
                'special-defense': 50,
                speed: 90,
            },
        };
        act(() => {
            result.current.toggleFavorite(pokemon);
        });
        expect(result.current.isFavorite(pokemon)).toBe(true);
        act(() => {
            result.current.toggleFavorite(pokemon);
        });
        expect(result.current.isFavorite(pokemon)).toBe(false);
    });
    it('retorna favoritos vazios inicialmente', () => {
        const { result } = renderHook(() => useFavorites());
        expect(Array.isArray(result.current.favoritePokemons)).toBe(true);
        expect(result.current.favoritePokemons.length).toBe(0);
    });
});
