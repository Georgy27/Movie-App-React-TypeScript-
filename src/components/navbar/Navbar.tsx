import styled from "styled-components";
import { Link } from "react-router-dom";
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
            <Link to="/">
              <HomeIcon />
            </Link>
          </CategoryItem>
          <CategoryItem>
            <Link to="/movies">
              <LocalMoviesIcon />
            </Link>
          </CategoryItem>
          <CategoryItem>
            <Link to="/series">
              <TvIcon />
            </Link>
          </CategoryItem>
          <CategoryItem>
            <Link to="/favourites">
              <BookmarkIcon />
            </Link>
          </CategoryItem>
        </Categories>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
