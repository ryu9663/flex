import styled from 'styled-components';

import { FLEX_DIRECTION_ENUM } from '../FlexList';

const FlexScreen = ({
  flexDirections,

  flexDirection,
  gap,
}: {
  flexDirections: (typeof FLEX_DIRECTION_ENUM)[keyof typeof FLEX_DIRECTION_ENUM][];
  flexDirection: (typeof FLEX_DIRECTION_ENUM)[keyof typeof FLEX_DIRECTION_ENUM];
  gap: number;
}) => {
  return (
    <Wrapper flexDirection={flexDirection} gap={gap}>
      {flexDirections.map((flexDirection) => (
        <Flex flexDirection={flexDirection} />
      ))}
    </Wrapper>
  );
};

export default FlexScreen;

const Flex = ({ flexDirection }: { flexDirection: string }) => {
  return <li>{flexDirection}</li>;
};

const Wrapper = styled.ul<{
  flexDirection: (typeof FLEX_DIRECTION_ENUM)[keyof typeof FLEX_DIRECTION_ENUM];
  gap: number;
}>`
  border: 1px skyblue solid;
  padding: 32px 60px;
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  gap: ${({ gap }) => `${gap}px`};
  li {
    list-style-type: none;
    list-style: none;
    padding: 10px 20px;
    background-color: skyblue;
    border-radius: 10px;
  }
`;
