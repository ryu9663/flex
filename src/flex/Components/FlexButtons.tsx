import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { FLEX_DIRECTION_ENUM } from '../FlexList';

const FlexButtons = ({
  flexDirections,
  setFlexDirection,
}: {
  flexDirections: (typeof FLEX_DIRECTION_ENUM)[keyof typeof FLEX_DIRECTION_ENUM][];
  setFlexDirection: Dispatch<
    SetStateAction<'rows' | 'column' | 'row-reverse' | 'column-reverse'>
  >;
}) => {
  return (
    <Wrapper>
      {flexDirections.map((flexDirection, i) => (
        <Button onClick={() => setFlexDirection(flexDirection)} key={i}>
          {flexDirection}
        </Button>
      ))}
    </Wrapper>
  );
};

export default FlexButtons;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 15px;
`;

const Button = styled.button``;
