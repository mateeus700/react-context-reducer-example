import React, { useContext, useEffect } from "react";
import { ContextStarWar } from "../../contexts/star-wars/star-wars.context";
import { useStarWarsHook } from "../../hooks/use-star-wars/use-star-wars.hook";
import { BodyPageView } from "./body-page-view";

const BodyPage: React.FC = (): JSX.Element => {
  const { starWar } = useContext(ContextStarWar);

  const starWarHook = useStarWarsHook();

  useEffect(() => {
    starWarHook();
  }, [starWarHook]);

  return <BodyPageView starWar={starWar} />;
};

export { BodyPage };
