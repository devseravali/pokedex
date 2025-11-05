import pokeDark from '../../assets/images/poke-dark.jpg';
import pokeLight from '../../assets/images/poke-light.jpg';
import { ButtonThemeToggler, Img } from '../ThemeToggle/ThemeToggle.style';
import { useThemeContext } from '../../hooks/useThemeContext';

export const ThemeToggler = () => { 
    const { theme, toggleTheme } = useThemeContext();

    return (
        <> 
            {theme === 'light' ? (
                <ButtonThemeToggler onClick={toggleTheme} aria-label="Alternar de tema" tabIndex={0}>
                    <Img src={pokeDark} alt="Tema escuro" />
                </ButtonThemeToggler>
            ) : (
                <ButtonThemeToggler onClick={toggleTheme}>
                    <Img src={pokeLight} alt="Tema claro" />
                </ButtonThemeToggler>
            )}
        </>
    );
};