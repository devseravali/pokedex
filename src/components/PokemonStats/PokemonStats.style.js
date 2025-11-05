import styled from "styled-components";
import { MediaQueries } from "../../styles/MediaQueries";
export const StatItem = styled.li `
  font-size: 0.8rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};

  ${MediaQueries.mobile} {
    font-size: 0.7rem;
    padding-left: 0.3rem;
  }

  ${MediaQueries.tablet} {
    font-size: 0.8rem;
    padding-left: 0.5rem;
  }

  ${MediaQueries.desktop} {
    font-size: 0.9rem;
    padding-left: 0.8rem;
  }
`;
export const StrongStat = styled.strong `
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text};

  ${MediaQueries.mobile} {
    font-size: 0.7rem;
  }

  ${MediaQueries.tablet} {
    font-size: 0.8rem;
  }

  ${MediaQueries.desktop} {
    font-size: 1rem;
  }
`;
