import styled from "styled-components";
import { MediaQueries } from "../../styles/MediaQueries";
import { motion } from "framer-motion";
export const FavoritePageContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    background-color: ${({ theme }) => theme.colors.background};
    min-height: 100vh;

    ${MediaQueries.mobile} {
        padding: 1rem;
        background-color: ${({ theme }) => theme.colors.background};
    }

    ${MediaQueries.tablet} {
        padding: 2rem;
        background-color: ${({ theme }) => theme.colors.background};    
    }   

    ${MediaQueries.desktop} {
        padding: 2rem;
        background-color: ${({ theme }) => theme.colors.background};    
    }   
`;
export const H2Favorites = styled.h2 `
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.text};
    text-align: center;

    ${MediaQueries.mobile} {
        font-size: 1.2rem;
    }

    ${MediaQueries.tablet} {
        font-size: 1.5rem;
    }

    ${MediaQueries.desktop} {
        font-size: 2rem;
    }
`;
export const NoFavoritesMessage = styled.p `
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.text}; 
    text-align: center;
    margin-top: 2rem;

    ${MediaQueries.mobile} {
        font-size: 1rem;
    }

    ${MediaQueries.tablet} {
        font-size: 1.2rem;
    }

    ${MediaQueries.desktop} {
        font-size: 1.5rem;
    }
`;
export const ContainerButtonError = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    text-align: center;
`;
export const BackToHomeButton = styled.button `
  margin-top: 1.5rem;
  padding: 2rem 1rem;
  font-size: 1rem;
  background: ${({ theme }) => theme.colors.buttonBackground};
  color: ${({ theme }) => theme.colors.buttonText};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
    background: ${({ theme }) => theme.colors.buttonHover};
    transform: scale(1.04);
  }
  ${MediaQueries.mobile} {
    font-size: 0.9rem;
    padding: 0.4rem 0.8rem;
  }
  ${MediaQueries.tablet} {
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }
  ${MediaQueries.desktop} {
    font-size: 1.2rem;
    padding: 0.6rem 1.2rem;
  }
`;
export const MotionContainer = styled(motion.div) `
  display: flex;
  flex-direction: column;
  align-items: center;
`;
