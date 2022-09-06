import React from "react";
import styled from "styled-components";
import { MovieGenre } from "../../GlobalStyles";

const Container = styled.div`
  max-width: 164.4rem;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 1.6rem;
  margin-left: 5.6rem;
  overflow: hidden;
`;

const SectionTitle = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  margin-left: 11rem;
  padding-bottom: 3rem;
  padding-top: 3rem;
  cursor: pointer;
`;
const ReleaseItem = styled.div`
  flex: 0 0 29.2rem;
  height: 44rem;
  position: relative;
  background-image: linear-gradient(
      180deg,
      rgba(29, 29, 29, 0) 0%,
      rgba(29, 29, 29, 0.8) 80.79%
    ),
    url("https://i.redd.it/mbgn1hxgqe761.png");
  background-size: cover;
  cursor: pointer;
  overflow: hidden;
`;

const Description = styled.div`
  position: absolute;
  bottom: 24px;
  left: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
`;

const Title = styled.h3``;

const Releases = () => {
  return (
    <Container>
      <SectionTitle>New releases →</SectionTitle>
      <Wrapper>
        <ReleaseItem>
          <Description>
            <MovieGenre>Fantasy</MovieGenre>
            <Title>Wodner Woman 1984</Title>
          </Description>
        </ReleaseItem>
        <ReleaseItem>
          <Description>
            <MovieGenre>Fantasy</MovieGenre>
            <Title>Wodner Woman 1984</Title>
          </Description>
        </ReleaseItem>
        <ReleaseItem>
          <Description>
            <MovieGenre>Fantasy</MovieGenre>
            <Title>Wodner Woman 1984</Title>
          </Description>
        </ReleaseItem>
        <ReleaseItem>
          <Description>
            <MovieGenre>Fantasy</MovieGenre>
            <Title>Wodner Woman 1984</Title>
          </Description>
        </ReleaseItem>
        <ReleaseItem>
          <Description>
            <MovieGenre>Fantasy</MovieGenre>
            <Title>Wodner Woman 1984</Title>
          </Description>
        </ReleaseItem>
        <ReleaseItem>
          <Description>
            <MovieGenre>Fantasy</MovieGenre>
            <Title>Wodner Woman 1984</Title>
          </Description>
        </ReleaseItem>
      </Wrapper>
    </Container>
  );
};

export default Releases;
