import styled from "styled-components";
import { MediaQueries } from "../../styles/MediaQueries";
export const PokemonListContainer = styled.ul `
  display: grid;
  grid-template-columns: repeat(5, 2fr);
  justify-items: center;
  gap: 1.5rem;
  width: 100%;
  max-width: 1920px;
  margin: 2rem auto;
  padding: 1.5rem;

  ${MediaQueries.mobile} {
    grid-template-columns: 1fr;
    justify-items: stretch;
    gap: 1rem;
    padding: 0.5rem;
    margin: 0 auto;
    max-width: 480px;
  }

  ${MediaQueries.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
    padding: 1rem;
  }

  ${MediaQueries.desktop} {
    grid-template-columns: repeat(5, 1fr);
    justify-items: center;
    gap: 1.5rem;
    padding: 0.5rem;
  }
`;
export const PokemonListItem = styled.li `
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.25s ease, opacity 0.25s ease;

  &:hover {
    transform: translateY(-5px);
  }

  ${MediaQueries.mobile} {
    width: 100%;
    max-width: 100%;
    transform: none;
    &:hover {
      transform: none;
    }
  }

  ${MediaQueries.tablet} {
    width: 100%;
    max-width: 100%;
    transform: none;
    &:hover {
      transform: none;
    }
  }

  ${MediaQueries.desktop} {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.25s ease, opacity 0.25s ease;
    &:hover {
      transform: translateY(-5px);
    }
  }
`;
export const BotaoVoltarPraHome = styled.button `
  color: ${({ theme }) => theme.colors.buttonText};
  background-color: ${({ theme }) => theme.colors.buttonBackground};
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 1.5rem;
  transition: background-color 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonHover};
  }
  
  ${MediaQueries.mobile} {
    font-size: 1.2rem;
    margin: 0 auto;
  }
  ${MediaQueries.tablet} {
    font-size: 1.3rem;
    margin: 0 auto;
  }
  ${MediaQueries.desktop} {
    font-size: 1.5rem;
    margin: 0 auto;
  } 
`;
export const NaoEncontradoPokemon = styled.p `
  text-align: center;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  padding: 2rem;

  ${MediaQueries.mobile} {
    font-size: 1.2rem;
    padding: 1rem;
  }

  ${MediaQueries.tablet} {
    font-size: 1.3rem;
    padding: 1.5rem;
  }
`;
