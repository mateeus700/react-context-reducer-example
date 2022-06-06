import { IStarWar } from "../../../../../domains/star-war.domain";
import { IStarWarEntity } from "../star-wars.api";

export const starWarsEntityToDomainMapper = (
  starWarEntity: IStarWarEntity
): IStarWar => {
  return {
    gender: starWarEntity.gender,
    hairColor: starWarEntity.hair_color,
    height: starWarEntity.height,
    homeworld: starWarEntity.homeworld,
    mass: starWarEntity.mass,
    name: starWarEntity.name,
  };
};
