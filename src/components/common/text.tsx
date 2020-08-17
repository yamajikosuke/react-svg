import React from "react";

type textProps = {
  x: number;
  y: number;
  fill: string;
  text: string;
  fontSize: number;
};
export const T1: React.FC<textProps> = (props): JSX.Element => {
  return (
    <svg width="300" height="300">
      <text
        x={props.x}
        y={props.y}
        fill={props.fill}
        font-size={props.fontSize}
      >
        {props.text}
      </text>
    </svg>
  );
};
