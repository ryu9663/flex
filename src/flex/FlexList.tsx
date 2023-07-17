import React, { useState } from 'react';
import styled from 'styled-components';

import FlexScreen from './Components/FlexScreen';
import FlexButtons from './Components/FlexButtons';
import { FLEX_DIRECTION_ENUM, JUSTIFY_CONTENT_ENUM } from './types';
import { Column, Row } from '../GlobalStyle';

const FlexList = () => {
  const [flexDirection, setFlexDirection] = useState<
    (typeof FLEX_DIRECTION_ENUM)[keyof typeof FLEX_DIRECTION_ENUM]
  >(FLEX_DIRECTION_ENUM.ROWS);

  const [justifyContent, setJustifyContent] = useState<
    (typeof JUSTIFY_CONTENT_ENUM)[keyof typeof JUSTIFY_CONTENT_ENUM]
  >(JUSTIFY_CONTENT_ENUM.NONE);

  return (
    <Wrapper>
      <Code>{`display : flex; 
flex-direction : ${flexDirection};
${
  justifyContent !== JUSTIFY_CONTENT_ENUM.NONE
    ? `justify-content : ${justifyContent};`
    : ''
}`}</Code>
      <Row>
        <Column justifyContent='center'>
          <FlexButtons
            subtitle={'flex-direction'}
            buttonNames={Object.values(FLEX_DIRECTION_ENUM)}
            setStyle={setFlexDirection}
          />
          <br />
          <FlexButtons
            subtitle={'justify-content'}
            buttonNames={Object.values(JUSTIFY_CONTENT_ENUM)}
            setStyle={setJustifyContent}
          />
        </Column>

        <FlexScreen
          texts={['aaa', 'bbb', 'ccc', 'ddd']}
          flexDirection={flexDirection}
          justifyContent={justifyContent}
          gap={10}
        />
      </Row>
    </Wrapper>
  );
};

export default FlexList;

const Wrapper = styled.section`
width:100%:



`;

const Code = styled.pre`
  padding: 30px;
  margin: 30px auto;
  width: 500px;
  border: 1px solid skyblue;
  border-radius: 10px;
  line-height: 1.5rem;
`;
