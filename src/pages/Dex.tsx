import styled from "styled-components";
import { MOCK_DATA } from "@/data/MOCK_DATA";
import Dashboard from "@/components/Dashboard";
import PokemonList from "@/components/PokemonList";
import { usePokemonContext } from "@/contexts/PokemonContext";

export default function Dex() {
  const { selectedPokemons, addPokemon, removePokemon } = usePokemonContext();

  return (
    <Container>
      <Dashboard pokemons={selectedPokemons} onRemove={removePokemon} />
      <PokemonList pokemons={MOCK_DATA} onAdd={addPokemon} />
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
