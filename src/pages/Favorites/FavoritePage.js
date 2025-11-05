import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { PokemonList } from "../../components/PokemonList/PokemonList";
import { useFavorites } from "../../hooks/useFavorites";
import { BackToHomeButton, ContainerButtonError, FavoritePageContainer, H2Favorites, MotionContainer, NoFavoritesMessage, } from "./FavoritePage.Style";
export const FavoritePage = () => {
    const { favoritePokemons, toggleFavorite, isFavorite } = useFavorites();
    const navigate = useNavigate();
    if (favoritePokemons.length === 0) {
        return (_jsxs(_Fragment, { children: [_jsx(NoFavoritesMessage, { children: "Nenhum favorito encontrado" }), _jsx(ContainerButtonError, { children: _jsx(BackToHomeButton, { onClick: () => navigate("/"), children: "Voltar Para Home" }) })] }));
    }
    return (_jsx(FavoritePageContainer, { children: _jsxs(MotionContainer, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -20 }, transition: { duration: 0.5 }, children: [_jsx(H2Favorites, { children: "Pok\u00E9mons Favoritos" }), favoritePokemons.length === 0 ? (_jsxs(NoFavoritesMessage, { children: ["Nenhum Pok\u00E9mon favoritado. Volte \u00E0", " ", _jsx(Link, { to: "/", children: "p\u00E1gina inicial" }), "."] })) : (_jsx(PokemonList, { pokemons: favoritePokemons, toggleFavorite: toggleFavorite, isFavorite: isFavorite })), _jsx(BackToHomeButton, { onClick: () => navigate("/"), children: "Voltar Para Home" })] }) }));
};
