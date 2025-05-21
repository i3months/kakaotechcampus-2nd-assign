import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Dex from "@/pages/Dex";
import Detail from "@/pages/Detail";
import type { Pokemon } from "@/types/Pokemon";

type Props = {
  selectedPokemons: Pokemon[];
  onAdd: (p: Pokemon) => void;
  onRemove: (id: number) => void;
};

export default function AppRouter({
  selectedPokemons,
  onAdd,
  onRemove,
}: Props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dex"
          element={
            <Dex
              selectedPokemons={selectedPokemons}
              onAdd={onAdd}
              onRemove={onRemove}
            />
          }
        />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}
