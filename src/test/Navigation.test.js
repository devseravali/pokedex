import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
describe('Navegação Favoritos', () => {
    beforeAll(() => {
        jest.spyOn(console, 'error').mockImplementation(() => { });
    });
    it('navigates to favorites when the favorites button is clicked', async () => {
        render(_jsx(MemoryRouter, { initialEntries: ['/'], children: _jsx(App, {}) }));
        const user = userEvent.setup();
        const favButton = screen.getByText(/favoritos/i);
        await user.click(favButton);
        expect(await screen.findByText(/nenhum favorito encontrado/i)).toBeInTheDocument();
    });
    it('volta para Home ao clicar em voltar', async () => {
        render(_jsx(MemoryRouter, { initialEntries: ['/favorites'], children: _jsx(App, {}) }));
        const user = userEvent.setup();
        const backButton = screen.getByText(/voltar para home/i);
        await user.click(backButton);
        expect(await screen.findByLabelText(/buscar pokémon/i)).toBeInTheDocument();
    });
});
