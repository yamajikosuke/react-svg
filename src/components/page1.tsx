import React from "react";

import { Rect } from "./Rect";
import { Circle } from "./Circle";
import { CircleButton } from "./common/CircleButton";
import { CircleButton2 } from "./common/CircleButton2";
import { ResourceContext } from "./common/ResourceContext";

export const P1: React.FC = (): JSX.Element => {
  const resource = { CircleButton2: { color: "pink" } };
  return (
    <ResourceContext.Provider value={resource}>
      <div>rect</div>
      <Rect />
      <div>circle</div>
      <Circle />
      <div>circle Button(propsで色指定）</div>
      <CircleButton color="green" />
      <div>circle Button(useContentで色指定）</div>
      <CircleButton2 />
    </ResourceContext.Provider>
  );
};

export default P1;
