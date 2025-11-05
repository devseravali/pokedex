import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from "react-router-dom";
import { CardFront, ImageStyles, H3, H4, P, ButtonFavorite, ButtonDetailed, BackCard, StrongTypes, StrongMoves, MovesParagraph, StrongHabilities, HabilitiesParagraph, StatsList, PokemonCard as PokemonCardStyled, StarFilled, StarEmpty, NaoEncontrado, } from "./PokemonCard.style";
import { PokemonStats } from "../PokemonStats/PokemonStats";
import { useState } from "react";
export const PokemonCard = ({ pokemon, isFavorite, toggleFavorite, }) => {
    const navigate = useNavigate();
    const [isFlipped, setIsFlipped] = useState(false);
    const flip = () => setIsFlipped((prev) => !prev);
    const handleNavigateCardClick = (e) => {
        e.stopPropagation();
        navigate(`/pokemon/${pokemon.name}`);
    };
    return (_jsxs(PokemonCardStyled, { onClick: flip, type: pokemon.type?.[0], className: isFavorite?.(pokemon) ? "favorite" : "", children: [!isFlipped && (_jsxs(CardFront, { children: [pokemon.image ? (_jsx(ImageStyles, { src: pokemon.image, alt: pokemon.name, loading: "lazy" })) : (_jsx(NaoEncontrado, { children: "Imagem n\u00E3o encontrada" })), _jsx(H3, { children: pokemon.name ?? "Nome não encontrado" }), pokemon.type && pokemon.type.length > 0 ? (_jsxs(P, { children: [_jsx(StrongTypes, { children: "Tipos" }), _jsx("br", {}), pokemon.type.join(", ")] })) : (_jsx(NaoEncontrado, { children: "Tipos n\u00E3o encontrados" })), toggleFavorite && (_jsx(ButtonFavorite, { onClick: (e) => {
                            e.stopPropagation();
                            toggleFavorite(pokemon);
                        }, "aria-label": "Toggle Favorite", children: isFavorite?.(pokemon) ? _jsx(StarFilled, {}) : _jsx(StarEmpty, {}) }))] })), isFlipped && (_jsxs(BackCard, { children: [pokemon.moves && pokemon.moves.length > 0 ? (_jsxs(MovesParagraph, { children: [_jsx(StrongMoves, { children: "Movimentos" }), _jsx("br", {}), pokemon.moves
                                .slice(0, 10)
                                .filter((m) => !!m.move.name)
                                .map((m, idx) => (_jsxs("span", { children: [m.move.name, idx < Math.min(9, pokemon.moves.length - 1)
                                        ? ", "
                                        : ""] }, m.move.name || idx))), pokemon.moves.length > 10 ? "..." : ""] })) : (_jsx(NaoEncontrado, { children: "Movimentos n\u00E3o encontrados" })), pokemon.abilities && pokemon.abilities.length > 0 ? (_jsxs(HabilitiesParagraph, { children: [_jsx(StrongHabilities, { children: "Habilidades" }), _jsx("br", {}), pokemon.abilities
                                .filter((a) => !!a.ability.name)
                                .map((a, idx) => (_jsxs("span", { children: [a.ability.name, idx < pokemon.abilities.length - 1 ? ", " : ""] }, a.ability.name || idx)))] })) : (_jsx(NaoEncontrado, { children: "Habilidades n\u00E3o encontradas" })), _jsx(H4, { children: "Stats" }), pokemon.stats && typeof pokemon.stats === "object" ? (_jsx(StatsList, { children: _jsx(PokemonStats, { pokemon: pokemon }) })) : (_jsx(NaoEncontrado, { children: "Stats Pok\u00E9mon n\u00E3o encontrados" })), _jsx(ButtonDetailed, { onClick: handleNavigateCardClick, children: "Ver Detalhes" })] }))] }));
};
