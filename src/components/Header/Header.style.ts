import styled from "styled-components";
import { MediaQueries } from "../../styles/MediaQueries";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  margin: 0 auto;
  width: 100%;
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
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1.5rem 2rem;
    max-width: none;
  }

  ${MediaQueries.desktop} {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

export const H1 = styled.h1`
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
    font-size: 3.2rem;
    text-align: center;
    padding: 1rem 3rem;
  }

  ${MediaQueries.desktop} {
    font-size: 5rem;
    text-align: left;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 1rem;

  ${MediaQueries.mobile} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
    gap: 0.5rem;
  }

  ${MediaQueries.tablet} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1.5rem 2rem;
    max-width: none;
  }

  ${MediaQueries.desktop} {
    justify-content: space-between;
    gap: 1.5rem;
  }
`;

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
  margin: 0;

  ${MediaQueries.mobile} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
  }

  ${MediaQueries.tablet} {
    flex-direction: row;
    gap: 1.5rem;
  }

  ${MediaQueries.desktop} {
    gap: 1rem;
  }
`;

export const Li = styled.li`
  margin: 0;
  padding: 0;

  ${MediaQueries.mobile} {
    margin: 0.25rem 0;
  }

  ${MediaQueries.tablet} {
    margin: 0.5rem;
  }

  ${MediaQueries.desktop} {
    margin: 0 1rem;
  }
`;

export const TogglerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${MediaQueries.mobile} {
    margin-top: 0.5rem;
  }

  ${MediaQueries.tablet} {
    justify-content: center; /* ✅ Centraliza o ThemeToggle no tablet */
    width: 100%;
    margin-top: 0.5rem;
  }

  ${MediaQueries.desktop} {
    justify-content: flex-end;
    padding-right: 2rem;
  }
`;

export const HomeLi = styled(Li)`
  margin-right: 0.5rem;
  padding-right: 0;

  ${MediaQueries.mobile} {
    margin: 0.1rem;
    padding-right: 0;
  }

  ${MediaQueries.tablet} {
    margin: 0.25rem;
  }

  ${MediaQueries.desktop} {
    margin: 0.25rem;
  }
`;

export const HomeLink = styled.a`
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
    font-size: 1.4rem;
    padding: 0.5rem 1rem;
    margin: 0.5rem;
  }

  ${MediaQueries.desktop} {
    font-size: 2rem;
  }
`;
