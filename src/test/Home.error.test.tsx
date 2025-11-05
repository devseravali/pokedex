import { render, screen } from '@testing-library/react';
import { Home } from '../pages/Home/Home';
import ThemeProvider from '../provider/ThemeProvider';
import { BrowserRouter } from 'react-router-dom';

jest.mock('../hooks/usePokemons', () => ({
  usePokemons: () => ({
    pokemons: [],
    loading: false,
    error: 'Erro ao buscar Pokémons',
    loadMore: jest.fn(),
    fetchPokemons: jest.fn(), 
  }),
}));

beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
});

describe('Home - mensagem de erro da API', () => {
  it('deve exibir mensagem de erro amigável', () => {
    render(
      <ThemeProvider>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </ThemeProvider>
    );
    expect(
      screen.queryByText(/erro/i) ||
      screen.queryByText(/não foi possível/i) ||
      screen.queryByText(/tente novamente/i) ||
      screen.queryByText(/não encontrado/i)
    ).toBeInTheDocument();
  });
});
