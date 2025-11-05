import { StatItem, StrongStat } from "./PokemonStats.style";
import type { PokemonFull } from "../../types/pokemon";


interface PokemonStatsProps {
    pokemon: PokemonFull;
}

export const PokemonStats = ({ pokemon }: PokemonStatsProps) => {
    return (
        <>
            <StatItem>
                <StrongStat>HP:</StrongStat> {pokemon.stats.hp ?? "Não encontrado"}
            </StatItem>
            <StatItem>
                <StrongStat>Ataque:</StrongStat> {pokemon.stats.attack ?? "Não encontrado"}
            </StatItem>
            <StatItem>
                <StrongStat>Defesa:</StrongStat> {pokemon.stats.defense ?? "Não encontrado"}
            </StatItem>
            <StatItem>
                <StrongStat>Velocidade:</StrongStat> {pokemon.stats.speed ?? "Não encontrado"}
            </StatItem>
            <StatItem>
                <StrongStat>Especial Ataque:</StrongStat> {pokemon.stats["special-attack"] ?? "Não encontrado"}
            </StatItem>
            <StatItem>
                <StrongStat>Especial Defesa:</StrongStat> {pokemon.stats["special-defense"] ?? "Não encontrado"}
            </StatItem>
        </>
    );
}