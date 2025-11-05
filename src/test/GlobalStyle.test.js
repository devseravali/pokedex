import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/GlobalStyle';
import { themes } from '../styles/themes';
describe('GlobalStyle', () => {
    it('aplica estilos globais sem erro', () => {
        render(_jsxs(ThemeProvider, { theme: themes.light, children: [_jsx(GlobalStyle, {}), _jsx("div", { "data-testid": "test-div", children: "Teste de estilo global" })] }));
    });
});
