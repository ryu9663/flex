import styled from 'styled-components';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  button{
    cursor:pointer;
    border: 1px skyblue solid;
  padding: 10px 15px;
  background-color: #ffffff;
  border-radius: 10px;
  }
`;

export default GlobalStyle;

export const Row = styled.div<{ justifyContent?: string; alignItems?: string }>`
  display: flex;
  flex-direction: row;
  justify-content: ${({ justifyContent }) => justifyContent || ''};
  align-items: ${({ alignItems }) => alignItems || ''};
`;

export const Column = styled.div<{
  justifyContent?: string;
  alignItems?: string;
}>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ justifyContent }) => justifyContent || ''};
  align-items: ${({ alignItems }) => alignItems || ''};
`;
