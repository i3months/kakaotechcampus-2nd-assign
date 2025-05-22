import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MOCK_DATA } from "@/data/MOCK_DATA";
import type { Pokemon } from "@/types/Pokemon";
import { toast } from "react-toastify";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

type Props = {
  selectedPokemons: Pokemon[];
  onAdd: (p: Pokemon) => void;
};

export default function Detail({ selectedPokemons, onAdd }: Props) {
  const query = useQuery();
  const idString = query.get("id");
  const id = idString ? Number(idString) : null;

  const navigate = useNavigate();

  const pokemon: Pokemon | undefined = MOCK_DATA.find(
    (p) => p.id === Number(id)
  );

  if (!pokemon) return <div>Can't find that pokemon.</div>;

  const handleAdd = () => {
    if (selectedPokemons.find((p) => p.id === pokemon.id)) {
      toast.warning("Already picked.");
      return;
    }
    if (selectedPokemons.length >= 6) {
      toast.error("Party can't take more than 6 pokemon.");
      return;
    }
    onAdd(pokemon);
    toast.success(`${pokemon.name} have added to your deck!`);
  };

  return (
    <Container>
      <BackButton onClick={() => navigate(-1)}>← Go Back</BackButton>

      <Card>
        <Image src={pokemon.image} alt={pokemon.name} />
        <PokemonNumber>#{String(pokemon.id).padStart(3, "0")}</PokemonNumber>
        <Name>{pokemon.name}</Name>
        <Type>Type: {pokemon.type}</Type>
        <Description>{pokemon.description}</Description>
        <AddButton onClick={handleAdd}>+ Add to Deck</AddButton>
      </Card>
    </Container>
  );
}

const AddButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 8px;
  background-color: #4caf50;
  color: white;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #3a9440;
  }
`;

const Container = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 1rem;
`;

const BackButton = styled.button`
  margin-bottom: 1rem;
  background: none;
  border: none;
  font-size: 1rem;
  color: #0077cc;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Card = styled.div`
  background-color: #fefefe;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Image = styled.img`
  width: 120px;
  height: 120px;
`;

const PokemonNumber = styled.p`
  font-size: 0.9rem;
  color: #888;
`;

const Name = styled.h2`
  margin: 0.5rem 0;
`;

const Type = styled.p`
  margin: 0.5rem 0;
  font-weight: bold;
`;

const Description = styled.p`
  margin-top: 1rem;
  font-size: 0.95rem;
  color: #555;
`;
