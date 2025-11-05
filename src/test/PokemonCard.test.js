import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { themes } from '../styles/themes';
import { PokemonCard } from '../components/PokemonCard/PokemonCard';
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}));
const mockPokemon = {
    name: 'Pikachu',
    id: '25',
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
const renderWithProviders = (ui) => {
    return render(_jsx(StyledThemeProvider, { theme: themes.light, children: _jsx(BrowserRouter, { children: ui }) }));
};
describe('PokemonCard', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it('renderiza nome, imagem e tipos do Pokémon', () => {
        renderWithProviders(_jsx(PokemonCard, { pokemon: mockPokemon }));
        expect(screen.getByText(/pikachu/i)).toBeInTheDocument();
        expect(screen.getByAltText(/pikachu/i)).toBeInTheDocument();
        expect(screen.getByText(/elétrico/i)).toBeInTheDocument();
    });
    it('chama toggleFavorite ao clicar no botão de favoritar', async () => {
        const toggleFavorite = jest.fn();
        const isFavorite = jest.fn(() => false);
        const user = userEvent.setup();
        renderWithProviders(_jsx(PokemonCard, { pokemon: mockPokemon, toggleFavorite: toggleFavorite, isFavorite: isFavorite }));
        const button = screen.getByLabelText(/toggle favorite/i);
        await user.click(button);
        expect(toggleFavorite).toHaveBeenCalledTimes(1);
        expect(toggleFavorite).toHaveBeenCalledWith(mockPokemon);
    });
    it('mostra o verso do card ao clicar (flip)', () => {
        renderWithProviders(_jsx(PokemonCard, { pokemon: mockPokemon }));
        fireEvent.click(screen.getByText(/pikachu/i));
        expect(screen.getByText(/movimentos/i)).toBeInTheDocument();
        expect(screen.getByText(/stats/i)).toBeInTheDocument();
    });
    it('mostra "não encontrado" quando dados faltam', () => {
        const emptyPokemon = {
            name: '',
            id: '',
            type: [],
            image: '',
            abilities: [],
            moves: [],
            stats: {
                hp: 0,
                attack: 0,
                defense: 0,
                'special-attack': 0,
                'special-defense': 0,
                speed: 0,
            },
        };
        renderWithProviders(_jsx(PokemonCard, { pokemon: emptyPokemon }));
        expect(screen.getByText(/imagem não encontrada/i)).toBeInTheDocument();
        expect(screen.getByText(/tipos não encontrados/i)).toBeInTheDocument();
    });
    it('navega para a página de detalhes ao clicar em "Ver Detalhes"', () => {
        renderWithProviders(_jsx(PokemonCard, { pokemon: mockPokemon }));
        fireEvent.click(screen.getByText(/pikachu/i));
        const button = screen.getByText(/ver detalhes/i);
        fireEvent.click(button);
        expect(mockNavigate).toHaveBeenCalledWith(expect.stringMatching(/\/pokemon\/pikachu/i));
    });
    it('mostra ícone de favorito preenchido quando isFavorite retorna true', () => {
        const isFavorite = jest.fn(() => true);
        renderWithProviders(_jsx(PokemonCard, { pokemon: mockPokemon, isFavorite: isFavorite, toggleFavorite: jest.fn() }));
        const button = screen.getByLabelText(/toggle favorite/i);
        expect(button).toBeInTheDocument();
    });
    it('mostra reticências quando há mais de 10 movimentos', () => {
        const manyMovesPokemon = {
            ...mockPokemon,
            moves: Array.from({ length: 12 }, (_, i) => ({ move: { name: `move${i}` } })),
        };
        renderWithProviders(_jsx(PokemonCard, { pokemon: manyMovesPokemon }));
        fireEvent.click(screen.getByText(/pikachu/i));
        expect(screen.getByText('...')).toBeInTheDocument();
    });
});
