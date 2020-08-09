import React from "react";
import { CircleButton2 } from "./common/CircleButton2";
import { ResourceContext2 } from "./common/ResourceContext2";

export const ClickRectUseContext: React.FC = (): JSX.Element => {
  const [config] = React.useContext<any>(ResourceContext2);

  React.useEffect(() => {
    const parts = document.getElementsByClassName("parts");
    const elements = Array.from(parts); // collection を arrayに変換
    elements.forEach((element: Element) => {
      let id = element.getAttribute("id");
      document.querySelector(`#${id}`)?.addEventListener("click", () => {
        console.log("click");
        element.setAttribute("fill", config.color);
      });
    });
  });

  return (
    <main>
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
      <div>
        <CircleButton2 color="pink" />
        <CircleButton2 color="red" />
        <CircleButton2 color="blue" />
        <CircleButton2 color="gray" />
      </div>
      <div>color:{config.color}</div>
    </main>
  );
};
