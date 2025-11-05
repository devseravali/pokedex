import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import pokeDark from '../../assets/images/poke-dark.jpg';
import pokeLight from '../../assets/images/poke-light.jpg';
import { ButtonThemeToggler, Img } from '../ThemeToggle/ThemeToggle.style';
import { useThemeContext } from '../../hooks/useThemeContext';
export const ThemeToggler = () => {
    const { theme, toggleTheme } = useThemeContext();
    return (_jsx(_Fragment, { children: theme === 'light' ? (_jsx(ButtonThemeToggler, { onClick: toggleTheme, "aria-label": "Alternar de tema", tabIndex: 0, children: _jsx(Img, { src: pokeDark, alt: "Tema escuro" }) })) : (_jsx(ButtonThemeToggler, { onClick: toggleTheme, children: _jsx(Img, { src: pokeLight, alt: "Tema claro" }) })) }));
};
