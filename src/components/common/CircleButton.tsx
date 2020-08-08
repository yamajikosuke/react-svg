import React from "react";

type buttonProps = {
  color: string;
};
export const CircleButton: React.FC<buttonProps> = (props): JSX.Element => {
  return (
    <svg width="40" height="40">
      <circle cx="20" cy="20" r="20" fill={props.color}></circle>
    </svg>
  );
};
