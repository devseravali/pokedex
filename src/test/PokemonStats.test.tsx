import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { themes } from '../styles/themes';
import { PokemonStats } from '../components/PokemonStats/PokemonStats';

describe('PokemonStats', () => {
  it('renderiza stats completos', () => {
    const pokemon = {
      id: '1',
      name: 'Teste',
      image: '',
      type: [],
      abilities: [],
      moves: [],
      stats: {
        hp: 10,
        attack: 20,
        defense: 30,
        speed: 40,
        'special-attack': 50,
        'special-defense': 60,
      },
      favorite: false,
    };

    render(
      <ThemeProvider theme={themes.light}>
        <PokemonStats pokemon={pokemon} />
      </ThemeProvider>
    );

    expect(screen.getByText(/^HP:$/i)).toBeInTheDocument();
    expect(screen.getByText(/^Ataque:$/i)).toBeInTheDocument();
    expect(screen.getByText(/^Defesa:$/i)).toBeInTheDocument();
    expect(screen.getByText(/^Velocidade:$/i)).toBeInTheDocument();
    expect(screen.getByText(/^Especial Ataque:$/i)).toBeInTheDocument();
    expect(screen.getByText(/^Especial Defesa:$/i)).toBeInTheDocument();
  });

  it('renderiza 0 para stats ausentes', () => {
    const pokemon = {
      id: '1',
      name: 'Teste',
      image: '',
      type: [],
      abilities: [],
      moves: [],
      stats: {
        hp: 0,
        attack: 0,
        defense: 0,
        speed: 0,
        'special-attack': 0,
        'special-defense': 0,
      },
      favorite: false,
    };
    render(
      <ThemeProvider theme={themes.light}>
        <PokemonStats pokemon={pokemon} />
      </ThemeProvider>
    );
    expect(screen.getAllByText('0').length).toBeGreaterThan(0);
  });
});