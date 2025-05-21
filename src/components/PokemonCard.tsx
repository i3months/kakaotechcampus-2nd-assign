// src/components/PokemonCard.tsx
import styled from "styled-components";
import type { Pokemon } from "@/types/Pokemon";

type Props = {
  pokemon: Pokemon;
};

export default function PokemonCard({ pokemon }: Props) {
  return (
    <Card>
      <Image src={pokemon.image} alt={pokemon.name} />
      <Number>#{String(pokemon.id).padStart(3, "0")}</Number>
      <Name>{pokemon.name}</Name>
      <AddButton>추가</AddButton>
    </Card>
  );
}

const Card = styled.div`
  background-color: #f7f7f7;
  border-radius: 12px;
  padding: 1rem;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 80px;
  height: 80px;
`;

const Number = styled.p`
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
