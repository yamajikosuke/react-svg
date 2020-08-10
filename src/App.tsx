import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Top } from "./components/top";
import { P1 } from "./components/page1";
import { P2 } from "./components/page2";
import { P2_1 } from "./components/page2_1";
import { PanZoom } from "./components/PanZoom";
import { PanZoomLoader } from "./components/PanZoomLoader";
import { PanZoomWithCircleButton } from "./components/PanZoomWithCircleButton";
import { PanZoomWithCircleButton2 } from "./components/PanZoomWithCircleButton2";
import { P3 } from "./components/page3";
import "./app.css";

export const App: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/react-svg" render={(): JSX.Element => <Top />} />
        <Route exact path="/" render={(): JSX.Element => <Top />} />
        <Route exact path="/p1" render={(): JSX.Element => <P1 />} />
        <Route exact path="/p2" render={(): JSX.Element => <P2 />} />
        <Route exact path="/p2-1" render={(): JSX.Element => <P2_1 />} />
        <Route exact path="/pan-zoom" render={(): JSX.Element => <PanZoom />} />
        <Route
          exact
          path="/pan-zoom-loader"
          render={(): JSX.Element => <PanZoomLoader />}
        />
        <Route
          exact
          path="/pan-zoom-width-circle-button"
          render={(): JSX.Element => <PanZoomWithCircleButton />}
        />
        <Route
          exact
          path="/pan-zoom-width-circle-button2"
          render={(): JSX.Element => <PanZoomWithCircleButton2 />}
        />

        <Route exact path="/p3" render={(): JSX.Element => <P3 />} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
