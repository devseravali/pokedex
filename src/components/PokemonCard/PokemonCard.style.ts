import styled from "styled-components";
import { MdStar, MdStarBorder } from "react-icons/md";
import { MediaQueries } from "../../styles/MediaQueries";

export const BackCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
        height: 100%;
        width: 100%;
        padding-bottom: 0.9rem;

    ${MediaQueries.mobile} {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
    }

    ${MediaQueries.tablet} {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
    }

    ${MediaQueries.desktop} {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
    }
`;

export const CardFront = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    padding: 1rem;

    ${MediaQueries.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    padding: 0.5rem;
    }

    ${MediaQueries.tablet} {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
        padding: 0.7rem;
    }

    ${MediaQueries.desktop} {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
        padding: 1rem;
    }

`;

export const PokemonCard = styled.div<{ type?: string }>`
    width: 19rem;
    min-height: 22rem;
    margin: 1rem auto;
    padding: 1.2rem 1rem 1rem 1rem;
    border-radius: 15px;
    border: 1px solid ${({ theme }) => theme.colors.cardBorder};
    background-color: ${({ theme }) => theme.colors.cardBackground};
    color: ${({ theme }) => theme.colors.text};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
        background-color: ${({ theme, type }) => {
          if (!type) return theme.colors.cardBackground;
          if (Array.isArray(type)) return theme.types[type[0]] || theme.colors.cardBackground;
          return theme.types[type] || theme.colors.cardBackground;
        }};
        transform: scale(1.05);
    }

    ${MediaQueries.mobile} {
        width: 100%;
        max-width: 17rem;
        min-height: 19rem;
        margin: 0.5rem auto;
        padding: 0.7rem 0.5rem 0.5rem 0.5rem;
        border: solid 1px ${({ theme }) => theme.colors.cardBorder};
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    ${MediaQueries.tablet} {
       width: 17rem;
       min-height: 20rem;
       margin: 0.7rem auto;
       padding: 0.9rem 0.7rem 0.7rem 0.7rem;
       border: solid 1px ${({ theme }) => theme.colors.cardBorder};
       box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    ${MediaQueries.desktop} {
       width: 19rem;
       min-height: 20rem;
       margin: 0.8rem auto;
       padding: 1rem 1rem 1rem 1rem;
       border: solid 1px ${({ theme }) => theme.colors.cardBorder};
       box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
`;

export const PokemonDetail = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 1.2rem 1rem 0.5rem 1rem;
    border-radius: 10px;
    margin-bottom: 0.5rem;

    ${MediaQueries.mobile} {
        padding: 0.7rem 0.5rem 0.3rem 0.5rem;
        border-radius: 6px;
        box-shadow: none;
        margin-bottom: 0.2rem;
    }

    ${MediaQueries.tablet} {
      padding: 0.9rem 0.7rem 0.4rem 0.7rem;
      border-radius: 8px;
      box-shadow: none;
      margin-bottom: 0.3rem;
    }

    ${MediaQueries.desktop} {
     padding: 1.2rem 1rem 0.5rem 1rem;
     border-radius: 10px;
     margin-bottom: 0.5rem;
     box-shadow: none;
    }
`;

export const ImageStyles = styled.img`
    max-width: 100%;
    max-height: 100%;
    justify-content: center;
    margin: 10px 10px 0px 10px; 
    object-fit: contain;
    display: block;
    overflow: hidden;

    ${MediaQueries.mobile} {
        max-width: 50%;
        max-height: 50%;
        margin: 5px 5px 0px 5px; 
    }
    
    ${MediaQueries.tablet} {
       max-width: 66px;
       max-height: 66px;
       margin: 6px 6px 0px 6px;
    }

    ${MediaQueries.desktop} {
      max-width: 80px;
      max-height: 80px;
      margin: 8px 8px 0px 8px;
    }
`;

export const H3 = styled.h3`
    text-transform: uppercase;
    text-align: center;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.text};

    ${MediaQueries.mobile} {
    font-size: 1rem;
    text-align: center;
    }

    ${MediaQueries.tablet} {
    font-size: 1.2rem;
    text-align: center;
    }

    ${MediaQueries.desktop} {
    font-size: 1.5rem;
    text-align: center;
    }
