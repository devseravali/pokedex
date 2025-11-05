import { useParams, useNavigate } from "react-router-dom";
import { useFavorites } from "../../hooks/useFavorites";
import { usePokemonDetail } from "../../hooks/usePokemonDetail";
import {
  PokemonDetailContainer,
  SectionDetail,
  PokeName,
  PokeImage,
  ImageContainer,
  TitleDetail,
  DetailType,
  DetailStats,
  StatLabel,
  StatItem,
  HabilitiesList,
  MovesList,
  MovesContainer,
  HabilitiesContainer,
  TypeContainer,
  ButtonVoltarHome,
  CarregandoDetail,
  FavoriteButton,
  FavoriteButtonContainer,
  ErroMessage,
} from "./PokemonDetail.style";

export const PokemonDetail = () => {
  const { name } = useParams<{ name: string }>();
  const navigate = useNavigate();
  const { pokemon, loading, error } = usePokemonDetail(name ?? "");
  const { toggleFavorite, isFavorite } = useFavorites();

  if (loading)
    return (
      <CarregandoDetail aria-live="polite">
        <p>Carregando dados do Pokémon...</p>
      </CarregandoDetail>
    );

  if (error)
    return (
      <CarregandoDetail>
        <ErroMessage>Não foi possível carregar os dados do Pokémon. Tente novamente ou volte para a Home.</ErroMessage>
        <ButtonVoltarHome onClick={() => navigate("/")}>Voltar para Home</ButtonVoltarHome>
      </CarregandoDetail>
    );

  if (!pokemon)
    return (
      <CarregandoDetail aria-live="polite">
        <ErroMessage>Pokémon não encontrado.</ErroMessage>
        <ButtonVoltarHome onClick={() => navigate("/")}>Voltar para Home</ButtonVoltarHome>
      </CarregandoDetail>
    );

  return (
    <PokemonDetailContainer>
      <SectionDetail>
        <PokeName>{pokemon.name}</PokeName>

        <ImageContainer>
          <PokeImage src={pokemon.image} alt={pokemon.name} />
        </ImageContainer>

        <FavoriteButtonContainer>
          <FavoriteButton onClick={() => toggleFavorite(pokemon)}>
            {isFavorite(pokemon) ? "Desfavoritar" : "Favoritar"}
          </FavoriteButton>
        </FavoriteButtonContainer>

        <TitleDetail>Tipos</TitleDetail>
        <TypeContainer>
          {pokemon.type?.filter(Boolean).map((t: string | null, idx: number) => (
            <DetailType key={t || idx}>{t}</DetailType>
          ))}
        </TypeContainer>

        <TitleDetail>Stats</TitleDetail>
        <DetailStats>
          <StatItem>
            <StatLabel>HP:</StatLabel> {pokemon.stats.hp}
          </StatItem>
          <StatItem>
            <StatLabel>Attack:</StatLabel> {pokemon.stats.attack}
          </StatItem>
          <StatItem>
            <StatLabel>Defense:</StatLabel> {pokemon.stats.defense}
          </StatItem>
        </DetailStats>

        <DetailStats>
          <StatItem>
            <StatLabel>Special Attack:</StatLabel> {pokemon.stats["special-attack"]}
          </StatItem>
          <StatItem>
            <StatLabel>Special Defense:</StatLabel> {pokemon.stats["special-defense"]}
          </StatItem>
          <StatItem>
            <StatLabel>Speed:</StatLabel> {pokemon.stats.speed}
          </StatItem>
        </DetailStats>

        <TitleDetail>Habilidades</TitleDetail>
        <HabilitiesContainer>
          {pokemon.abilities
            ?.filter((a: { ability: { name: string } }) => a.ability?.name)
            .map((a, idx) => (
              <HabilitiesList key={a.ability.name || idx}>{a.ability.name}</HabilitiesList>
            ))}
        </HabilitiesContainer>

        <TitleDetail>Movimentos</TitleDetail>
        <MovesContainer>
          {pokemon.moves
            ?.slice(0, 30)
            .filter(m => m.move?.name)
            .map((m, idx) => (
              <MovesList key={m.move.name || idx}>{m.move.name}</MovesList>
            ))}
        </MovesContainer>
      </SectionDetail>

      <ButtonVoltarHome onClick={() => navigate("/")}>Voltar para Home</ButtonVoltarHome>
    </PokemonDetailContainer>
  );
};