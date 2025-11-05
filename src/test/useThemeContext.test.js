import { jsx as _jsx } from "react/jsx-runtime";
import { renderHook, act } from '@testing-library/react';
import ThemeProvider from '../provider/ThemeProvider';
import { useThemeContext } from '../hooks/useThemeContext';
const wrapper = ({ children }) => (_jsx(ThemeProvider, { children: children }));
describe('useThemeContext', () => {
    it('retorna o tema inicial', () => {
        const { result } = renderHook(() => useThemeContext(), { wrapper });
        expect(result.current.theme).toBe('light');
    });
    it('alterna o tema corretamente', () => {
        const { result } = renderHook(() => useThemeContext(), { wrapper });
        act(() => {
            result.current.toggleTheme();
        });
        expect(result.current.theme).toBe('dark');
    });
    it('mantém o tema ao alternar duas vezes', () => {
        const { result } = renderHook(() => useThemeContext(), { wrapper });
        act(() => {
            result.current.toggleTheme();
            result.current.toggleTheme();
        });
        expect(result.current.theme).toBe('light');
    });
    it('retorna a função toggleTheme', () => {
        const { result } = renderHook(() => useThemeContext(), { wrapper });
        expect(typeof result.current.toggleTheme).toBe('function');
    });
});
