import { styled } from "styled-components";
import GlobalStyle from "./styles/global";
import Cover from "./components/Cover";
import Gallery from "./components/Gallery";
import Info from "./components/Info";
import GuestBook from "./components/GuestBook";

const MainDiv = styled.main`
  width: 600px;
  height: ${(props) => props.height}vh;
  margin: 0 auto;
  background-color: var(--white);
  box-shadow: 0 0 20px 10px rgba(255, 255, 255, 0.5);
  opacity: 0;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

function App() {
  const height = 535;
  const page = 4;

  return (
    <>
      <GlobalStyle />

      <Cover page={page} height={height} />
      <MainDiv id="main" height={height}>
        <Info marginTop={height / page} />
        <Gallery />
        <GuestBook />
      </MainDiv>
    </>
  );
}

export default App;
