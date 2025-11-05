import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { PokemonCard } from "../PokemonCard/PokemonCard";
import { useNavigate } from "react-router-dom";
import { PokemonListContainer, PokemonListItem, BotaoVoltarPraHome, NaoEncontradoPokemon, } from "./PokemonList.style";
export const PokemonList = ({ pokemons, toggleFavorite, isFavorite, }) => {
    const navigate = useNavigate();
    if (pokemons.length === 0) {
        return (_jsxs(_Fragment, { children: [_jsx(NaoEncontradoPokemon, { children: "Pok\u00E9mon n\u00E3o encontrado." }), _jsx(BotaoVoltarPraHome, { onClick: () => navigate("/"), children: "Voltar para Home" })] }));
    }
    return (_jsx(PokemonListContainer, { role: "list", children: pokemons.map((p) => (_jsx(PokemonListItem, { role: "listitem", children: _jsx(PokemonCard, { pokemon: p, toggleFavorite: toggleFavorite, isFavorite: isFavorite }) }, `pokemon-${p.name}`))) }));
};
