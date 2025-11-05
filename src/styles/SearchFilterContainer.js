import styled from "styled-components";
import { MediaQueries } from "./MediaQueries";
export const SearchFilterContainer = styled.div `


  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  margin: 2rem auto;
  width: 100%;
  max-width: 600px;

  ${MediaQueries.mobile} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.10rem;
    margin: 1rem auto;
    width: 90%;
    max-width: none;
  }

  ${MediaQueries.tablet} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.15rem;
    margin: 1.5rem auto;
    width: 95%;
    max-width: none;
  }

  ${MediaQueries.desktop} {
    flex-direction: row;
    gap: 0.25rem;
    margin: 2rem auto;
    width: 100%;
    max-width: 600px;
  }
`;
