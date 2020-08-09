import React from "react";
import { ResourceContext2 } from "./ResourceContext2";

type buttonProps = {
  color: string;
};
export const CircleButton2: React.FC<buttonProps> = (props): JSX.Element => {
  const [, setConfig] = React.useContext(ResourceContext2);

  return (
    <svg width="40" height="40">
      <circle
        cx="20"
        cy="20"
        r="20"
        fill={props.color}
        onClick={() => setConfig({ color: props.color })}
      ></circle>
    </svg>
  );
};
