import React from "react";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import TvIcon from "@mui/icons-material/Tv";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const Container = styled.div`
  width: 5.6rem;
  height: 100rem;
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background: rgba(29, 29, 29, 0.5);
  box-shadow: 0px 40px 40px 8px rgba(0, 0, 0, 0.16);
  backdrop-filter: blur(2.4rem);
  -webkit-backdrop-filter: blur() (2.4rem);
`;

const Categories = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8rem;
  padding-top: 18rem;
`;

const CategoryItem = styled.li`
  width: 3.2rem;
  height: 3.2rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Categories>
          <CategoryItem>
            <HomeIcon />
          </CategoryItem>
          <CategoryItem>
            <LocalMoviesIcon />
          </CategoryItem>
          <CategoryItem>
            <TvIcon />
          </CategoryItem>
          <CategoryItem>
            <BookmarkIcon />
          </CategoryItem>
        </Categories>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
