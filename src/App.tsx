import { useState } from "react";
import AppRouter from "@/routes/Router";
import type { Pokemon } from "@/types/Pokemon";
import "./App.css";

function App() {
  const [selectedPokemons, setSelectedPokemons] = useState<Pokemon[]>([]);

  const handleAdd = (pokemon: Pokemon) => {
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

  const handleRemove = (id: number) => {
    setSelectedPokemons(selectedPokemons.filter((p) => p.id !== id));
  };

  return (
    <AppRouter
      selectedPokemons={selectedPokemons}
      onAdd={handleAdd}
      onRemove={handleRemove}
    />
  );
}

export default App;
