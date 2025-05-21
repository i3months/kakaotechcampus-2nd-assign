import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MOCK_DATA } from "@/data/MOCK_DATA";
import type { Pokemon } from "@/types/Pokemon";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Detail() {
  const query = useQuery();
  const idString = query.get("id");
  const id = idString ? Number(idString) : null;

  const navigate = useNavigate();

  const pokemon: Pokemon | undefined = MOCK_DATA.find(
    (p) => p.id === Number(id)
  );

  if (!pokemon) return <div>포켓몬을 찾을 수 없습니다.</div>;

  return (
    <Container>
      <BackButton onClick={() => navigate(-1)}>← Go Back</BackButton>

      <Card>
        <Image src={pokemon.image} alt={pokemon.name} />
        <PokemonNumber>#{String(pokemon.id).padStart(3, "0")}</PokemonNumber>
        <Name>{pokemon.name}</Name>
        <Type>Type: {pokemon.type}</Type>
        <Description>{pokemon.description}</Description>
      </Card>
    </Container>
  );
}

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
