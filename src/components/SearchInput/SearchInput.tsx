import type { SearchInputProps } from "../../types/pokemon";
import {
  SearchInputField,
  SearchInputContainer,
  Label,
  HiddenText,
  SearchInputFieldError,
} from "./SearchInput.style";

type Props = SearchInputProps & {
  isEmptyResult?: boolean;
  emptyText?: string;
  hasError?: boolean;
  isSuccess?: boolean;
  onChange: (value: string) => void;
};

export const SearchInput = ({
  value,
  onChange,
  placeholder,
  disabled,
  hasError = false,
  isSuccess = false,
}: Props) => {
  return (
    <SearchInputContainer>
      <Label htmlFor="search-pokemon">Buscar Pokémon</Label>

      {hasError || isSuccess ? (
        <SearchInputFieldError
          aria-label="Buscar Pokémon"
          id="search-pokemon-error"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          $error={hasError}
          $success={isSuccess}
        />
      ) : (
        <SearchInputField
          aria-label="Buscar Pokémon"
          autoFocus={true}
          id="search-pokemon"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
        />
      )}

      <HiddenText $invisible={!hasError}>
        Por favor, insira um Pokémon válido.
      </HiddenText>
      <HiddenText $invisible={!isSuccess}>
        Pokémon encontrado com sucesso!
      </HiddenText>
    </SearchInputContainer>
  );
};
