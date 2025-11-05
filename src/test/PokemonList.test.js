import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { themes } from '../styles/themes';
import { PokemonList } from '../components/PokemonList/PokemonList';
describe('PokemonList', () => {
    const renderWithProviders = (ui) => render(_jsx(ThemeProvider, { theme: themes.light, children: _jsx(BrowserRouter, { children: ui }) }));
    it('renderiza lista de pokémons', () => {
        const pokemons = [
            {
                name: 'Bulbasaur',
                id: '1',
                type: ['Grama'],
                image: '',
                abilities: [],
                moves: [],
                stats: {
                    hp: 45,
                    attack: 49,
                    defense: 49,
                    'special-attack': 65,
                    'special-defense': 65,
                    speed: 45,
                },
            },
        ];
        renderWithProviders(_jsx(PokemonList, { pokemons: pokemons }));
        expect(screen.getByText(/bulbasaur/i)).toBeInTheDocument();
    });
    it('mostra fallback quando lista está vazia', () => {
        renderWithProviders(_jsx(PokemonList, { pokemons: [] }));
        expect(screen.getByText(/pokémon não encontrado/i)).toBeInTheDocument();
        expect(screen.getByText(/voltar para home/i)).toBeInTheDocument();
    });
});
