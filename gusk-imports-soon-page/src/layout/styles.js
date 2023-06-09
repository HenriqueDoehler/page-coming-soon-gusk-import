import styled from "styled-components";

export const Container = styled.div`
  font-size: 130px;
  & h1 {
    padding: 0;
    margin: 0 0 0.05em 0;
    font-family: "Ayer Poster", serif;
    font-weight: 400;
    font-size: min(18vw, 14em);
    line-height: 0.85em;
    z-index: 100;
  }
  @media (max-width: 768px) {
    font-size: 12vw;
  }
  @media (max-width: 368px) {
    font-size: 10vw;
  }
`;

export const DivImg = styled.div`
  display: flex;
  max-width: 600px;
`;

export const TopLeft = styled.div`
  position: absolute;
  top: 5vw;
  left: 5vw;
  font-size: 30px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const BottomRight = styled.div`
  position: absolute;
  bottom: 5vw;
  right: 5vw;
  width: 35ch;
  max-width: 40%;
  line-height: 1em;
  letter-spacing: -0.01em;
  text-align: right;
  padding: 20px;
  @media (max-width: 768px) {
    bottom: 50vw;
  }
`;

export const ImageTest = styled.div`
  width: 600px;
  height: 200px;
  background-image: url("/guskLogosvg.svg");
  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
    width: 150px;
    height: 51px;
  }
`;
