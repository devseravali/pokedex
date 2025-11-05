import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { themes } from '../styles/themes';
import { PokemonList } from '../components/PokemonList/PokemonList';

describe('PokemonList', () => {
  const renderWithProviders = (ui: React.ReactNode) =>
    render(
      <ThemeProvider theme={themes.light}>
        <BrowserRouter>{ui}</BrowserRouter>
      </ThemeProvider>
    );

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
    renderWithProviders(<PokemonList pokemons={pokemons} />);
    expect(screen.getByText(/bulbasaur/i)).toBeInTheDocument();
  });

  it('mostra fallback quando lista está vazia', () => {
    renderWithProviders(<PokemonList pokemons={[]} />);
    expect(screen.getByText(/pokémon não encontrado/i)).toBeInTheDocument();
    expect(screen.getByText(/voltar para home/i)).toBeInTheDocument();
  });
});
