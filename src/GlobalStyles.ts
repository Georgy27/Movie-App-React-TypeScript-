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

a {
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 24px;
color: #FFFFFF;
text-decoration:none;
}
`;

export const Container = styled.div`
  max-width: 170rem;
  margin: 0 auto;
`;
// Featured and Releases styles
export const Rating = styled.h4`
  background: rgba(29, 29, 29, 0.5);
  border-radius: 50%;
  color: #0feffd;
  padding: 0.4rem 0.8rem;
  width: fit-content;
  position: absolute;
  top: 0.5rem;
`;

export const SectionTitle = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  margin-left: 11rem;
  padding-bottom: 3rem;
  padding-top: 3rem;
  cursor: pointer;
`;

export const Description = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  background: black;
  color: white;
  opacity: 0;
  visibility: hidden;
  -webkit-transition: visibility 0s, opacity 0.5s linear;
  transition: visibility 0s, opacity 0.5s linear;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h3``;

export const TitleBig = styled.h2``;
export const Year = styled.p`
  opacity: 0.7;
`;

export const MediaType = styled.p`
  opacity: 0.7;
`;

// BTN

export const Btn = styled.button`
  width: 28.8rem;
  height: 5.6rem;
  background: #e10856;
  box-shadow: 0px 16px 16px 4px rgba(0, 0, 0, 0.12);
  border-radius: 4rem;
`;
