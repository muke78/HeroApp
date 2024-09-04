import { CardDC } from "../components/CardDC";
import { CardMarvel } from "../components/CardMarvel";
import {
  GraficaHeroesPersonajes,
  GraficaPrimeraAparicion,
  TablaHeroesMarvel,
} from "../../heroes/index";

export const HomePage = () => {
  return (
    <div className="row row-cols-1 row-cols-md-2 row g-4 mt-3">
      <CardMarvel publisher="Marvel Comics" />
      <CardDC publisher="DC Comics" />
      <GraficaHeroesPersonajes />
      <GraficaPrimeraAparicion marvel="Marvel Comics" dc="DC Comics" />
      <TablaHeroesMarvel publisher="Marvel Comics" />
    </div>
  );
};
