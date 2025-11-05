import styled from "styled-components";
import { MediaQueries } from "../../styles/MediaQueries";
export const PokemonDetailContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  margin: 0 auto;
  max-width: 800px;

  ${MediaQueries.mobile} {
    display: grid;
    grid-template-columns: repeat(1, 2fr);
    align-items: center;
    padding: 1rem;
    max-width: 480px;
  }

  ${MediaQueries.tablet} {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    align-items: center;
    padding: 1rem;
    max-width: 600px;
  }

  ${MediaQueries.desktop} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    max-width: 800px;}
`;
export const SectionDetail = styled.section `
  margin-bottom: 2rem;
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 8px;
  justify-content: center;
  align-items: center;

  ${MediaQueries.mobile} {
   padding: 1rem;
   justify-content: center;
   align-items: center;
  }
   
  ${MediaQueries.tablet} {
    padding: 1.2rem;
    justify-content: center;
    align-items: center;
  }

  ${MediaQueries.desktop} {
    padding: 2rem;
    justify-content: center;
    align-items: center;
  }
`;
export const FavoriteButtonContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 1rem;

  ${MediaQueries.mobile} {
    padding: 1rem;
    align-items: center;
    margin-top: 0.9rem;
  }

  ${MediaQueries.tablet} {
    padding: 1.2rem;
    align-items: center;
    margin-top: 1rem;
  }

  ${MediaQueries.desktop} { 
    padding: 2rem;
    align-items: center;
    margin-top: 1rem;
  }
`;
export const FavoriteButton = styled.button `
  display: block;
  margin: 0 auto;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  background: ${({ theme }) => theme.colors.buttonBackground};
  color: ${({ theme }) => theme.colors.buttonText};
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: background 0.2s;
  &:hover {
    background: ${({ theme }) => theme.colors.buttonHover};
  }

  ${MediaQueries.mobile} {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    margin: 0 auto;
  }

  ${MediaQueries.tablet} {
    font-size: 1.1rem;
    padding: 0.6rem 1.2rem;
    margin: 0 auto;
  }

  ${MediaQueries.desktop} {
    font-size: 1.2rem;
    padding: 0.75rem 1.5rem;
    margin: 0 auto;
}
`;
export const PokeName = styled.h2 `
  text-transform: uppercase;
  font-size: 2rem;
  padding: 1rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.title};
  text-align: center;

  ${MediaQueries.mobile} {
    font-size: 1.2rem;
    margin-bottom: 0.8rem;
    padding: 0.5rem;
  }

  ${MediaQueries.tablet} {
    font-size: 1.5rem;
    margin-bottom: 0.9rem;
    padding: 0.7rem;
  }

  ${MediaQueries.desktop} {
    font-size: 2rem;
    padding: 1rem;
    margin-bottom: 1rem;
    }
`;
export const ImageContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  width: 100%;

  ${MediaQueries.mobile} {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 0.8rem;
  }

  ${MediaQueries.tablet} {
    width: 100%;
    padding: 0.7rem;
    margin-bottom: 0.9rem;
  }

  ${MediaQueries.desktop} {
    width: 100%;
    padding: 1rem;
    margin-bottom: 1rem;
  }
`;
export const PokeImage = styled.img `
  display: block;
  margin: 0 auto;
  max-width: 200px;
  width: 100%;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);

  ${MediaQueries.mobile} {
    max-width: 150px;
    width: 100%;
  }

  ${MediaQueries.tablet} {
    max-width: 180px;
    width: 100%;
  }

  ${MediaQueries.desktop} {
    max-width: 200px;
    width: 100%;
  }
`;
export const TitleDetail = styled.h3 `
  color: ${({ theme }) => theme.colors.title};
  font-size: 1.5rem;
  text-align: center;
  padding-top: 1rem;

  ${MediaQueries.mobile} {
    font-size: 1.2rem;
    padding-top: 0.5rem;
    text-align: center;
  }

  ${MediaQueries.tablet} {
    font-size: 1.3rem;
    padding-top: 0.8rem;
    text-align: center;
  }

  ${MediaQueries.desktop} {
    font-size: 1.5rem;
    padding-top: 1rem;
    text-align: center;
  }
