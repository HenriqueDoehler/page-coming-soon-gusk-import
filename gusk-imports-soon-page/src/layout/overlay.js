import { Container, TopLeft, BottomRight, DivImg, ImageTest } from "./styles";

export default function Overlay() {
  return (
    <Container>
      <TopLeft>
        <ImageTest />
        <p>@guskimports</p>
      </TopLeft>

      <BottomRight>
        EM
        <br />
        BREVE
      </BottomRight>
    </Container>
  );
}
