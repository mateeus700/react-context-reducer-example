import React, { createContext, ReactNode, useState } from "react";
import { IStarWar } from "../../../../domains/star-war.domain";

interface InitialState {
  isLoading: boolean;
  starWar: IStarWar | null;
  erro: string | null;
}

const initialState: InitialState = {
  isLoading: false,
  starWar: null,
  erro: null,
};

export const Context = createContext<any>(initialState);

interface ContextProps {
  children: ReactNode;
}

// function starWarReducer(state, action) {
//   switch (action.type) {
//     case "starWarRequest": {
//       return {
//         isLoading: true,
//         starWar: null,
//         erro: null,
//       };
//     }
//     case "starWarSuccess": {
//       return {
//         isLoading: false,
//         starWar: action.payload,
//         erro: null,
//       };
//     }
//     case "starWarError": {
//       return {
//         isLoading: false,
//         starWar: null,
//         erro: action.payload,
//       };
//     }
//     default: {
//       throw new Error(`Unhandled action type: ${action.type}`);
//     }
//   }
// }

const ContextProvider = ({ children }: ContextProps) => {
  const [state, setState] = useState(initialState);
  const updateState = (key: string, value: any) => {
    setState({
      ...state,
      [key]: value,
    });
  };
  return (
    <Context.Provider value={[state, updateState]}>{children}</Context.Provider>
  );
};

export { ContextProvider };
