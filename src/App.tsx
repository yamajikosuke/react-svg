import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Top } from "./components/top";
import { P1 } from "./components/page1";
import { P2 } from "./components/page2";
import { P3 } from "./components/page3";

export const App: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/react-svg" render={(): JSX.Element => <Top />} />
        <Route exact path="/" render={(): JSX.Element => <Top />} />
        <Route exact path="/p1" render={(): JSX.Element => <P1 />} />
        <Route exact path="/p2" render={(): JSX.Element => <P2 />} />
        <Route exact path="/p3" render={(): JSX.Element => <P3 />} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
