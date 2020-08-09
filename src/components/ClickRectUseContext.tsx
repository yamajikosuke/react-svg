import React from "react";
import { CircleButton2 } from "./common/CircleButton2";
import { ResourceContext2 } from "./common/ResourceContext2";
import { PictureSvg } from "./svg/PictureSvg";

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
      <PictureSvg />
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
