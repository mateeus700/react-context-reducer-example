import React, { useContext, useState } from "react";
import { Context } from "../../context/UserContext";
import { Container, Input, SubmitButton } from "./styled-user";

const User: React.FC = (): JSX.Element => {
  const [state, updateState] = useContext(Context);
  const [nome, setNome] = useState("");
  const submit = () => {
    updateState("nome", nome);
  };
  return (
    <Container>
      <h1>{state.nome}</h1>
      <Input value={nome} onChange={(e) => setNome(e.target.value)} />
      <SubmitButton onClick={submit}>Alterar nome</SubmitButton>
    </Container>
  );
};

export { User };
