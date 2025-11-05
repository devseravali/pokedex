import { jsx as _jsx } from "react/jsx-runtime";
import { gradientByType, themes } from '../styles/themes';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { SearchFilterContainer } from '../styles/SearchFilterContainer';
describe('gradientByType', () => {
    it('retorna o gradiente correto', () => {
        const grad = gradientByType('#FFF');
        expect(grad).toContain('linear-gradient');
        expect(grad).toContain('#FFF');
    });
});
describe('ThemeProvider + SearchFilterContainer', () => {
    it('renderiza SearchFilterContainer com tema light', () => {
        const { container } = render(_jsx(ThemeProvider, { theme: themes.light, children: _jsx(SearchFilterContainer, {}) }));
        expect(container.firstChild).toBeInTheDocument();
    });
    it('renderiza SearchFilterContainer com tema dark', () => {
        const { container } = render(_jsx(ThemeProvider, { theme: themes.dark, children: _jsx(SearchFilterContainer, {}) }));
        expect(container.firstChild).toBeInTheDocument();
    });
});
