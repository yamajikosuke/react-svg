import React from "react";
import { Rect } from "./Rect";
import { Circle } from "./Circle";

export const P1: React.FC = (): JSX.Element => {
  return (
    <>
      <div>rect</div>
      <Rect />
      <div>circle</div>
      <Circle />
    </>
  );
};

export default P1;
