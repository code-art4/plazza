import { createContext, useReducer, Dispatch, FC, SetStateAction } from "react";
import reducers from "./reducer";
type Stateful = {
  notify?: {};
  auth?: {};
  cart?: [];
  modal?: {};
  orders?: [];
  users?: [];
  categories?: [];
};

interface APPStructure {
  state: Stateful;
  dispatch: (state: Stateful) => void;
}
const initalState = {
  state: {
    notify: {},
    auth: {},
    cart: [],
    modal: {},
    orders: [],
    users: [],
    categories: [],
  },
  dispatch: (state: Stateful) => {},
} as APPStructure;

interface Props {
  children: React.ReactNode;
}
export const DataContext = createContext<any>(initalState);
export const DataProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer<any>(reducers, initalState);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
