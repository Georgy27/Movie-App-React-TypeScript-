import styled from "styled-components";
import { Link } from "react-router-dom";
import { Btn } from "../GlobalStyles";

const Wrapper = styled.div`
  background: hsl(8, 64%, 90%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 2rem;
  height: 100vh;
  padding: 5rem 0;
`;
const ErrorMsg = styled.h2`
  font-size: 10rem;
`;
const ErrorText = styled.h3`
  text-transform: none;
  margin-bottom: 2rem;
`;

const Error = () => {
  return (
    <Wrapper>
      <ErrorMsg>404</ErrorMsg>
      <ErrorText>Sorry, the page you tried cannot be found</ErrorText>
      <Btn>
        <Link to="/">Back Home</Link>
      </Btn>
    </Wrapper>
  );
};

export default Error;
