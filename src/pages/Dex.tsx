import Dashboard from "@/components/Dashboard";
import PokemonList from "@/components/PokemonList";
import styled from "styled-components";

export default function Dex() {
  return (
    <Container>
      <Dashboard />
      <PokemonList />
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
