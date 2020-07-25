import React from "react";

export const Rect: React.FC = (): JSX.Element => {
  return (
    <main>
      <svg width="200" height="200" className="svgcode">
          <rect x="50" y="50" width="100" height="70" fill="red"></rect>
      </svg>
      <svg width="200" height="200" className="svgcode">
        <rect
          x="30"
          y="50"
          width="100"
          height="70"
          rx="10"
          ry="10"
          fill="blue"
          stroke="black"
          stroke-width="5"
        ></rect>
      </svg>
    </main>
  );
};
