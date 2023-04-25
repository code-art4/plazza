import { createContext, useReducer, useEffect, FC, useState } from "react";
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
  dispatch: (state: Stateful) => any;
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
  // useEffect(() => {
  //   const loggedInUser = localStorage.getItem("user");
  //   if (loggedInUser) {
  //     const foundUser = JSON.parse(loggedInUser);
  //     dispatch({
  //       type: "ADD_USERS",
  //       payload: [
  //         {
  //           ...state,
  //           foundUser,
  //         },
  //       ],
  //     });
  //   }
  // }, []);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
