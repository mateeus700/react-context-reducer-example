import { IStarWar } from "../../../../domains/star-war.domain";
import { Actions } from "./star-wars.actions";

export interface IStarWarContext {
  isLoading: boolean;
  starWar: IStarWar | null;
  erro: string | null;
  starWarRequest: () => void;
  starWarSuccess: (starWar: IStarWar) => void;
  starWarErro: (erro: string) => void;
}

export interface IStarWarAction {
  type: Actions;
  payload: any;
}
