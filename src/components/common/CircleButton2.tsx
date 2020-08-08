import React from "react";
import { resouceProps, ResourceContext } from "./ResourceContext";

export const CircleButton2: React.FC = (): JSX.Element => {
  const resource = React.useContext<resouceProps>(ResourceContext);
  return (
    <svg width="40" height="40">
      <circle
        cx="20"
        cy="20"
        r="20"
        fill={resource.CircleButton2.color}
      ></circle>
    </svg>
  );
};
