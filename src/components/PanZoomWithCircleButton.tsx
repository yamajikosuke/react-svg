import React, { useState } from "react";
import { INITIAL_VALUE, ReactSVGPanZoom } from "react-svg-pan-zoom";
import { ResourceContext2 } from "./common/ResourceContext2";
import { CircleButton2 } from "./common/CircleButton2";

export const PanZoomWithCircleButton = () => {
  const [tool, setTool] = useState("none");
  const [value, setValue] = useState(INITIAL_VALUE);
  const resource = { color: "" };
  const [config, setConfig] = useState(resource);
  const [clientWidth, setClientWidth] = useState<number>(0);
  const [clientHeight, setClientHeight] = useState<number>(0);

  React.useEffect(() => {
    addEventListener();
    setClientWidth(document.documentElement.clientWidth);
    setClientHeight(document.documentElement.clientHeight - 100);
    console.log(clientWidth);
    console.log(clientHeight);
    const parts = document.getElementsByClassName("parts");
    const elements = Array.from(parts); // collection を arrayに変換
    elements.forEach((element: Element) => {
      let id = element.getAttribute("id");
      document.querySelector(`#${id}`)?.addEventListener("click", () => {
        element.setAttribute("fill", config.color);
      });
    });
  }, [config, clientHeight, clientWidth]);

  const addEventListener = () => {
    console.log("addEventListner");
    document.addEventListener("click", outputType, true);
    document.addEventListener("touch", outputType, false);
    document.addEventListener("touchstart", outputType, false);
    document.addEventListener("touchmove", outputType, false);
  };

  const outputType = (evnt: any) => {
    let evntType = evnt.type;
    if (evntType === "touchstart" || evntType === "click") {
      setTool("none");
    } else {
      setTool("pan");
    }
  };

  const changeTool = (nextTool: string) => {
    console.log(nextTool);
    setTool(nextTool);
  };

  const changeValue = (nextValue: any) => {
    setValue(nextValue);
  };

  return (
    <ResourceContext2.Provider value={[config, setConfig]}>
      <ReactSVGPanZoom
        width={clientWidth}
        height={clientHeight}
        tool={tool}
        onChangeTool={(tool: any) => changeTool(tool)}
        value={value}
        onChangeValue={(value: any) => changeValue(value)}
        onZoom={() => console.log("zoom")}
        onPan={() => console.log("pan")}
        onClick={(event: { x: any; y: any; originalEvent: any }) => {
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
