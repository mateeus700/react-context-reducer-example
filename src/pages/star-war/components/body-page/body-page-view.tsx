import React, { Fragment, useMemo } from "react";
import { IStarWar } from "../../../../domains/star-war.domain";
import { Container } from "../../styled-user";

interface IProps {
  starWar: IStarWar | null;
}
const BodyPageView: React.FC<IProps> = ({ starWar }: IProps): JSX.Element => {
  const renderNotFound = useMemo(() => {
    if (starWar === null) {
      return <p>Ocorreu um erro</p>;
    }

    return (
      <Fragment>
        <p>gender = {starWar?.gender}</p>
        <p>hairColor = {starWar?.hairColor}</p>
        <p>height = {starWar?.height}</p>
        <p>homeworld = {starWar?.homeworld}</p>
        <p>mass = {starWar?.mass}</p>
        <p>name = {starWar?.name}</p>
      </Fragment>
    );
  }, [starWar]);

  return <Container>{renderNotFound}</Container>;
};

export { BodyPageView };
