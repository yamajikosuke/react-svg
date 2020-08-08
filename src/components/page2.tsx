import React from "react";
import { ClickRect } from "./ClickRect";
import { ClickRectUseContext } from "./ClickRectUseContext";

export const P2: React.FC = (): JSX.Element => {
  return (
    <>
      <div>onClick</div>
      <ClickRect />
      <div>onClick(useContext)</div>
      <ClickRectUseContext />
    </>
  );
};

export default P2;
