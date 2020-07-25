import React from "react";

export const Circle: React.FC = (): JSX.Element => {
  return (
    <main>
      <svg width="200" height="200" className="svgcode">
        <circle cx="100" cy="100" r="50" fill="red"></circle>
      </svg>
      <svg width="200" height="200" className="svgcode">
        <circle
          cx="100"
          cy="100"
          r="60"
          stroke="black"
          stroke-width="5"
          fill="blue"
        ></circle>
      </svg>
    </main>
  );
};
