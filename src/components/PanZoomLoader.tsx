import React, { useState } from "react";
import {
  INITIAL_VALUE,
  ReactSVGPanZoom,
  UncontrolledReactSVGPanZoom,
} from "react-svg-pan-zoom";
import {
  ReactSvgPanZoomLoader,
  SvgLoaderSelectElement,
} from "react-svg-pan-zoom-loader";

export const PanZoomLoader = () => {
  return (
    <div className="App">
      <h1>React SVG Pan Zoom Remote file loader</h1>
      <h3>A React component that adds pan and zoom features to SVG</h3>

      <ReactSvgPanZoomLoader
        src="test-digram.svg"
        proxy={
          <>
            <SvgLoaderSelectElement
              selector="#maturetree"
              onClick={() => alert("Tree")}
            />
          </>
        }
        render={(content: React.ReactNode) => (
          <UncontrolledReactSVGPanZoom width={500} height={500}>
            <svg width={500} height={500}>
              {content}
            </svg>
          </UncontrolledReactSVGPanZoom>
        )}
      />
    </div>
  );
};
// export const PanZoomLoader = () => {
//   const [tool, setTool] = useState("pan");
//   const [value, setValue] = useState(INITIAL_VALUE);

//   const changeTool = (nextTool: string) => {
//     console.log(nextTool);
//     setTool(nextTool);
//   };

//   const changeValue = (nextValue: any) => {
//     setValue(nextValue);
//   };

//   return (
//     <ReactSvgPanZoomLoader
//       src="picture.svg"
//       render={(content: string) => (
//         <ReactSVGPanZoom
//           width={500}
//           height={500}
//           tool={tool}
//           onChangeTool={(tool: any) => changeTool(tool)}
//           value={value}
//           onChangeValue={(value: any) => changeValue(value)}
//           onZoom={() => console.log("zoom")}
//           onPan={() => console.log("pan")}
//           onClick={(event: { x: any; y: any; originalEvent: any }) =>
//             console.log("click", event.x, event.y, event.originalEvent)
//           }
//           background="#ccc"
//           scaleFactorMin={0.5}
//           scaleFactorMax={5}
//           miniatureProps={{ position: "none" }}
//           toolbarProps={{ position: "none" }}
//         >
//           <svg width={500} height={500}>
//             {content}
//           </svg>
//         </ReactSVGPanZoom>
//       )}
//     />
//   );
// };
