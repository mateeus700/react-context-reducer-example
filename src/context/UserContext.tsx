import React, { createContext, ReactNode, useState } from "react";

const initialState = {
  nome: "Victor",
  produtos: [
    {
      nome: "Produto de teste",
      preco: 19,
    },
  ],
};

export const Context = createContext<any>(initialState);

interface ContextProps {
  children: ReactNode;
}

const ContextProvider: React.FC<ContextProps> = ({ children }) => {
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
