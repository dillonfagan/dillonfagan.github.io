import { createContext, useContext } from "react";

const Context = createContext<BioViewModel>(undefined);

export type BioViewModel = {
  hero: string;
};

export const useBio = () => {
  return useContext(Context);
};