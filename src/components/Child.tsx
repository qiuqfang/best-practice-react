import { memo } from "react";
import styled from "styled-components";

const Child: React.FC<{
  index: string | number;
  person?: Object;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}> = (props) => {
  console.log(`子组件${props.index}`);

  return <Wrapper>子组件{props.index}</Wrapper>;
};

export default memo(Child);

export const Wrapper = styled.div`
  background-color: yellow;
  margin: 5px 0;
`;
