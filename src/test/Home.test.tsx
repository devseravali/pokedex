jest.mock('../hooks/usePokemons', () => ({
  usePokemons: () => ({
    pokemons: [
      { name: 'Pikachu', type: ['Elétrico'] },
      { name: 'Charmander', type: ['Fogo'] }
    ],
    fetchPokemons: jest.fn(),
    loading: false,
  }),
}));

jest.mock('../hooks/useTypes', () => ({
  useTypes: () => ({
    types: ['Elétrico', 'Fogo'],
  }),
}));

jest.mock('../hooks/useFavorites', () => ({
  useFavorites: () => ({
    toggleFavorite: jest.fn(),
    isFavorite: jest.fn(() => false),
  }),
}));

jest.mock('../hooks/useFilterByType', () => ({
  useFilterByType: () => ({
    selectedType: '',
    handleTypeChange: jest.fn(),
  }),
}));

jest.mock('../hooks/useSearchInput', () => ({
  useSearchInput: () => ({
    value: '',
    handleChange: jest.fn(),
    hasError: false,
    isSuccess: false,
  }),
}));
jest.mock('../services/api', () => ({
    getPokemons: jest.fn(() => Promise.resolve([
      { name: 'Pikachu', type: ['Elétrico'] },
      { name: 'Charmander', type: ['Fogo'] }
    ])),
    getTypes: jest.fn(() => Promise.resolve(['Elétrico', 'Fogo'])),
    getAllPokemonsWithCache: jest.fn(() => Promise.resolve([
      { name: 'Pikachu', type: ['Elétrico'] },
      { name: 'Charmander', type: ['Fogo'] }
    ])),
    getPokemonWithCache: jest.fn(() => Promise.resolve({ name: 'Pikachu', type: ['Elétrico'] })),
}));
  
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; 
import { Home }  from '../pages/Home/Home';
import '@testing-library/jest-dom';

import ThemeProvider from '../provider/ThemeProvider';
import '@testing-library/jest-dom';

test('renderiza o botão "Carregar mais"', () => {
  render(
    <ThemeProvider>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </ThemeProvider>
  );
  expect(screen.getByText(/carregar mais/i)).toBeInTheDocument();
});
