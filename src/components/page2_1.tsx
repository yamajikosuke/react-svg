import React, { useState } from "react";
import { ClickRectUseContext } from "./ClickRectUseContext";
import { ResourceContext2 } from "./common/ResourceContext2";

export const P2_1: React.FC = (): JSX.Element => {
  const resource = { color: "" };
  const [config, setConfig] = useState(resource);

  return (
    <ResourceContext2.Provider value={[config, setConfig]}>
      <div>onClick(useContext)</div>
      <ClickRectUseContext />
    </ResourceContext2.Provider>
  );
};
