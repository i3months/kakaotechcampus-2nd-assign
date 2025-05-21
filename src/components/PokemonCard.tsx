import styled from "styled-components";
import type { Pokemon } from "@/types/Pokemon";
import { useNavigate } from "react-router-dom";

type Props = {
  pokemon: Pokemon;
  onAdd: (pokemon: Pokemon) => void;
};

export default function PokemonCard({ pokemon, onAdd }: Props) {
  const navigate = useNavigate();

  return (
    <Card onClick={() => navigate(`/detail?id=${pokemon.id}`)}>
      <Image src={pokemon.image} alt={pokemon.name} />
      <PokemonNumber>#{String(pokemon.id).padStart(3, "0")}</PokemonNumber>
      <Name>{pokemon.name}</Name>
      <AddButton onClick={() => onAdd(pokemon)}>Add to Deck</AddButton>
    </Card>
  );
}

const Card = styled.div`
  background-color: #f7f7f7;
  border-radius: 12px;
  padding: 1rem;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }
`;

const Image = styled.img`
  width: 80px;
  height: 80px;
  transition: transform 0.2s ease;

  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

const PokemonNumber = styled.p`
  margin: 0.5rem 0 0;
  font-weight: bold;
  color: #888;
  font-size: 0.9rem;
`;

const Name = styled.h3`
  margin: 0.3rem 0;
`;

const AddButton = styled.button`
  margin-top: 0.5rem;
  padding: 0.4rem 0.8rem;
  border: none;
  border-radius: 6px;
  background-color: #4caf50;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #3b943f;
  }
`;
