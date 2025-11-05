import { createGlobalStyle } from "styled-components";
import OrbitronRegular from "../assets/fonts/Orbitron-Regular.ttf";
export const GlobalStyle = createGlobalStyle `
    * {
       box-sizing: border-box;
       margin: 0;
       padding: 0; 
    }

    html, body, #root {
        height: 100%;
        width: 100%;

    }

    @font-face {
        font-family: 'Orbitron';
        src: url(${OrbitronRegular}) format('truetype');
        font-style: normal;
      }

    body {
        width: 100%;
        background: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.text};
        font-family: 'Orbitron', sans-serif;
    }

        ul, li {
            list-style: none;
        }
        
        a {
           text-decoration: none;
        }

        button {
             text-decoration: none;
             border: none;
        }
    `;
