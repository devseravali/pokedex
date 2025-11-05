import { useEffect } from "react";
import { PokemonList } from "../../components/PokemonList/PokemonList";
import { FilterByType } from "../../components/FilterByType/FilterByType";
import { SearchInput } from "../../components/SearchInput/SearchInput";
import { HomeContainer, ButtonCarregar } from "./Home.style";
import { SearchFilterContainer } from "../../styles/SearchFilterContainer";

import { useSearchInput } from "../../hooks/useSearchInput";
import { useFavorites } from "../../hooks/useFavorites";
import { useTypes } from "../../hooks/useTypes";
import { usePokemons } from "../../hooks/usePokemons";
import { useFilterByType } from "../../hooks/useFilterByType";

import { motion } from "framer-motion";

export const Home = () => {
  const { toggleFavorite, isFavorite } = useFavorites();
  const { types } = useTypes();
  const { pokemons, fetchPokemons, loading } = usePokemons(10);

  const { selectedType, handleTypeChange } = useFilterByType(types);

  useEffect(() => {
    fetchPokemons();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { value, handleChange, hasError, isSuccess } = useSearchInput(pokemons);

  const filteredPokemons = selectedType
    ? pokemons.filter((p) => p.type.includes(selectedType))
    : pokemons;

  const displayedPokemons = value
    ? filteredPokemons.filter((p) =>
        p.name.toLowerCase().includes(value.toLowerCase())
      )
    : filteredPokemons;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <HomeContainer>
        <SearchFilterContainer>
        <FilterByType
      types={types}
      selectedType={selectedType}
      onTypeChange={handleTypeChange}
          />
          
          <SearchInput
        value={value}
      onChange={handleChange}
      hasError={hasError}
      isSuccess={isSuccess}
      placeholder="Buscar Pelo Pokémon"
    />
        </SearchFilterContainer>

        <PokemonList
          pokemons={displayedPokemons}
          toggleFavorite={toggleFavorite}
          isFavorite={isFavorite}
        />

        {!loading && displayedPokemons.length > 0 && (
          <ButtonCarregar onClick={() => fetchPokemons(true)}>
            Carregar mais
          </ButtonCarregar>
        )}
      </HomeContainer>
    </motion.div>
  );
};
