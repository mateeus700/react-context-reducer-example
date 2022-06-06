import { useCallback, useContext } from "react";
import { ContextStarWar } from "../../contexts/star-wars/star-wars.context";
import { starWarsAPI } from "../../services/star-wars/star-wars.api";

const useStarWarsHook = () => {
  const { starWarRequest, starWarSuccess, starWarErro } =
    useContext(ContextStarWar);

  return useCallback(async () => {
    starWarRequest();

    try {
      const starWarsResponse = await starWarsAPI();
      starWarSuccess(starWarsResponse);
    } catch (error) {
      starWarErro("Ocorreu um erro na API, tente novamente");
    }
  }, [starWarErro, starWarRequest, starWarSuccess]);
};

export { useStarWarsHook };