`;

export const P = styled.p`
    text-align: center;
    color: ${({ theme }) => theme.colors.text};
    font-size: 1rem;
    text-transform: capitalize;
    padding: 2rem;

    ${MediaQueries.mobile} {
    font-size: 0.8rem;
    padding: 1rem;
    }

    ${MediaQueries.tablet} {
    font-size: 0.9rem;
    padding: 1.5rem;
    }

    ${MediaQueries.desktop} {
    font-size: 1rem;
    padding: 2rem;
    }
`; 

export const StrongTypes = styled.strong`
    font-weight: 800;
    color: ${({ theme }) => theme.colors.text};
    font-size: 1rem;
    line-height: 1.4;
    margin-top: 1rem;
    text-transform: uppercase;

    ${MediaQueries.mobile} {
    font-size: 0.8rem;
    margin-top: 0.5rem;
    }

    ${MediaQueries.tablet} {
    font-size: 0.9rem;
    margin-top: 0.7rem;
    }

    ${MediaQueries.desktop} {
    font-size: 1rem;
    margin-top: 1rem;
    }
`;

export const ButtonFavorite = styled.button`    
    background: none;
    border: none;
    cursor: pointer;
    align-self: center;
    padding-bottom: 3rem;
    color: ${({ theme }) => theme.colors.text};
    &:hover {
        color: ${({ theme }) => theme.colors.buttonHover};
    }   

    ${MediaQueries.mobile} {
    padding-bottom: 1.5rem;
    align-self: center;
    }

    ${MediaQueries.tablet} {
    padding-bottom: 2rem;
    align-self: center;
    }

    ${MediaQueries.desktop} {
    padding-bottom: 3rem;
    align-self: center;
    }
`;  

export const StarFilled = styled(MdStar)`
    color: gold;
    width: 2.5rem;
    height: 2.5rem;
    cursor: pointer;

    &:hover {
      transform: scale(1.2);
    }

    ${MediaQueries.mobile} {
    width: 2rem;
    height: 2rem;
    }

    ${MediaQueries.tablet} {
    width: 2.2rem;
    height: 2.2rem;
    }

    ${MediaQueries.desktop} {
     width: 2.5rem;
     height: 2.5rem;
    }
`;

export const StarEmpty = styled(MdStarBorder)`
    color: lightgray;
    width: 2.5rem;
    height: 2.5rem;
    cursor: pointer;

&:hover {
   transform: scale(1.2);
}

   ${MediaQueries.mobile} {
    width: 2rem;
    height: 2rem;
}

${MediaQueries.tablet} {
    width: 2.2rem;
    height: 2.2rem;
}

${MediaQueries.desktop} {
     width: 2.5rem;
     height: 2.5rem;
}
`;

export const ButtonDetailed = styled.button`
    font-size: 0.7rem;
    font-weight: 600;
        margin: 1rem auto 0.5rem auto;
    padding: 0.3rem 1rem;
    border: none;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.buttonBackground};
    color: ${({ theme }) => theme.colors.buttonText};
    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme.colors.buttonHover};
    }

    ${MediaQueries.mobile} {
       font-size: 0.6rem;
       font-weight: 600;
       width: 100%;
       margin: 0.7rem 0 0.3rem 0;
       padding: 0.3rem 0;
       border-radius: 6px;
       display: block;
       position: static;
    }

    ${MediaQueries.tablet} {
        font-size: 0.65rem;
        width: 100%;
        margin: 0.8rem 0 0.4rem 0;
        padding: 0.3rem 0;
        border-radius: 7px;
        display: block;
    }

    ${MediaQueries.desktop} {
        font-size: 0.7rem;
        margin: 1rem auto 0.5rem auto;
        padding: 0.3rem 1rem;
        border-radius: 5px;
        display: block;
    }
