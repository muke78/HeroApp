import { heroes } from "../../ui/utils/dataHeroes";

export const getHeroById = (id) => {
  return heroes.find((hero) => hero.id === id);
};
