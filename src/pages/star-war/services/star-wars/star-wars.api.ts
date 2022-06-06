import axios from "axios";
import { starWarsEntityToDomainMapper } from "./converters/star-wars-entity-to-domain.mapper";

export interface IStarWarEntity {
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
}

export const starWarsAPI = async () => {
  const { data } = await axios.get<IStarWarEntity>(
    "https://swapi.dev/api/people/1"
  );

  return starWarsEntityToDomainMapper(data);
};