`;

export const StrongMoves = styled.strong`
    font-weight: 800;
    color: ${({ theme }) => theme.colors.text};
    font-size: 1rem;
    margin-top: 1rem;
    padding-bottom: 1rem;
    text-transform: uppercase;

    ${MediaQueries.mobile} {
       font-size: 0.8rem;
       padding-bottom: 0.5rem;
       margin-top: 0.5rem;
    }

    ${MediaQueries.tablet} {
        font-size: 0.9rem;
        padding-bottom: 0.7rem;
        margin-top: 0.7rem;
    }

    ${MediaQueries.desktop} {
    font-size: 1rem;
    padding-bottom: 1rem;
    margin-top: 1rem;
    }
    `;

export const MovesParagraph = styled.p`
    margin-top: 1rem;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
    line-height: 1.4;

    ${MediaQueries.mobile} {
    font-size: 0.7rem;
    line-height: 1.2;
    margin-top: 0.5rem;
    }

    ${MediaQueries.tablet} {
    font-size: 0.8rem;
    line-height: 1.3;
    margin-top: 0.7rem;
    }

    ${MediaQueries.desktop} {
    font-size: 0.9rem;
    line-height: 1.4;
    margin-top: 1rem;
    }
`;

export const StrongHabilities = styled.strong`
    font-weight: 800;
    color: ${({ theme }) => theme.colors.text};
    font-size: 1rem;
    align-items: center;
    margin-top: 1rem;
    text-transform: uppercase;

    ${MediaQueries.mobile} {
       font-size: 0.8rem;
       margin-top: 0.5rem;
    }

    ${MediaQueries.tablet} {
      font-size: 0.9rem;
      margin-top: 0.7rem;
    }

    ${MediaQueries.desktop} {
    font-size: 1rem;
    margin-top: 1rem;
    }
`;

export const HabilitiesParagraph = styled.p`
    margin-top: 1rem;   
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;

    ${MediaQueries.mobile} {
     font-size: 0.7rem;
     margin-top: 0.5rem;
    }

    ${MediaQueries.tablet} {
      font-size: 0.8rem;
      margin-top: 0.7rem;
    }

    ${MediaQueries.desktop} {
    font-size: 0.9rem;
    margin-top: 1rem;
    padding-bottom: 1rem;
    }
`;

export const H4 = styled.h4`
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.title};
    margin: 0.5rem 0;
    padding-top: 0.5rem;
    text-transform: uppercase;

    ${MediaQueries.mobile} {
    font-size: 0.8rem;
    margin: 0.3rem 0; 
    padding-top: 0.3rem;
    }

    ${MediaQueries.tablet} {
    font-size: 0.9rem;
    margin: 0.3rem 0; 
    padding-top: 0.3rem;
    }

    ${MediaQueries.desktop} {
    font-size: 1.2rem;
    margin: 0.5rem 0; 
    padding-top: 0.5rem;
}`;

export const StatsList = styled.ul`
    display: flex;    
    flex-wrap: wrap;       
    gap: 8px;
    padding-bottom: 2rem;

    ${MediaQueries.mobile} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding-bottom: 1rem;
    }

    ${MediaQueries.tablet} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    max-width: 700px;
    margin: 1.5rem auto;
    justify-items: center;
    padding: 1rem;
    gap: 1rem;
    }

    ${MediaQueries.desktop} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
    padding: 0.9rem;
    }
`;

export const StatItem = styled.li`
    font-size: 0.8rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text};

    ${MediaQueries.mobile} {
    font-size: 0.8rem;
    font-weight: 400;
    padding-left: 0.5rem;
    }

    ${MediaQueries.tablet} {
    font-size: 0.9rem;
    font-weight: 400;
    padding-left: 0.5rem;
    }

    ${MediaQueries.desktop} {
    font-size: 0.8rem;
    font-weight: 400;
    padding-left: 0.8rem;
    }
`;

export const StrongStat = styled.strong`
    font-weight: 800;
    color: ${({ theme }) => theme.colors.text};

    ${MediaQueries.mobile} {
    font-size: 0.8rem;
    }

    ${MediaQueries.tablet} {
    font-size: 0.9rem;
    }

    ${MediaQueries.desktop} {
    font-size: 1rem;
    }
`;

export const NaoEncontrado = styled.p`
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text};     
    text-align: center; 

    ${MediaQueries.mobile} {
    font-size: 0.8rem;
    }

    ${MediaQueries.tablet} {
    font-size: 0.9rem;
    }

    ${MediaQueries.desktop} {
    font-size: 1rem;
    }
`;
