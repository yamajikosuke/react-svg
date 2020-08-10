import React, { useState } from "react";
import { ReactSvgPanZoomLoader } from "react-svg-pan-zoom-loader";
import { INITIAL_VALUE, ReactSVGPanZoom } from "react-svg-pan-zoom";

export const PanZoom = () => {
  const [tool, setTool] = useState("pan");
  const [value, setValue] = useState(INITIAL_VALUE);

  const changeTool = (nextTool: string) => {
    console.log(nextTool);
    setTool(nextTool);
  };

  const changeValue = (nextValue: any) => {
    setValue(nextValue);
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <ReactSVGPanZoom
        width={500}
        height={500}
        tool={tool}
        onChangeTool={(tool: any) => changeTool(tool)}
        value={value}
        onChangeValue={(value: any) => changeValue(value)}
        onZoom={() => console.log("zoom")}
        onPan={() => console.log("pan")}
        onClick={(event: { x: any; y: any; originalEvent: any }) =>
          console.log("click", event.x, event.y, event.originalEvent)
        }
        background="#ccc"
        scaleFactorMin={0.5}
        scaleFactorMax={5}
        miniatureProps={{ position: "none" }}
        toolbarProps={{ position: "none" }}
      >
        <svg width={617} height={400}>
          <g fillOpacity=".5" strokeWidth="4">
            <rect
              x="400"
              y="40"
              width="100"
              height="200"
              fill="#4286f4"
              stroke="#f4f142"
            />
            <circle cx="108" cy="108.5" r="100" fill="#0ff" stroke="#0ff" />
            <circle cx="180" cy="209.5" r="100" fill="#ff0" stroke="#ff0" />
            <circle cx="220" cy="109.5" r="100" fill="#f0f" stroke="#f0f" />
          </g>
        </svg>
      </ReactSVGPanZoom>
    </div>
  );
};
