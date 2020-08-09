import React from "react";

export type resouceProps = { color: string };
export const ResourceContext2 = React.createContext<any>({
  color: "#000",
});
