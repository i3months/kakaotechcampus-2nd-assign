import styled from "styled-components";
import type { Pokemon } from "@/types/Pokemon";
import PokemonCard from "./PokemonCard";

type Props = {
  pokemons: Pokemon[];
  onAdd: (pokemon: Pokemon) => void;
};

export default function PokemonList({ pokemons, onAdd }: Props) {
  return (
    <Grid>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} onAdd={onAdd} />
      ))}
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;
