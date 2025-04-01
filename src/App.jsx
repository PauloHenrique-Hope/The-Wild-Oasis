import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";

const H1 = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: var(--color-brand-500);
`;

function App() {
  return (
    <>
      <GlobalStyle />

      <H1>Hello</H1>
    </>
  );
}

export default App;
