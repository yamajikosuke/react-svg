import React, { useState } from "react";

interface elementColorProp {
  [key: string]: { color: string; isComplete: boolean };
}

export const ClickRect: React.FC = (): JSX.Element => {
  // const [pickColor, setPickColor] = useState<string>("red");
  const [isComplete, setIsComplete] = useState<boolean>(false);

  let elementColor: elementColorProp[] = [
    { p1: { color: "orange", isComplete: false } },
    { p2: { color: "gray", isComplete: false } },
    { p3: { color: "red", isComplete: false } },
  ];

  React.useEffect(() => {
    const parts = document.getElementsByClassName("parts");
    const elements = Array.from(parts); // collection を arrayに変換
    elements.forEach((element: Element) => {
      let id = element.getAttribute("id");
      document.querySelector(`#${id}`)?.addEventListener("click", () => {
        elementColor.forEach((elm) => {
          if (id && id === Object.keys(elm)[0]) {
            //  if (pickColor === elm[id]["color"]) {
            element.setAttribute("fill", elm[id]["color"]);
            elm[id]["isComplete"] = true;
            //    }
          }
        });
        console.log(checkIsComplete());
        if (checkIsComplete() === elementColor.length) setIsComplete(true);
      });
    });
    console.log(isComplete);
  });

  const checkIsComplete = () => {
    return elementColor.filter((element) => {
      return element[Object.keys(element)[0]].isComplete === true;
    }).length;
  };

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
    </main>
  );
};
