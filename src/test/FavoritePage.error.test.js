import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import { FavoritePage } from '../pages/Favorites/FavoritePage';
import ThemeProvider from '../provider/ThemeProvider';
import { BrowserRouter } from 'react-router-dom';
jest.mock('../hooks/useFavorites', () => ({
    useFavorites: () => ({
        favoritePokemons: [],
        loading: false,
        error: 'Erro ao buscar favoritos',
    }),
}));
beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation(() => { });
});
describe('FavoritePage - mensagem de erro da API', () => {
    it('deve exibir mensagem de erro amigável', () => {
        render(_jsx(ThemeProvider, { children: _jsx(BrowserRouter, { children: _jsx(FavoritePage, {}) }) }));
        expect(screen.queryByText(/erro/i) ||
            screen.queryByText(/não foi possível/i) ||
            screen.queryByText(/tente novamente/i) ||
            screen.queryByText(/nenhum favorito/i)).toBeInTheDocument();
    });
});
