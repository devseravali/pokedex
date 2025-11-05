import styled from "styled-components";
import { MediaQueries } from "../../styles/MediaQueries";
export const HomeContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  max-width: 100%;
  background-color: ${({ theme }) => theme.colors.background};

  ${MediaQueries.mobile} {
    padding: 1rem;
    width: auto;
    justify-content: center;
    align-items: center;
  }

  ${MediaQueries.tablet} {
    padding: 1.5rem 2rem;
    width: auto;
    justify-content: center;
    align-items: center;
  }
`;
export const ButtonCarregar = styled.button `
  display: flex;
  margin: 2rem auto;
  padding: 0.75rem 2rem;
  justify-content: center;
  border-radius: 1rem;
  background: ${({ theme }) => theme.colors.buttonBackground};
  color: ${({ theme }) => theme.colors.buttonText};
  border: none;
  font-size: 1.1rem;
  font-weight: bold;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.buttonHover};
    transform: scale(1.04);
  }
  &:active {
    transform: scale(0.98);
  }

  ${MediaQueries.mobile} {
    font-size: 1rem;
    padding: 0.75rem 1.5rem;
    margin: 1.5rem auto;
    border-radius: 1rem;
  }

  ${MediaQueries.tablet} {
    font-size: 1.1rem;
    padding: 0.85rem 1.75rem;
    margin: 1.5rem auto;
    border-radius: 1rem;
  }
`;
