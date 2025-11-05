import { FooterContainer, FooterText, FooterLink } from "./Footer.style";

export const Footer = () => { 
    return (
        <FooterContainer role="contentinfo" aria-label="Rodapé">
            <FooterText>© 2025 Pokédex. All rights reserved.</FooterText>
            <FooterLink href="https://pokeapi.co/" 
                target="_blank" 
                rel="noopener noreferrer">
                Data provided by PokéAPI
            </FooterLink>
        </FooterContainer>
    )

}