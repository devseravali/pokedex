import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { FavoritePage } from '../pages/Favorites/FavoritePage';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { themes } from '../styles/themes';
const mockNavigate = jest.fn();
const mockToggleFavorite = jest.fn();
const mockIsFavorite = jest.fn(() => true);
jest.mock('react-router-dom', () => {
    const originalModule = jest.requireActual('react-router-dom');
    return {
        ...originalModule,
        useNavigate: () => mockNavigate,
        Link: (props) => {
            return React.createElement('a', { href: props.to }, props.children);
        },
    };
});
import { useFavorites } from '../hooks/useFavorites';
jest.mock('../hooks/useFavorites', () => ({
    useFavorites: jest.fn(),
}));
const renderWithRouter = (ui) => render(_jsx(StyledThemeProvider, { theme: themes.light, children: _jsx(BrowserRouter, { children: ui }) }));
describe('FavoritePage', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it('exibe mensagem quando não há pokémons favoritos', () => {
        const favoritePokemonsMock = [];
        useFavorites.mockReturnValue({
            favoritePokemons: favoritePokemonsMock,
            toggleFavorite: mockToggleFavorite,
            isFavorite: mockIsFavorite,
        });
        renderWithRouter(_jsx(FavoritePage, {}));
        expect(screen.getByText(/nenhum favorito encontrado/i)).toBeInTheDocument();
        const button = screen.getAllByText(/voltar para home/i)[0];
        fireEvent.click(button);
        expect(mockNavigate).toHaveBeenCalledWith('/');
    });
    it('renderiza a lista de pokémons favoritos', () => {
        const favoritePokemonsMock = [
            {
                id: '25',
                name: 'Pikachu',
                type: ['Elétrico'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
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
            },
        ];
        useFavorites.mockReturnValue({
            favoritePokemons: favoritePokemonsMock,
            toggleFavorite: mockToggleFavorite,
            isFavorite: mockIsFavorite,
        });
        renderWithRouter(_jsx(FavoritePage, {}));
        expect(screen.getByText(/pokémons favoritos/i)).toBeInTheDocument();
        expect(screen.getByText(/pikachu/i)).toBeInTheDocument();
        const backButton = screen.getAllByText(/voltar para home/i)[0];
        fireEvent.click(backButton);
        expect(mockNavigate).toHaveBeenCalledWith('/');
    });
});
