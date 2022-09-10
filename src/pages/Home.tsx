import React from "react";
import { Container } from "../GlobalStyles";
import {
  Announcement,
  FeaturedTv,
  Trending,
  FeaturedMovies,
} from "../components/index";

const Home = () => {
  return (
    <Container>
      <Announcement />
      <Trending />
      <FeaturedTv />
      <FeaturedMovies />
    </Container>
  );
};

export default Home;
