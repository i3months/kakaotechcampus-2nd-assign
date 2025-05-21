import styled from "styled-components";
import { useState } from "react";
import type { Pokemon } from "@/types/Pokemon";
import { MOCK_DATA } from "@/data/MOCK_DATA";
import Dashboard from "@/components/Dashboard";
import PokemonList from "@/components/PokemonList";

export default function Dex() {
  const [selectedPokemons, setSelectedPokemons] = useState<Pokemon[]>([]);

  const handleAddPokemon = (pokemon: Pokemon) => {
    if (selectedPokemons.find((p) => p.id === pokemon.id)) {
      alert("Already picked.");
      return;
    }
    if (selectedPokemons.length >= 6) {
      alert("Party can't take more than 6 pokemon.");
      return;
    }
    setSelectedPokemons([...selectedPokemons, pokemon]);
  };

  const handleRemovePokemon = (id: number) => {
    setSelectedPokemons(selectedPokemons.filter((p) => p.id !== id));
  };

  return (
    <Container>
      <Dashboard pokemons={selectedPokemons} onRemove={handleRemovePokemon} />
      <PokemonList pokemons={MOCK_DATA} onAdd={handleAddPokemon} />
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
