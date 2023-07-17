import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { FLEX_DIRECTION_ENUM, JUSTIFY_CONTENT_ENUM } from '../types';

const FlexButtons = ({
  subtitle,
  buttonNames,
  setStyle,
}: {
  subtitle: string;
  buttonNames:
    | (typeof FLEX_DIRECTION_ENUM)[keyof typeof FLEX_DIRECTION_ENUM][]
    | (typeof JUSTIFY_CONTENT_ENUM)[keyof typeof JUSTIFY_CONTENT_ENUM][];
  setStyle:
    | Dispatch<
        SetStateAction<
          (typeof FLEX_DIRECTION_ENUM)[keyof typeof FLEX_DIRECTION_ENUM]
        >
      >
    | Dispatch<
        SetStateAction<
          (typeof JUSTIFY_CONTENT_ENUM)[keyof typeof JUSTIFY_CONTENT_ENUM]
        >
      >;
}) => {
  return (
    <Wrapper>
      <Title>{subtitle}</Title>

      <ButtonWrapper>
        {buttonNames.map((buttonName, i) => (
          <Button onClick={() => setStyle(buttonName as any)} key={i}>
            {buttonName}
          </Button>
        ))}
      </ButtonWrapper>
    </Wrapper>
  );
};

export default FlexButtons;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 100px;
  width: 600px;

  gap: 15px;
`;

const Title = styled.h2`
  text-align: center;

  width: 200px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  gap: 15px;
`;
const Button = styled.button`
  width: 150px;
`;
