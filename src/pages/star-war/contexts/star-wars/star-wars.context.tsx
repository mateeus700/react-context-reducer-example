import React, { ReactNode, useCallback, useMemo, useReducer } from "react";
import { IStarWar } from "../../../../domains/star-war.domain";
import { Actions, initialState } from "./star-wars.actions";
import { IStarWarContext } from "./star-wars.types";
import { reducerStarWars } from "./start-wars.reducer";

interface ContextProps {
  children: ReactNode;
}

export const ContextStarWar =
  React.createContext<IStarWarContext>(initialState);

const ContextStarWarProvider = ({ children }: ContextProps) => {
  const [state, dispatch] = useReducer(reducerStarWars, initialState);

  const starWarRequest = useCallback(() => {
    dispatch({ type: Actions.STAR_WAR_REQUEST, payload: null });
  }, []);

  const starWarSuccess = useCallback((starWar: IStarWar) => {
    dispatch({ type: Actions.STAR_WAR_SUCCESS, payload: starWar });
  }, []);

  const starWarErro = useCallback((erro: string) => {
    dispatch({ type: Actions.STAR_WAR_ERROR, payload: erro });
  }, []);

  const value = useMemo(() => {
    return {
      starWar: state.starWar,
      isLoading: state.isLoading,
      erro: state.erro,
      starWarRequest,
      starWarSuccess,
      starWarErro,
    };
  }, [
    starWarErro,
    starWarRequest,
    starWarSuccess,
    state.erro,
    state.isLoading,
    state.starWar,
  ]);

  return (
    <ContextStarWar.Provider value={value}>{children}</ContextStarWar.Provider>
  );
};

export default React.memo(ContextStarWarProvider);
