import React from "react";
import { ResourceContext2 } from "./ResourceContext2";

type buttonProps = {
  color: string;
};
export const CircleButton2: React.FC<buttonProps> = (props): JSX.Element => {
  const [, setConfig] = React.useContext(ResourceContext2);
  const param = 22;
  return (
    <svg width={param * 2} height={param * 2}>
      <circle
        cx={param}
        cy={param}
        r={param}
        fill={props.color}
        onClick={() => setConfig({ color: props.color })}
      ></circle>
    </svg>
  );
};
