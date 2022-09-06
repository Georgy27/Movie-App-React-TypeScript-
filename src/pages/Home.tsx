import React from "react";
import { Container } from "../GlobalStyles";
import { Announcement, Featured, Navbar, Releases } from "../components/index";

const Home = () => {
  return (
    <Container>
      <Announcement />
      <Releases />
      <Featured />
    </Container>
  );
};

export default Home;
