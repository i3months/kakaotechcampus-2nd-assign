import styled from "styled-components";
import type { Pokemon } from "@/types/Pokemon";
import { MOCK_DATA } from "@/data/MOCK_DATA";
import Dashboard from "@/components/Dashboard";
import PokemonList from "@/components/PokemonList";

type Props = {
  selectedPokemons: Pokemon[];
  onAdd: (pokemon: Pokemon) => void;
  onRemove: (id: number) => void;
};

export default function Dex({ selectedPokemons, onAdd, onRemove }: Props) {
  return (
    <Container>
      <Dashboard pokemons={selectedPokemons} onRemove={onRemove} />
      <PokemonList pokemons={MOCK_DATA} onAdd={onAdd} />
    </Container>
  );
}

const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
