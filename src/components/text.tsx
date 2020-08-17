import React from "react";
import { T1 } from "./common/text";

export const Text: React.FC = (): JSX.Element => {
  return (
    <>
      <div>text</div>
      <T1 x={20} y={20} fill="green" text="viva svg" fontSize={20} />
    </>
  );
};
