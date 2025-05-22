// src/App.tsx
import "./App.css";
import AppRouter from "@/routes/Router";
import { PokemonProvider } from "@/contexts/PokemonContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <PokemonProvider>
      <AppRouter />
      <ToastContainer position="top-center" autoClose={2000} />
    </PokemonProvider>
  );
}

export default App;
