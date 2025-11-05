import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { themes } from '../styles/themes';
import { FilterByType } from '../components/FilterByType/FilterByType';
const renderWithTheme = (ui) => render(_jsx(StyledThemeProvider, { theme: themes.light, children: ui }));
describe('FilterByType', () => {
    const typesMock = ['fire', 'water', 'grass'];
    const onTypeChangeMock = jest.fn();
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it('renderiza o label e select com opções', () => {
        renderWithTheme(_jsx(FilterByType, { types: typesMock, selectedType: "", onTypeChange: onTypeChangeMock }));
        expect(screen.getByLabelText(/filtrar por tipo/i)).toBeInTheDocument();
        expect(screen.getByRole('option', { name: 'Todos' })).toBeInTheDocument();
        typesMock.forEach((type) => {
            const optionLabel = type.charAt(0).toUpperCase() + type.slice(1);
            expect(screen.getByRole('option', { name: optionLabel })).toBeInTheDocument();
        });
    });
    it('chama onTypeChange ao selecionar um tipo', () => {
        renderWithTheme(_jsx(FilterByType, { types: typesMock, selectedType: "", onTypeChange: onTypeChangeMock }));
        fireEvent.change(screen.getByLabelText(/filtrar por tipo/i), {
            target: { value: 'water' },
        });
        expect(onTypeChangeMock).toHaveBeenCalledTimes(1);
        expect(onTypeChangeMock).toHaveBeenCalledWith('water');
    });
    it('desabilita select quando não há tipos', () => {
        renderWithTheme(_jsx(FilterByType, { types: [], selectedType: "", onTypeChange: onTypeChangeMock }));
        const select = screen.getByLabelText(/filtrar por tipo/i);
        expect(select.disabled).toBe(true);
        expect(screen.getByRole('status')).toHaveTextContent(/carregando tipos/i);
    });
    it('mostra o tipo selecionado corretamente', () => {
        renderWithTheme(_jsx(FilterByType, { types: typesMock, selectedType: "fire", onTypeChange: onTypeChangeMock }));
        const select = screen.getByLabelText(/filtrar por tipo/i);
        expect(select.value).toBe('fire');
    });
});
