import { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchContent } from "../../api/axios";
import { img_500, unavailable } from "../../config/config";
import {
  Rating,
  SectionTitle,
  Description,
  Info,
  Year,
  MediaType,
  TitleBig,
} from "../../GlobalStyles";
import { ContentResponse } from "../../models/content";
import { Link } from "react-router-dom";

const Container = styled.div`
  max-width: 164.4rem;
`;
const Wrapper = styled.div`
  display: flex;
  margin-left: 5.6rem;
  overflow: hidden;
`;

const FeaturedItem = styled.div`
  flex: 0 0 50.4rem;
  height: 73.6rem;
  position: relative;
  cursor: pointer;
  overflow: hidden;

  &:hover ${Description} {
    width: 100%;
    padding: 8px 15px;
    visibility: visible;
    opacity: 0.7;
  }
`;

const Image = styled.img`
  width: 100%;
`;

const FeaturedMovies = () => {
  const [content, setContent] = useState<ContentResponse[]>([]);

  useEffect(() => {
    fetchContent("movie")
      .then((data) => {
        setContent(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <SectionTitle>
        <Link to="/movies">Featured Movies →</Link>
      </SectionTitle>
      <Wrapper>
        {content &&
          content.map((item) => {
            const {
              release_date,
              title,
              id,
              poster_path: poster,
              vote_average,
            } = item;

            return (
              <Link
                to={`/content/${id}`}
                style={{ flex: "0 0 50.4rem" }}
                key={id}
              >
                <FeaturedItem>
                  <Image
                    src={poster ? `${img_500}/${poster}` : unavailable}
                    alt={title}
                  />
                  <Rating>{(+vote_average).toPrecision(2)}</Rating>
                  <Description>
                    <TitleBig>{title}</TitleBig>
                    <Info>
                      <MediaType>movie</MediaType>
                      <Year>{release_date}</Year>
                    </Info>
                  </Description>
                </FeaturedItem>
              </Link>
            );
          })}
      </Wrapper>
    </Container>
  );
};

export default FeaturedMovies;
