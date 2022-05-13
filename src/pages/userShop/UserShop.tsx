import React, { useContext, useEffect } from "react";
import { Context } from "../../context/UserContext";
import { starWarsAPI } from "./services/star-wars/star-wars.api";
import { Container } from "./styled-user";
const UserShop: React.FC = (): JSX.Element => {
  const [state, setState] = useContext(Context);

  useEffect(() => {
    starWarsAPI().then(() => {
      console.log("chamei");
    });
  });
  return (
    <Container>
      <h1>{state.produtos[0].nome}</h1>
      <h1>{state.produtos[0].preco}</h1>
      <h1>{state.nome}</h1>
    </Container>
  );
};

export { UserShop };
