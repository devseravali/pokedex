import styled from "styled-components";
import { MediaQueries } from "../../styles/MediaQueries";
export const FooterContainer = styled.footer `
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;

     ${MediaQueries.mobile} {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      }

     ${MediaQueries.tablet} {
      flex-direction: column;
      justify-content: center;
      align-items: center;
     } 

     ${MediaQueries.desktop} {
       flex-direction: column;
       justify-content: center;
       align-items: center;
     }
    `;
export const FooterText = styled.p `
    color: ${({ theme }) => theme.colors.text};
    font-size: 1rem;
    font-weight: 600;
    text-align: center;
    margin: 0.5rem;

    ${MediaQueries.mobile} {
      font-size: 1.1rem;
      margin: 0.25rem;
    }

    ${MediaQueries.tablet} {
        font-size: 1rem;
        margin: 0.5rem;
       }

    ${MediaQueries.desktop} {
       font-size: 1.2rem;
       margin: 0.75rem;
    }
    `;
export const FooterLink = styled.a `
    color: ${({ theme }) => theme.colors.link}; 
    text-decoration: none;
    font-weight: 500;
    margin-top: 0.5rem;
    padding-bottom: 1rem;
    font-size: 0.9rem;

    &:hover {
        text-decoration: underline;
    }

    ${MediaQueries.mobile} {
      font-size: 1rem;
      margin-bottom: 0.50rem;
    }

    ${MediaQueries.tablet} {
        font-size: 0.9rem;
        margin-top: 0.75rem;
    }

    ${MediaQueries.desktop} {
        font-size: 1.2rem;
        margin-top: 1rem;
    }
`;
