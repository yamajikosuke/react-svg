import React from "react";

export type resouceProps = { CircleButton2: { color: string } };
export const ResourceContext = React.createContext<resouceProps>({
  CircleButton2: { color: "#000" },
});
