import React from "react";

import { Rect } from "./Rect";
import { Circle } from "./Circle";
import { CircleButton } from "./common/CircleButton";

export const P1: React.FC = (): JSX.Element => {
  return (
    <>
      <div>rect</div>
      <Rect />
      <div>circle</div>
      <Circle />
      <div>circle Button(propsで色指定）</div>
      <CircleButton color="green" />
    </>
  );
};

export default P1;
