import React, { useState } from 'react';
import styled from 'styled-components';
import FlexButtons from './Components/FlexButtons';
import FlexScreen from './Components/FlexScreen';

export const FLEX_DIRECTION_ENUM = {
  ROWS: 'rows',
  COLUMN: 'column',
  ROW_REVERSE: 'row-reverse',
  COLUMN_REVERSE: 'column-reverse',
} as const;

const FlexList = () => {
  const [flexDirection, setFlexDirection] = useState<
    (typeof FLEX_DIRECTION_ENUM)[keyof typeof FLEX_DIRECTION_ENUM]
  >(FLEX_DIRECTION_ENUM.ROWS);

  return (
    <Wrapper>
      <FlexButtons
        flexDirections={Object.values(FLEX_DIRECTION_ENUM)}
        setFlexDirection={setFlexDirection}
      />

      <FlexScreen
        flexDirections={Object.values(FLEX_DIRECTION_ENUM)}
        flexDirection={flexDirection}
        gap={10}
      />
    </Wrapper>
  );
};

export default FlexList;

const Wrapper = styled.section`
width:100%:`;
