import styled from "styled-components";
import { MediaQueries } from "../../styles/MediaQueries";
export const FilterByTypeContainer = styled.div `
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
	margin: 0;

	${MediaQueries.mobile} {
		flex-direction: column;
		gap: 0.25rem;
		margin: 1rem 0;
	}

	${MediaQueries.tablet} {
		flex-direction: column;
		gap: 0.5rem;
		margin: 2rem 0;
	}

  ${MediaQueries.desktop} {
    flex-direction: row;
    gap: 0.5rem;
    margin: 2rem 0;
  }
`;
export const Form = styled.form `
    display: flex;
    align-items: center;
    gap: 0.25rem;

    ${MediaQueries.mobile} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    }

    ${MediaQueries.tablet} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    }

    ${MediaQueries.desktop} {
    flex-direction: row;
    gap: 0.5rem;
    margin: 2rem 0;
  }
`;
export const Label = styled.label `
    font-size: 1rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
    margin: 0;

    ${MediaQueries.mobile} {
    margin-bottom: 0.5rem;
    }

    ${MediaQueries.tablet} {
    margin-bottom: 0.9rem;
    }

    ${MediaQueries.desktop} {
    margin-bottom: 1rem;
    }
`;
export const Select = styled.select `
    font-size: 1rem;
    font-weight: 500;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.background};
    border: 1px solid ${({ theme }) => theme.colors.cardBorder};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    color: ${({ theme }) => theme.colors.text};
    transition: border-color 0.2s, box-shadow 0.2s;

    &:hover,
    &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.colors.buttonBackground};
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    ${MediaQueries.mobile} {
      font-size: 0.9rem;
      width: 100%;
    }

    ${MediaQueries.tablet} {
      font-size: 1rem;
      width: 100%;
    }

    ${MediaQueries.desktop} {
      font-size: 1.2rem;
      width: 100%;
    }
`;
export const Option = styled.option `
    font-size: 1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text};
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.background};

    ${MediaQueries.mobile} {
      font-size: 0.9rem;
    }

    ${MediaQueries.tablet} {
      font-size: 1rem;
    }

    ${MediaQueries.desktop} {
      font-size: 1.2rem;
      width: 100%;
    }
`;
