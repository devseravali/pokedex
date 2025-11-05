import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { themes } from '../styles/themes';
import { PokemonDetail } from '../pages/PokemonDetail/PokemonDetail';
const mockPokemon = {
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
};
let mockDetailReturn = {
    pokemon: mockPokemon,
    loading: false,
    error: null,
};
jest.mock('../hooks/usePokemonDetail', () => ({
    usePokemonDetail: () => mockDetailReturn,
}));
const mockToggleFavorite = jest.fn();
const mockIsFavorite = jest.fn(() => false);
jest.mock('../hooks/useFavorites', () => ({
    useFavorites: () => ({
        toggleFavorite: mockToggleFavorite,
        isFavorite: mockIsFavorite,
    }),
}));
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}));
describe('PokemonDetail', () => {
    const renderWithProviders = () => render(_jsx(StyledThemeProvider, { theme: themes.light, children: _jsx(MemoryRouter, { initialEntries: ['/pokemon/pikachu'], children: _jsx(PokemonDetail, {}) }) }));
    beforeEach(() => {
        jest.clearAllMocks();
        mockDetailReturn = { pokemon: mockPokemon, loading: false, error: null };
        mockIsFavorite.mockReturnValue(false);
    });
    it('renderiza informações do Pokémon', () => {
        renderWithProviders();
        expect(screen.getByText(/pikachu/i)).toBeInTheDocument();
        expect(screen.getByAltText(/pikachu/i)).toBeInTheDocument();
        expect(screen.getByText(/elétrico/i)).toBeInTheDocument();
        expect(screen.getByText(/static/i)).toBeInTheDocument();
        expect(screen.getByText(/thunderbolt/i)).toBeInTheDocument();
    });
    it('clica no botão de favoritar', async () => {
        renderWithProviders();
        const user = userEvent.setup();
        const favButton = screen.getByText(/favoritar/i);
        await user.click(favButton);
        expect(mockToggleFavorite).toHaveBeenCalledWith(mockPokemon);
    });
    it('clica no botão de voltar para Home', async () => {
        renderWithProviders();
        const user = userEvent.setup();
        const backButton = screen.getByText(/voltar para home/i);
        await user.click(backButton);
        expect(mockNavigate).toHaveBeenCalledWith('/');
    });
    it('exibe mensagem de carregando', () => {
        mockDetailReturn = { pokemon: null, loading: true, error: null };
        renderWithProviders();
        expect(screen.getByText(/carregando dados do pokémon/i)).toBeInTheDocument();
    });
    it('exibe mensagem de erro', () => {
        mockDetailReturn = { pokemon: null, loading: false, error: true };
        renderWithProviders();
        expect(screen.getByText(/não foi possível carregar os dados do pokémon/i)).toBeInTheDocument();
    });
    it('exibe mensagem de não encontrado', () => {
        mockDetailReturn = { pokemon: null, loading: false, error: null };
        renderWithProviders();
        expect(screen.getByText(/pokémon não encontrado/i)).toBeInTheDocument();
    });
    it('clica no botão de desfavoritar', async () => {
        mockIsFavorite.mockReturnValue(true);
        renderWithProviders();
        const user = userEvent.setup();
        const favButton = screen.getByText(/desfavoritar/i);
        await user.click(favButton);
        expect(mockToggleFavorite).toHaveBeenCalledWith(mockPokemon);
    });
});
