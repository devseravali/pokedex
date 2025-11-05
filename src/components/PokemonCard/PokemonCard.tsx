import type { PokemonFull } from "../../types/pokemon";
import { useNavigate } from "react-router-dom";
import {
  CardFront,
  ImageStyles,
  H3,
  H4,
  P,
  ButtonFavorite,
  ButtonDetailed,
  BackCard,
  StrongTypes,
  StrongMoves,
  MovesParagraph,
  StrongHabilities,
  HabilitiesParagraph,
  StatsList,
  PokemonCard as PokemonCardStyled,
  StarFilled,
  StarEmpty,
  NaoEncontrado,
} from "./PokemonCard.style";
import { PokemonStats } from "../PokemonStats/PokemonStats";
import { useState } from "react";

export type PokemonCardProps = {
  pokemon: PokemonFull;
  isFavorite?: (pokemon: PokemonFull) => boolean; 
  toggleFavorite?: (pokemon: PokemonFull) => void; 
};

export const PokemonCard = ({
  pokemon,
  isFavorite,
  toggleFavorite,
}: PokemonCardProps) => {
  const navigate = useNavigate();
  const [isFlipped, setIsFlipped] = useState(false);


  const flip = () => setIsFlipped((prev) => !prev);


  const handleNavigateCardClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/pokemon/${pokemon.name}`);
  };

  return (
    <PokemonCardStyled
      onClick={flip}
      type={pokemon.type?.[0]}
      className={isFavorite?.(pokemon) ? "favorite" : ""}
    >
      {!isFlipped && (
        <CardFront>
          {pokemon.image ? (
            <ImageStyles src={pokemon.image} alt={pokemon.name} loading="lazy" />
          ) : (
            <NaoEncontrado>Imagem não encontrada</NaoEncontrado>
          )}

          <H3>{pokemon.name ?? "Nome não encontrado"}</H3>

          {pokemon.type && pokemon.type.length > 0 ? (
            <P>
              <StrongTypes>Tipos</StrongTypes>
              <br />
              {pokemon.type.join(", ")}
            </P>
          ) : (
            <NaoEncontrado>Tipos não encontrados</NaoEncontrado>
          )}

          {toggleFavorite && (
            <ButtonFavorite
              onClick={(e) => {
                e.stopPropagation();
                toggleFavorite(pokemon);
              }}
              aria-label="Toggle Favorite"
            >
              {isFavorite?.(pokemon) ? <StarFilled /> : <StarEmpty />}
            </ButtonFavorite>
          )}
        </CardFront>
      )}


    {isFlipped && (
      <BackCard>
        {pokemon.moves && pokemon.moves.length > 0 ? (
          <MovesParagraph>
            <StrongMoves>Movimentos</StrongMoves>
            <br />
            {pokemon.moves
              .slice(0, 10)
              .filter((m) => !!m.move.name)
              .map((m, idx) => (
                <span key={m.move.name || idx}>
                  {m.move.name}
                  {idx < Math.min(9, pokemon.moves.length - 1)
                    ? ", "
                    : ""}
                </span>
              ))}
            {pokemon.moves.length > 10 ? "..." : ""}
          </MovesParagraph>
        ) : (
          <NaoEncontrado>Movimentos não encontrados</NaoEncontrado>
        )}

        {pokemon.abilities && pokemon.abilities.length > 0 ? (
          <HabilitiesParagraph>
            <StrongHabilities>Habilidades</StrongHabilities>
            <br />
            {pokemon.abilities
              .filter((a) => !!a.ability.name)
              .map((a, idx) => (
                <span key={a.ability.name || idx}>
                  {a.ability.name}
                  {idx < pokemon.abilities.length - 1 ? ", " : ""}
                </span>
              ))}
          </HabilitiesParagraph>
        ) : (
          <NaoEncontrado>Habilidades não encontradas</NaoEncontrado>
        )}

        <H4>Stats</H4>
        {pokemon.stats && typeof pokemon.stats === "object" ? (
          <StatsList>
            <PokemonStats pokemon={pokemon} />
          </StatsList>
        ) : (
          <NaoEncontrado>Stats Pokémon não encontrados</NaoEncontrado>
        )}
        <ButtonDetailed onClick={handleNavigateCardClick}>
          Ver Detalhes
        </ButtonDetailed>
      </BackCard>
    )}
    </PokemonCardStyled>
  );
};