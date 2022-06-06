import { Actions } from "./star-wars.actions";
import { IStarWarAction, IStarWarContext } from "./star-wars.types";

export const reducerStarWars = (
  state: IStarWarContext,
  action: IStarWarAction
) => {
  switch (action.type) {
    case Actions.STAR_WAR_REQUEST: {
      return {
        ...state,
        isLoading: true,
        starWar: null,
        erro: null,
      };
    }
    case Actions.STAR_WAR_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        starWar: action.payload,
        erro: null,
      };
    }
    case Actions.STAR_WAR_ERROR: {
      return {
        ...state,
        isLoading: false,
        starWar: null,
        erro: action.payload,
      };
    }
    default:
      return state;
  }
};
