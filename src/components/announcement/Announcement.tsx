import { Container, Rating } from "../../GlobalStyles";
import styled from "styled-components";
import Navbar from "../navbar/Navbar";

const Wrapper = styled.div`
  max-height: 64.8rem;
  background-image: linear-gradient(
      269.96deg,
      rgba(29, 29, 29, 0) 0.04%,
      rgba(29, 29, 29, 0.8) 99.5%
    ),
    url("https://afisha.a42.ru/uploads/posters/d8/d8d7db20-a0d0-11eb-8166-53193fa2571e.jpg");
  background-size: cover;
  display: flex;
  gap: 18rem;
`;

const MovieInfo = styled.div`
  max-width: 63.2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 18rem;
`;

const MovieTitle = styled.h1``;

const MovieDescription = styled.p``;

const MovieBtn = styled.button`
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  width: 20rem;
  padding: 1.4rem;
  background-color: #cf245f;
  background-image: linear-gradient(to bottom right, #fcd34d, #ef4444, #ec4899);
  box-shadow: 0px 16px 16px 4px rgba(0, 0, 0, 0.12);
  border-radius: 40px;
  color: #fff;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  :hover {
    box-shadow: none;
  }
`;

const Announcement = () => {
  return (
    <Container>
      <Wrapper>
        <Navbar />
        <MovieInfo>
          <Rating>Science Fiction</Rating>
          <MovieTitle>Godzila vs. Kong</MovieTitle>
          <MovieDescription>
            In a time when monsters walk the Earth, humanity’s fight for its
            future sets Godzilla and Kong on a collision course that will see
            the two most powerful forces of nature on the planet collide in a
            spectacular battle for the ages.
          </MovieDescription>
          <MovieBtn>Watch now</MovieBtn>
        </MovieInfo>
      </Wrapper>
    </Container>
  );
};

export default Announcement;
