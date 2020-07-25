import React from "react";

export const Click: React.FC = (): JSX.Element => {
  React.useEffect(() => {
    const parts = document.getElementsByClassName("parts");
    const elements = Array.from(parts); // collection を arrayに変換
    console.log(elements);
    elements.map((element: any) => {
      let id = element.getAttribute("id");
      document.querySelector(`#${id}`)?.addEventListener("click", () => {
        console.log(id);
      });
    });
  });

  return (
    <main>
      <svg width="200" height="200" className="svgcode">
        <g>
          <rect
            className="parts"
            id="red"
            x="50"
            y="50"
            width="100"
            height="70"
            fill="red"
          ></rect>
          <rect
            id="black"
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
