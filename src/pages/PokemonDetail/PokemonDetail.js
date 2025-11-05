import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useParams, useNavigate } from "react-router-dom";
import { useFavorites } from "../../hooks/useFavorites";
import { usePokemonDetail } from "../../hooks/usePokemonDetail";
import { PokemonDetailContainer, SectionDetail, PokeName, PokeImage, ImageContainer, TitleDetail, DetailType, DetailStats, StatLabel, StatItem, HabilitiesList, MovesList, MovesContainer, HabilitiesContainer, TypeContainer, ButtonVoltarHome, CarregandoDetail, FavoriteButton, FavoriteButtonContainer, ErroMessage, } from "./PokemonDetail.style";
export const PokemonDetail = () => {
    const { name } = useParams();
    const navigate = useNavigate();
    const { pokemon, loading, error } = usePokemonDetail(name ?? "");
    const { toggleFavorite, isFavorite } = useFavorites();
    if (loading)
        return (_jsx(CarregandoDetail, { "aria-live": "polite", children: _jsx("p", { children: "Carregando dados do Pok\u00E9mon..." }) }));
    if (error)
        return (_jsxs(CarregandoDetail, { children: [_jsx(ErroMessage, { children: "N\u00E3o foi poss\u00EDvel carregar os dados do Pok\u00E9mon. Tente novamente ou volte para a Home." }), _jsx(ButtonVoltarHome, { onClick: () => navigate("/"), children: "Voltar para Home" })] }));
    if (!pokemon)
        return (_jsxs(CarregandoDetail, { "aria-live": "polite", children: [_jsx(ErroMessage, { children: "Pok\u00E9mon n\u00E3o encontrado." }), _jsx(ButtonVoltarHome, { onClick: () => navigate("/"), children: "Voltar para Home" })] }));
    return (_jsxs(PokemonDetailContainer, { children: [_jsxs(SectionDetail, { children: [_jsx(PokeName, { children: pokemon.name }), _jsx(ImageContainer, { children: _jsx(PokeImage, { src: pokemon.image, alt: pokemon.name }) }), _jsx(FavoriteButtonContainer, { children: _jsx(FavoriteButton, { onClick: () => toggleFavorite(pokemon), children: isFavorite(pokemon) ? "Desfavoritar" : "Favoritar" }) }), _jsx(TitleDetail, { children: "Tipos" }), _jsx(TypeContainer, { children: pokemon.type?.filter(Boolean).map((t, idx) => (_jsx(DetailType, { children: t }, t || idx))) }), _jsx(TitleDetail, { children: "Stats" }), _jsxs(DetailStats, { children: [_jsxs(StatItem, { children: [_jsx(StatLabel, { children: "HP:" }), " ", pokemon.stats.hp] }), _jsxs(StatItem, { children: [_jsx(StatLabel, { children: "Attack:" }), " ", pokemon.stats.attack] }), _jsxs(StatItem, { children: [_jsx(StatLabel, { children: "Defense:" }), " ", pokemon.stats.defense] })] }), _jsxs(DetailStats, { children: [_jsxs(StatItem, { children: [_jsx(StatLabel, { children: "Special Attack:" }), " ", pokemon.stats["special-attack"]] }), _jsxs(StatItem, { children: [_jsx(StatLabel, { children: "Special Defense:" }), " ", pokemon.stats["special-defense"]] }), _jsxs(StatItem, { children: [_jsx(StatLabel, { children: "Speed:" }), " ", pokemon.stats.speed] })] }), _jsx(TitleDetail, { children: "Habilidades" }), _jsx(HabilitiesContainer, { children: pokemon.abilities
                            ?.filter((a) => a.ability?.name)
                            .map((a, idx) => (_jsx(HabilitiesList, { children: a.ability.name }, a.ability.name || idx))) }), _jsx(TitleDetail, { children: "Movimentos" }), _jsx(MovesContainer, { children: pokemon.moves
                            ?.slice(0, 30)
                            .filter(m => m.move?.name)
                            .map((m, idx) => (_jsx(MovesList, { children: m.move.name }, m.move.name || idx))) })] }), _jsx(ButtonVoltarHome, { onClick: () => navigate("/"), children: "Voltar para Home" })] }));
};
