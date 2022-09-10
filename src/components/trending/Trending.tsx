import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchContent } from "../../api/axios";
import { img_300, unavailable } from "../../config/config";
import {
  Rating,
  SectionTitle,
  Description,
  Info,
  Year,
  MediaType,
  Title,
} from "../../GlobalStyles";
import { ContentResponse } from "../../models/content";

const Container = styled.div`
  max-width: 164.4rem;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 1.6rem;
  margin-left: 5.6rem;
  overflow: hidden;
`;

const TrendingItem = styled.div`
  position: relative;
  flex: 0 0 29.2rem;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  overflow: hidden;
  background-color: #282c34;

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

const Trending = () => {
  const [content, setContent] = useState<ContentResponse[]>([]);

  useEffect(() => {
    fetchContent("trending")
      .then((data) => {
        setContent(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <SectionTitle>Trending →</SectionTitle>
      <Wrapper>
        {content &&
          content.map((item) => {
            const {
              release_date,
              title,
              id,
              media_type,
              poster_path: poster,
              name,
              first_air_date,
              vote_average,
            } = item;

            return (
              <Link
                to={`/content/${id}`}
                style={{ flex: "0 0 29.2rem" }}
                key={id}
              >
                <TrendingItem>
                  <Image
                    src={poster ? `${img_300}/${poster}` : unavailable}
                    alt={title}
                  />
                  <Rating>{(+vote_average).toPrecision(2)}</Rating>
                  <Description>
                    <Title>{title || name}</Title>
                    <Info>
                      <MediaType>{media_type}</MediaType>
                      <Year>{release_date || first_air_date}</Year>
                    </Info>
                  </Description>
                </TrendingItem>
              </Link>
            );
          })}
      </Wrapper>
    </Container>
  );
};

export default Trending;
