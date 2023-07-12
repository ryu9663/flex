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
      <Title>
        button을 클릭하면 <strong>flex-direction</strong> 속성이 변경됩니다.
      </Title>
      <ButtonWrapper>
        {flexDirections.map((flexDirection, i) => (
          <Button onClick={() => setFlexDirection(flexDirection)} key={i}>
            {flexDirection}
          </Button>
        ))}
      </ButtonWrapper>
    </Wrapper>
  );
};

export default FlexButtons;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;
const Button = styled.button`
  width: 150px;
`;

const Title = styled.h2`
  text-align: center;
`;
