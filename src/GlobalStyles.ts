import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
    box-sizing: border-box;
    margin:0;
    padding:0;
}
html { 
    font-size: 10px; 

}
body {
    font-family: "Roboto";
     background-color: #1D1D1D;
     color: #FFFFFF;
}

p {
    line-height: 3.2rem;
    font-size: 1.6rem;
    font-weight: 40rem;
}

h1 {
font-weight: 50rem;
font-size: 5.6rem;
line-height: 6.4rem;
}

h2 {
font-weight: 50rem;
font-size: 3.2rem;
line-height: 4rem;
}

h3 {
font-weight: 50rem;
font-size: 2.4rem;
line-height: 3.2rem;
}

h4 {
font-weight: 400;
font-size: 14px;
line-height: 16px;
}

img {
    max-width: 100%;
}
`;

export const Container = styled.div`
  max-width: 170rem;
  margin: 0 auto;
`;

export const MovieGenre = styled.h4`
  background: rgba(29, 29, 29, 0.5);
  border-radius: 0 0.8rem;
  color: #0feffd;
  padding: 0.4rem 0.8rem;
  max-width: 11.1rem;
`;
