import { IStarWarContext } from "./star-wars.types";

export const initialState: IStarWarContext = {
  isLoading: false,
  starWar: null,
  erro: null,
  starWarRequest: () => {},
  starWarSuccess: () => {},
  starWarErro: () => {},
};

export enum Actions {
  STAR_WAR_REQUEST = "STAR_WAR_REQUEST",
  STAR_WAR_SUCCESS = "STAR_WAR_SUCCESS",
  STAR_WAR_ERROR = "STAR_WAR_ERROR",
}
