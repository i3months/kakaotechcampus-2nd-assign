// src/components/Dashboard.tsx
import styled from "styled-components";
import type { Pokemon } from "@/types/Pokemon";

type Props = {
  pokemons: Pokemon[];
  onRemove: (id: number) => void;
};

export default function Dashboard({ pokemons, onRemove }: Props) {
  return (
    <Wrapper>
      <Title>Pokemon Deck ({pokemons.length}/6)</Title>
      <CardList>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id}>
            <Image src={pokemon.image} alt={pokemon.name} />
            <Name>{pokemon.name}</Name>
            <RemoveButton onClick={() => onRemove(pokemon.id)}>
              Remove
            </RemoveButton>
          </Card>
        ))}
      </CardList>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 2px solid #ddd;
  padding: 1rem;
  border-radius: 12px;
  background-color: #fff;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
`;

const CardList = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const Card = styled.div`
  width: 100px;
  padding: 0.5rem;
  border: 1px solid #eee;
  border-radius: 8px;
  text-align: center;
  background-color: #fafafa;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const Image = styled.img`
  width: 60px;
  height: 60px;
`;

const Name = styled.p`
  font-size: 0.9rem;
  margin: 0.3rem 0;
`;

const RemoveButton = styled.button`
  background-color: #e74c3c;
  border: none;
  padding: 0.3rem 0.6rem;
  border-radius: 6px;
  color: white;
  cursor: pointer;
  font-size: 0.8rem;

  &:hover {
    background-color: #c0392b;
  }
`;
