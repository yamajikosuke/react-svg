import React, { useState } from "react";
import {
  INITIAL_VALUE,
  ReactSVGPanZoom,
  fitSelection,
} from "react-svg-pan-zoom";
import { ResourceContext2 } from "./common/ResourceContext2";
import { CircleButton2 } from "./common/CircleButton2";

type elementColorProp = {
  [key: string]: { color: string; isComplete: boolean };
};

export const PanZoomWithCircleButton2 = () => {
  const [tool, setTool] = useState("pan");
  const [value, setValue] = useState(INITIAL_VALUE);
  const resource = { color: "" };
  const [config, setConfig] = useState(resource);
  const [clientWidth, setClientWidth] = useState<number>(0);
  const [clientHeight, setClientHeight] = useState<number>(0);

  let elementColorInit: elementColorProp[] = [
    { p1: { color: "pink", isComplete: false } },
    { p2: { color: "gray", isComplete: false } },
    { p3: { color: "red", isComplete: false } },
  ];
  const [elementColor, setElementColor] = useState(elementColorInit);
  let updateTimer: number;

  React.useEffect(() => {
    updateTimer = window.setInterval(() => setTool("pan"), 500);
    return (): void => clearInterval(updateTimer);
  }, []);

  React.useEffect(() => {
    //    fitSelection(100, 20, 500, 500);
    addEventListener();
    setClientWidth(document.documentElement.clientWidth);
    setClientHeight(document.documentElement.clientHeight - 100);
  }, [clientHeight, clientWidth]);

  React.useEffect(() => {
    const parts = document.getElementsByClassName("parts");
    const elements = Array.from(parts); // collection を arrayに変換
    elements.forEach((element: Element) => {
      let id = element.getAttribute("id");
      document.querySelector(`#${id}`)?.addEventListener("click", () => {
        const tmpArray = elementColor.map((elm) => {
          if (id && id === Object.keys(elm)[0]) {
            if (
              element.getAttribute("fill") === "black" &&
              config.color === elm[id]["color"]
            ) {
              element.setAttribute("fill", config.color);
              elm[id]["isComplete"] = true;
            }
          }
          return elm;
        });
        setElementColor(tmpArray);
      });

      elementColor.forEach((elm) => {
        if (id && id === Object.keys(elm)[0]) {
          if (!elm[id]["isComplete"]) {
            element.setAttribute("fill", "white");
          }
          if (config.color === elm[id]["color"]) {
            if (!elm[id]["isComplete"]) {
              element.setAttribute("fill", "black");
            }
          }
        }
      });
    });
  }, [config]);

  const addEventListener = () => {
    console.log("addEventListner");
    document.addEventListener("click", outputType, false);
    document.addEventListener("touch", outputType, false);
    document.addEventListener("touchstart", outputType, false);
    document.addEventListener("touchmove", outputType, false);
  };

  const outputType = (event: any): void => {
    let eventType = event.type;
    console.log(eventType);
    if (eventType === "touchstart" || eventType === "click") {
      setTool("none");
    } else {
      setTool("pan");
    }
  };

  const changeTool = (nextTool: string) => {
    console.log(nextTool);
    setTool(nextTool);
  };

  const changeValue = (nextValue: string) => {
    setValue(nextValue);
  };

  return (
    <ResourceContext2.Provider value={[config, setConfig]}>
      <ReactSVGPanZoom
        width={clientWidth}
        height={clientHeight}
        tool={tool}
        onChangeTool={(tool: string) => changeTool(tool)}
        value={value}
        onChangeValue={(value: string) => changeValue(value)}
        onZoom={() => console.log("zoom")}
        onPan={() => console.log("pan")}
        onClick={(event: {
          x: number;
          y: number;
          originalEvent: React.MouseEvent;
        }) => {
          console.log("click", event.x, event.y, event.originalEvent);
          setTool("pan");
        }}
        background="#ccc"
        scaleFactorMin={0.5}
        scaleFactorMax={5}
        miniatureProps={{ position: "none" }}
        // toolbarProps={{ position: "none" }}
      >
        <svg width="300" height="300">
          <g>
            <rect
              className="parts"
              id="p1"
              x="50"
              y="50"
              width="100"
              height="70"
              fill="white"
              stroke="#000"
              onClick={() => {}}
            ></rect>
            <rect
              id="p2"
              className="parts"
              x="100"
              y="70"
              width="100"
              height="150"
              fill="white"
              stroke="#000"
            ></rect>
            <rect
              id="p3"
              className="parts"
              x="70"
              y="130"
              width="100"
              height="150"
              fill="white"
              stroke="#000"
            ></rect>
          </g>
        </svg>
      </ReactSVGPanZoom>
      <div>
        <CircleButton2 color="pink" />
        <CircleButton2 color="red" />
        <CircleButton2 color="blue" />
        <CircleButton2 color="gray" />
      </div>
      <div>color:{config.color}</div>
    </ResourceContext2.Provider>
  );
};
