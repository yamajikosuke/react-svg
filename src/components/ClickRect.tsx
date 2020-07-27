import React from "react";

interface elementColor {
  [key: string]: string;
}

export const ClickRect: React.FC = (): JSX.Element => {
  // set color
  const color: elementColor = { p1: "orange", p2: "gray" };
  React.useEffect(() => {
    const parts = document.getElementsByClassName("parts");
    const elements = Array.from(parts); // collection を arrayに変換
    elements.map((element: Element) => {
      let id = element.getAttribute("id");
      document.querySelector(`#${id}`)?.addEventListener("click", () => {
        if (id) {
          element.setAttribute("fill", color[id]);
        }
      });
    });
  });

  return (
    <main>
      <svg width="200" height="200" className="svgcode">
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
            height="170"
            fill="black"
          ></rect>
        </g>
      </svg>
    </main>
  );
};
