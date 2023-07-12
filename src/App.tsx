import GlobalStyle from './GlobalStyle';
import FlexList from './flex/FlexList';
import styled from 'styled-components';
function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <FlexList />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;

  justify-content: center;
`;
