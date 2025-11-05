import type { PokemonFull } from "../../types/pokemon";
import { PokemonCard } from "../PokemonCard/PokemonCard";
import { useNavigate } from "react-router-dom";
import {
  PokemonListContainer,
  PokemonListItem,
  BotaoVoltarPraHome,
  NaoEncontradoPokemon,
} from "./PokemonList.style";

type PokemonListProps = {
  pokemons: PokemonFull[];
  toggleFavorite?: (pokemon: PokemonFull) => void; 
  isFavorite?: (pokemon: PokemonFull) => boolean;  
};

export const PokemonList = ({
  pokemons,
  toggleFavorite,
  isFavorite,
}: PokemonListProps) => {
  const navigate = useNavigate();

  if (pokemons.length === 0) {
    return (
      <>
        <NaoEncontradoPokemon>Pokémon não encontrado.</NaoEncontradoPokemon>
        <BotaoVoltarPraHome onClick={() => navigate("/")}>
          Voltar para Home
        </BotaoVoltarPraHome>
      </>
    );
  }

  return (
    <PokemonListContainer role="list">
      {pokemons.map((p) => (
        <PokemonListItem key={`pokemon-${p.name}`} role="listitem">
          <PokemonCard
            pokemon={p}
            toggleFavorite={toggleFavorite}
            isFavorite={isFavorite}
          />
        </PokemonListItem>
      ))}
    </PokemonListContainer>
  );
};