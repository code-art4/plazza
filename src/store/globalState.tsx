import { createContext, useReducer, useEffect, useState, FC } from "react";
import reducers from "./reducer";
interface Stateful {
  notify?: {};
  auth?: {};
  cart?: [];
  modal?: {};
  orders?: [];
  users?: [];
  categories?: [];
}

const initalState = {
  notify: {},
  auth: {},
  cart: [],
  modal: {},
  orders: [],
  users: [],
  categories: [],
};

interface Props {
  children: React.ReactNode;
}
export const DataContext = createContext({});
export const DataProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducers, initalState);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
