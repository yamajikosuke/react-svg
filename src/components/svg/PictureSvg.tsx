import React from "react";

export const PictureSvg: React.FC = (): JSX.Element => {
  return (
    <svg width="300" height="300">
      <g>
        <rect
          className="parts"
          id="p1"
          x="50"
          y="50"
          width="100"
          height="70"
          fill="red"
        ></rect>
        <rect
          id="p2"
          className="parts"
          x="100"
          y="70"
          width="100"
          height="150"
          fill="black"
        ></rect>
        <rect
          id="p3"
          className="parts"
          x="70"
          y="130"
          width="100"
          height="150"
          fill="blue"
        ></rect>
      </g>
    </svg>
  );
};
