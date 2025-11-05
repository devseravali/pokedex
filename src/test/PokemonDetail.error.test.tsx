import { render, screen } from '@testing-library/react';
import { PokemonDetail } from '../pages/PokemonDetail/PokemonDetail';
import ThemeProvider from '../provider/ThemeProvider';
import { BrowserRouter } from 'react-router-dom';

jest.mock('../hooks/usePokemonDetail', () => ({
  usePokemonDetail: () => ({
    pokemon: null,
    loading: false,
    error: 'Erro ao buscar detalhes',
  }),
}));

beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
});

describe('PokemonDetail - mensagem de erro da API', () => {
  it('deve exibir mensagem de erro amigável', () => {
    render(
      <ThemeProvider>
        <BrowserRouter>
          <PokemonDetail />
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
