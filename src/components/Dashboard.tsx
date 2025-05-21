import styled from "styled-components";

export default function Dashboard() {
  return (
    <Wrapper>
      <Title>Pokemon Deck (0/6)</Title>
      <CardList></CardList>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 2px solid #ddd;
  padding: 1rem;
  border-radius: 12px;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
`;

const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;
