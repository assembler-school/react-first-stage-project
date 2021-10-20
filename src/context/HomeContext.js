import { createContext } from "react";

const initialValues = {
  games: [],
  gameDetails: {},
};

export const HomeContext = createContext(initialValues);
