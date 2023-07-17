import styled from 'styled-components';
import { FLEX_DIRECTION_ENUM, JUSTIFY_CONTENT_ENUM } from '../types';

const FlexScreen = ({
  texts,
  flexDirection,
  justifyContent,
  gap,
}: {
  texts: string[];
  flexDirection: (typeof FLEX_DIRECTION_ENUM)[keyof typeof FLEX_DIRECTION_ENUM];
  justifyContent: (typeof JUSTIFY_CONTENT_ENUM)[keyof typeof JUSTIFY_CONTENT_ENUM];
  gap: number;
}) => {
  return (
    <Wrapper
      flexdirection={flexDirection}
      justifyContent={justifyContent}
      gap={gap}
    >
      {texts.map((text, i) => (
        <Flex text={text} key={i} />
      ))}
    </Wrapper>
  );
};

export default FlexScreen;

const Flex = ({ text }: { text: string }) => {
  return <li>{text}</li>;
};

const Wrapper = styled.ul<{
  flexdirection: (typeof FLEX_DIRECTION_ENUM)[keyof typeof FLEX_DIRECTION_ENUM];
  justifyContent: (typeof JUSTIFY_CONTENT_ENUM)[keyof typeof JUSTIFY_CONTENT_ENUM];
  gap: number;
}>`
  border: 1px skyblue solid;
  padding: 32px 60px;
  display: flex;
  flex-direction: ${({ flexdirection }) => flexdirection};
  justify-content: ${({ justifyContent }) =>
    justifyContent === JUSTIFY_CONTENT_ENUM.NONE ? '' : justifyContent};

  gap: ${({ gap }) => `${gap}px`};

  width: 1200px;
  height: 500px;
  margin-left: 100px;
  li {
    list-style-type: none;
    list-style: none;
    padding: 10px 20px;
    background-color: skyblue;
    border-radius: 10px;
    width: 140px;
    height: 25px;
    display: flex;
    align-items: center;
  }
`;
