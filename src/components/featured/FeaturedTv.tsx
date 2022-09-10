import styled from "styled-components";
import { useEffect, useState } from "react";
import { fetchContent } from "../../api/axios";
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
import { img_500, unavailable } from "../../config/config";

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
const FeaturedTv = () => {
  const [content, setContent] = useState<ContentResponse[]>([]);

  useEffect(() => {
    fetchContent("tv")
      .then((data) => {
        setContent(data);
      })
      .catch((error) => {
        console.log(error);
        console.log("fuck those images");
      });
  }, []);
  return (
    <Container>
      <SectionTitle>
        <Link to="/series">Featured Tv Series →</Link>
      </SectionTitle>
      <Wrapper>
        {content &&
          content.map((item) => {
            const {
              title,
              id,
              poster_path: poster,
              name,
              first_air_date,
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
                    <TitleBig>{name}</TitleBig>
                    <Info>
                      <MediaType>tv</MediaType>
                      <Year>{first_air_date}</Year>
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

export default FeaturedTv;
