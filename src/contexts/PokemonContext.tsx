import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { Pokemon } from "@/types/Pokemon";
import { toast } from "react-toastify";

type PokemonContextType = {
  selectedPokemons: Pokemon[];
  addPokemon: (pokemon: Pokemon) => void;
  removePokemon: (id: number) => void;
};

const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

export function PokemonProvider({ children }: { children: ReactNode }) {
  const [selectedPokemons, setSelectedPokemons] = useState<Pokemon[]>([]);

  const addPokemon = (pokemon: Pokemon) => {
    if (selectedPokemons.find((p) => p.id === pokemon.id)) {
      toast.warning("Already picked.");
      return;
    }
    if (selectedPokemons.length >= 6) {
      toast.error("Party can't take more than 6 pokemon.");
      return;
    }
    setSelectedPokemons([...selectedPokemons, pokemon]);
    toast.success(`${pokemon.name} have added to your deck!`);
  };

  const removePokemon = (id: number) => {
    setSelectedPokemons(selectedPokemons.filter((p) => p.id !== id));
    toast.info(`Removed from Deck.`);
  };

  return (
    <PokemonContext.Provider
      value={{
        selectedPokemons,
        addPokemon,
        removePokemon,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}

export function usePokemonContext() {
  const context = useContext(PokemonContext);
  if (!context) {
    throw new Error("usePokemonContext must used in PokemonProvider.");
  }
  return context;
}
