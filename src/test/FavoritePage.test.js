import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { FavoritePage } from '../pages/Favorites/FavoritePage';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { themes } from '../styles/themes';
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
    Link: ({ children, to }) => _jsx("a", { href: to, children: children }),
}));
const mockToggleFavorite = jest.fn();
const mockIsFavorite = jest.fn(() => true);
let favoritePokemonsMock = [];
jest.mock('../hooks/useFavorites', () => ({
    useFavorites: () => ({
        favoritePokemons: favoritePokemonsMock,
        toggleFavorite: mockToggleFavorite,
        isFavorite: mockIsFavorite,
    }),
}));
const renderWithRouter = (ui) => render(_jsx(StyledThemeProvider, { theme: themes.light, children: _jsx(BrowserRouter, { children: ui }) }));
describe('FavoritePage', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it('mostra mensagem quando não há favoritos', () => {
        favoritePokemonsMock = [];
        renderWithRouter(_jsx(FavoritePage, {}));
        expect(screen.getByText(/nenhum favorito encontrado/i)).toBeInTheDocument();
        const button = screen.getAllByText(/voltar para home/i)[0];
        fireEvent.click(button);
        expect(mockNavigate).toHaveBeenCalledWith('/');
    });
    it('renderiza a lista de pokémons favoritos', () => {
        favoritePokemonsMock = [
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
        renderWithRouter(_jsx(FavoritePage, {}));
        expect(screen.getByText(/pokémons favoritos/i)).toBeInTheDocument();
        expect(screen.getByText(/pikachu/i)).toBeInTheDocument();
        const backButton = screen.getAllByText(/voltar para home/i)[0];
        fireEvent.click(backButton);
        expect(mockNavigate).toHaveBeenCalledWith('/');
    });
});
