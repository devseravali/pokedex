import styled from "styled-components";
import { MediaQueries } from "../../styles/MediaQueries";

export const ThemeTogglerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  background: transparent;
  padding: 0;

  ${MediaQueries.mobile} {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0;
  }

  ${MediaQueries.tablet} {
     flex-direction: row;
     align-items: center;
     justify-content: flex-end;
  }

  ${MediaQueries.desktop} {
     flex-direction: row;
     align-items: center;
     justify-content: flex-end;
  }
`;

export const ButtonThemeToggler = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  box-shadow: none;
  width: 52px;
  height: 52px;
  margin: 0;
  align-items: center;
  justify-content: center;

  ${MediaQueries.mobile} {
    width: 48px;
    height: 48px;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    display: flex;
    padding-right: 0;
  }

  ${MediaQueries.tablet} {
    width: 50px;
    height: 50px;
}

  ${MediaQueries.desktop} {
    width: 60px;
    height: 60px;
  }
`;

export const Img = styled.img`
  width: 60px;
  height: 60px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 100%;
  display: block;
  margin-right: 10rem;

  ${MediaQueries.mobile} {
    width: 50px;
    height: 50px;
    margin: 0;
  }

  ${MediaQueries.tablet} {
    width: 45px;
    height: 45px;
    margin: 0;
  }

  ${MediaQueries.desktop} {
    width: 60px;
    height: 60px;
  }
`;