`;
export const DetailList = styled.ul `
  padding: 0 2rem 2rem 2rem;
  max-height: 300px;
  overflow-y: auto;
  text-align: center;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1.1rem;

  ${MediaQueries.mobile} {
  font-size: 0.5rem;
  padding: 0.5rem;
  }

  ${MediaQueries.tablet} {
    font-size: 0.9rem;
    padding: 1rem;
  }

  ${MediaQueries.desktop} {
    font-size: 1.1rem;
    padding: 2rem;
  }
`;
export const TypeContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;
  flex-wrap: wrap;

  ${MediaQueries.mobile} {
    display: grid;
    flex-wrap: wrap;
    grid-template-columns: repeat(2, 1fr);
    margin: 0.5rem 0;
  }

  ${MediaQueries.tablet} {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
    margin: 0.8rem 0;
  }

  ${MediaQueries.desktop} {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin: 1rem 0;
  }
`;
export const DetailType = styled.li `
  font-size: 1.1rem;
  background-color: #d3d3d3;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-transform: capitalize;
  margin: 0.25rem 0;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;

  &:hover {
    background-color: #bdbdbd;
  }

  ${MediaQueries.mobile} {
   font-size: 1rem;
   padding: 0.2rem 0.4rem;
   margin: 0.10rem 0;
  }

  ${MediaQueries.tablet} {
    font-size: 1.1rem;
    padding: 0.2rem 0.4rem;
    margin: 0.15rem 0;
  }

  ${MediaQueries.desktop} {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin: 1rem 0;
  }
`;
export const StatsTitle = styled.h3 `
  background-color: #d3d3d3;
  display: inline-block;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 0.8rem;

  ${MediaQueries.mobile} {
    padding: 0.2rem 0.4rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  ${MediaQueries.tablet} {
    padding: 0.4rem 0.6rem;
    margin-bottom: 0.7rem;
    font-weight: 600;
  }

  ${MediaQueries.desktop} {
    padding: 0.3rem 0.6rem;
    margin-bottom: 0.8rem;
    font-weight: 700;
  }
`;
export const DetailStats = styled.ul `
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  padding: 0;
  margin: 1.2rem;
  line-height: 1.4;

  ${MediaQueries.mobile} {
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   margin: 0.5rem;
   gap: 0.3rem;
  }

  ${MediaQueries.tablet} {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
  }

  ${MediaQueries.desktop} {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
  }
`;
export const StatItem = styled.li `
  background-color: #d3d3d3;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textSecondary};
  white-space: nowrap;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #bdbdbd;
  }

  ${MediaQueries.mobile} {
    font-size: 0.9rem;
    padding: 0.2rem 0.4rem;
    font-weight: 400;
  }

  ${MediaQueries.tablet} {
    font-size: 1rem;
    padding: 0.3rem 0.6rem;
    font-weight: 400;
  }

  ${MediaQueries.desktop} {
    font-size: 1.1rem;
    padding: 0.4rem 0.8rem;
    font-weight: 500;
  }
`;
export const StatLabel = styled.span `
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textSecondary};

  ${MediaQueries.mobile} {
    font-size: 0.9rem;
    padding: 0.2rem 0.4rem;
    font-weight: 700;
  }

  ${MediaQueries.tablet} {
    font-size: 1rem;
    padding: 0.3rem 0.6rem;
    font-weight: 700;
  }

  ${MediaQueries.desktop} {
    font-size: 1.1rem;
    padding: 0.4rem 0.8rem;
    font-weight: 700;
  }
`;
export const HabilitiesContainer = styled.ul `
  display: flex;
  flex-wrap: wrap;      
  gap: 0.5rem;
  padding: 0.5rem 0;  
  margin: 1rem auto;  
  justify-content: center;  
  max-width: 700px; 

  ${MediaQueries.mobile} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 0.5rem;
    padding: 0.2rem 0;
    gap: 0.3rem;
  }

  ${MediaQueries.tablet} {
    display: flex;
    flex-wrap: wrap;      
    gap: 0.5rem;
  }

  ${MediaQueries.desktop} {
    display: flex;
    flex-wrap: wrap;      
    gap: 0.5rem;
  }
`;
export const HabilitiesList = styled.li `
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1.1rem;
  background-color: #d3d3d3;
  text-transform: capitalize;
  margin: 0.25rem 0;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;

  &:hover {
    background-color: #bdbdbd;
  }

  ${MediaQueries.mobile} {
    font-size: 1rem;
    padding: 0.2rem;
  }

  ${MediaQueries.tablet} {
    font-size: 1.1rem;
    padding: 0.4rem 0.8rem;
  }

  ${MediaQueries.desktop} {
    font-size: 1.1rem;
    padding: 0.4rem 0.8rem;
  }
`;
export const MovesContainer = styled.ul `
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    padding: 0.5rem 0;
    margin: 1rem auto;
    justify-content: center;
    max-width: 700px;

    ${MediaQueries.mobile} {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      margin: 0.5rem 0;
      padding: 0.2rem 0;
    }

    ${MediaQueries.tablet} {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      margin: 0.5rem 0;
      padding: 0.2rem 0;    
      gap: 0.5rem;
    }

    ${MediaQueries.desktop} {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      padding: 0.5rem 0;
    }
`;
export const MovesList = styled.li `
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 1.1rem;
    text-transform: capitalize;
    text-align: center;
    padding: 0.2rem 0;
    background-color: #d3d3d3;
    margin: 0.25rem 0;
    padding: 0.4rem 0.8rem;
    border-radius: 4px;

  &:hover {
    background-color: #bdbdbd;
  }

  ${MediaQueries.mobile} {
    font-size: 1rem;
    padding: 0.2rem;
    margin: 0.1rem 0;
  }

  ${MediaQueries.tablet} {
     font-size: 1.1rem;
     padding: 0.4rem;
     margin: 0.2rem 0;
  }

  ${MediaQueries.desktop} {
    font-size: 1.1rem;
    padding: 0.4rem 0.8rem;
  }
`;
export const ButtonVoltarHome = styled.button `
    color: ${({ theme }) => theme.colors.buttonText};
    background: ${({ theme }) => theme.colors.buttonBackground};
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 10px;
    cursor: pointer;
    font-size: 1.2rem;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    
    &:hover {
      background: ${({ theme }) => theme.colors.buttonHover};
    }

    ${MediaQueries.mobile} {
      font-size: 1rem;
      padding: 0.50rem 1rem;
      margin: 0.1rem;
      font-weight: 600;
    }

    ${MediaQueries.tablet} {
    font-size: 1.1rem;
    padding: 0.6rem 1.2rem;
    margin: 0.2rem;
    font-weight: 600;
    }

    ${MediaQueries.desktop} {
    font-size: 1.2rem;
    padding: 0.75rem 1.5rem;
    margin: 0.3rem;
    font-weight: 600;
  }
`;
export const CarregandoDetail = styled.div `
  text-align: center;
  margin-top: 2rem;

  ${MediaQueries.mobile} {
    padding: 1rem;
  }

    ${MediaQueries.tablet} {
    padding: 1.5rem;
    }

    ${MediaQueries.desktop} {
    padding: 2rem;
  }
`;
export const ErroMessage = styled.p `
    color: ${({ theme }) => theme.colors.error};
    font-size: 1.2rem;
    text-align: center;
    margin-top: 2rem;
    padding: 1rem;

    ${MediaQueries.mobile} {
      font-size: 1rem;
      padding: 0.5rem;
    }

    ${MediaQueries.tablet} {
      font-size: 1.1rem;
      padding: 0.8rem;
    }

    ${MediaQueries.desktop} {
      font-size: 1.2rem;
      padding: 1rem;
    }
`;
