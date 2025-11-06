import { HeaderContainer, H1, Nav, Ul, HomeLi, HomeLink, TogglerWrapper } from "../Header/Header.style";
import { Link } from "react-router-dom";
import { ThemeToggler } from "../ThemeToggle/ThemeToggle";

export const Header = () => { 
    return (
        <>
            <HeaderContainer role="banner" aria-label="Cabeçalho principal">
                <H1>Pokédex</H1>
                <Nav role="navigation" aria-label="Navegação principal">
                    <Ul>
                        <HomeLi><HomeLink as={Link} to="/" aria-current="page">Home</HomeLink></HomeLi>
                        <HomeLi><HomeLink as={Link} to="/favorites" aria-current="page">Favoritos</HomeLink></HomeLi>
                    </Ul>
                    <TogglerWrapper>
                        <ThemeToggler />
                    </TogglerWrapper>
                </Nav>
            </HeaderContainer>
        </>
    )
}