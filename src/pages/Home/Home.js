import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
        ? filteredPokemons.filter((p) => p.name.toLowerCase().includes(value.toLowerCase()))
        : filteredPokemons;
    return (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -20 }, transition: { duration: 0.5 }, children: _jsxs(HomeContainer, { children: [_jsxs(SearchFilterContainer, { children: [_jsx(FilterByType, { types: types, selectedType: selectedType, onTypeChange: handleTypeChange }), _jsx(SearchInput, { value: value, onChange: handleChange, hasError: hasError, isSuccess: isSuccess, placeholder: "Buscar Pelo Pok\u00E9mon" })] }), _jsx(PokemonList, { pokemons: displayedPokemons, toggleFavorite: toggleFavorite, isFavorite: isFavorite }), !loading && displayedPokemons.length > 0 && (_jsx(ButtonCarregar, { onClick: () => fetchPokemons(true), children: "Carregar mais" }))] }) }));
};
