import { Navbar } from "../components";
import { Container } from "../GlobalStyles";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  gap: 18rem;
`;

const Series = () => {
  return (
    <Container>
      <Wrapper>
        <Navbar />
        <h1>Series</h1>
      </Wrapper>
    </Container>
  );
};

export default Series;
