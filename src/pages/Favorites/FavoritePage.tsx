import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { PokemonList } from "../../components/PokemonList/PokemonList";
import { useFavorites } from "../../hooks/useFavorites";
import {
  BackToHomeButton,
  ContainerButtonError,
  FavoritePageContainer,
  H2Favorites,
  MotionContainer,
  NoFavoritesMessage,
} from "./FavoritePage.Style";


export const FavoritePage = () => {
  const { favoritePokemons, toggleFavorite, isFavorite } = useFavorites();
  const navigate = useNavigate();

  if (favoritePokemons.length === 0) {
    return (
      <>
        <NoFavoritesMessage>Nenhum favorito encontrado</NoFavoritesMessage>

        <ContainerButtonError>
          <BackToHomeButton onClick={() => navigate("/")}>
            Voltar Para Home
          </BackToHomeButton>
        </ContainerButtonError>
      </>
    );
  }

  return (
    <FavoritePageContainer>
      <MotionContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <H2Favorites>Pokémons Favoritos</H2Favorites>
      {favoritePokemons.length === 0 ? (
        <NoFavoritesMessage>
          Nenhum Pokémon favoritado. Volte à{" "}
          <Link to="/">página inicial</Link>.
        </NoFavoritesMessage>
      ) : (
        <PokemonList
          pokemons={favoritePokemons}
          toggleFavorite={toggleFavorite}
          isFavorite={isFavorite}
        />
      )}

      <BackToHomeButton onClick={() => navigate("/")}>
        Voltar Para Home
      </BackToHomeButton>
      </MotionContainer>
    </FavoritePageContainer>
  );
};