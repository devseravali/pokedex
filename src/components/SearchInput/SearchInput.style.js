import styled from "styled-components";
import { MediaQueries } from "../../styles/MediaQueries";
export const SearchInputContainer = styled.div `
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
	margin: 0;

	${MediaQueries.mobile} {
		gap: 0.25rem;
		margin: 1rem 0;
	}

	${MediaQueries.tablet} {
		gap: 0.5rem;
		margin: 2rem 0;
	}

	${MediaQueries.desktop} {
		gap: 0.5rem;
		margin: 2rem 0;
	}
`;
export const HiddenText = styled.p `
	visibility: ${({ $invisible }) => ($invisible ? "hidden" : "visible")};
	${({ $invisible }) => $invisible && "display: none;"}
`;
export const SearchInputField = styled.input `
	width: 200px;
	padding: 0.5rem 1rem;
	font-size: 1rem;
	border: 1px solid ${({ theme }) => theme.colors.cardBorder};
	border-radius: 8px;
	background-color: ${({ theme }) => theme.colors.background};
	color: ${({ theme }) => theme.colors.text};
	box-shadow: 0 2px 8px rgba(0,0,0,0.05);
	transition: border-color 0.2s, box-shadow 0.2s;
	&:focus {
		outline: none;
		border-color: ${({ theme }) => theme.colors.buttonBackground};
		box-shadow: 0 4px 12px rgba(0,0,0,0.1);
	}
	${MediaQueries.mobile} {
		width: 200px;
		font-size: 0.9rem;
		padding: 0.4rem 1rem;
		margin: 0.5rem 0;
	}
	${MediaQueries.tablet} {
		width: 220px;
		font-size: 1rem;
		padding: 0.5rem 1rem;
		margin: 0.7rem 0;
	}
	${MediaQueries.desktop} {
		width: 250px;
		font-size: 1.2rem;
		padding: 0.6rem 1.2rem;
		margin: 1rem 0;
	}
`;
export const SearchInputFieldError = styled(SearchInputField) `
	border: 1px solid 
	${({ theme, $error, $success }) => $error ? theme.colors.error
    : $success ? theme.colors.success
        : theme.colors.cardBorder};

	&:disabled {
		background-color: ${({ theme }) => theme.colors.disabledBg};
		color: ${({ theme }) => theme.colors.disabledText};
		border: 1px solid ${({ theme }) => theme.colors.cardBorder};
		cursor: not-allowed;
	}

	&:focus {
		border: 1px solid ${({ theme }) => theme.colors.buttonBackground};
	}
	
	${MediaQueries.mobile} {
		width: 200px;
		font-size: 0.9rem;
		padding: 0.4rem 1rem;
		margin: 0.5rem 0;
	}

	${MediaQueries.tablet} {
		width: 220px;
		font-size: 1rem;
		padding: 0.5rem 1rem;
		margin: 0.7rem 0;
	}

	${MediaQueries.desktop} {
		width: 250px;
		font-size: 1.2rem;
		padding: 0.6rem 1.2rem;
		margin: 1rem 0;
	}
`;
export const Label = styled.label `
	font-size: 1rem;
	font-weight: 700;
	color: ${({ theme }) => theme.colors.text};
	padding-left: 3rem;
	padding-right: 0.5rem;
	cursor: pointer;


	${MediaQueries.mobile} {
		margin-bottom: 0.5rem;
		padding-left: 2rem;
		padding-right: 0.5rem;
		font-size: 0.9rem;
		font-weight: 600;
		cursor: pointer;
	}
	${MediaQueries.tablet} {
		margin-bottom: 0.9rem;
		font-size: 1rem;
		font-weight: 600;
		padding-left: 2rem;
		padding-right: 0.5rem;
		cursor: pointer;
	}
	${MediaQueries.desktop} {
		margin-bottom: 1rem;
		font-size: 1.2rem;
		font-weight: 600;
		padding-left: 2rem;
		padding-right: 0.5rem;
		cursor: pointer;
	}
`;
