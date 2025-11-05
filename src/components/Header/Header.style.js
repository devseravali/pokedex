import styled from "styled-components";
import { MediaQueries } from "../../styles/MediaQueries";
export const HeaderContainer = styled.header `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.badgeBackground};


  ${MediaQueries.mobile} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    width: 100%;
    max-width: 480px;
  }

  ${MediaQueries.tablet} {
    flex-direction: row;
    justify-content: flex-start;
    padding: 1.5rem 2rem;
  }

  ${MediaQueries.desktop} {
    flex-direction: row;
    justify-content: space-between;
    padding: 1.5rem 2rem;
  }
`;
export const H1 = styled.h1 `
  font-size: 5rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.title};
  padding: 1rem 0;
  transition: color 0.3s ease;

  ${MediaQueries.mobile} {
    font-size: 3rem;
    margin-bottom: 0.5rem;
    text-align: center;
  }

  ${MediaQueries.tablet} {
    font-size: 2.5rem;
    text-align: left;
  }

  ${MediaQueries.desktop} {
    font-size: 5rem;
    text-align: left;
  }
`;
export const Nav = styled.nav `
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-left: 3rem;

  ${MediaQueries.mobile} {
    flex-direction: column; 
    align-items: center;
    justify-content: center;
    margin: 0;
    gap: 0.5rem;
  }

  ${MediaQueries.tablet} {
    margin-left: 2rem;
    gap: 2rem;
  }

  ${MediaQueries.desktop} {
    margin-left: 3rem;
    gap: 1rem;
  }
`;
export const Ul = styled.ul `
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  list-style: none;

  ${MediaQueries.mobile} {
    flex-direction: column; 
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    gap: 0.2rem;
  }

  ${MediaQueries.tablet} {
    margin-right: 0.5rem;
    gap: 1rem;
  }

  ${MediaQueries.desktop} {
    margin-right: 0.7rem;
    gap: 0.5rem;
  }
`;
export const Li = styled.li `
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.5rem;

  ${MediaQueries.mobile} {
    margin: 0.25rem 0;
  }

  ${MediaQueries.tablet} {
    margin: 1rem;
  }

  ${MediaQueries.desktop} {
    margin: 1rem 0;
  }
`;
export const TogglerWrapper = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;

  ${MediaQueries.mobile} {
    align-self: center;
  }

  ${MediaQueries.tablet} {
    align-self: center;
  }
  
  ${MediaQueries.desktop} {
    align-self: center;
  }
`;
export const HomeLi = styled(Li) `
  margin-right: 0.5rem;
  padding-right: 0;

  ${MediaQueries.mobile} {
    margin: 0.1rem;
    padding-right: 0;
  }

  ${MediaQueries.tablet} {
    margin: 0.5rem;
  }

  ${MediaQueries.desktop} {
    margin: 0.25rem;
  }
`;
export const HomeLink = styled.a `
  color: ${({ theme }) => theme.colors.link};
  text-decoration: none;
  font-size: 2rem;
  font-weight: 800;
  text-transform: uppercase;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: color 0.3s ease;
  padding: 2rem;
  margin: 2rem;

  &:hover {
    text-decoration: underline;
  }

  ${MediaQueries.mobile} {
    font-size: 1.5rem;
    padding: 0.5rem;
    margin: 0.5rem;
  }

  ${MediaQueries.tablet} {
    font-size: 1.1rem;
  }

  ${MediaQueries.desktop} {
    font-size: 2rem;
  }
`;
