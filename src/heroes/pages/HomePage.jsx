import { CardDC } from "../components/cardDC";
import { CardMarvel } from "../components/cardMarvel";
import { GraficasHeroes } from "../components/graficas/graficasHeroes";

export const HomePage = () => {
  return (
    <div className="row row-cols-1 row-cols-md-2 row g-4 mt-3">
      <CardMarvel publisher="Marvel Comics" />
      <CardDC publisher="DC Comics" />
      <GraficasHeroes />
    </div>
  );
};
