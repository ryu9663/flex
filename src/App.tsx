import GlobalStyle from './GlobalStyle';
import FlexList from './flex/FlexList';
import styled from 'styled-components';
function App() {
  return (
    <Wrapper>
      <h1>display:flex에 대하여</h1>
      <hr />
      <GlobalStyle />
      <FlexList />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.main`
  h1 {
    text-align: center;
  }
  display: flex;
  flex-direction: column;

  justify-content: center;
`;
