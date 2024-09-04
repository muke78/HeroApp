import { Bar } from "react-chartjs-2";
import { heroes } from "../../../ui/utils/dataHeroes";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { v } from "../../../styles/variables";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

export const GraficaHeroesPersonajes = () => {
  const heroCharacterCounts = heroes.map((hero) => ({
    superhero: hero.superhero,
    characterCount: hero.characters.split(",").length,
    publisher: hero.publisher,
  }));

  const data = {
    labels: heroCharacterCounts.map((hc) => hc.superhero),
    datasets: [
      {
        label: "Number of Characters",
        data: heroCharacterCounts.map((hc) => hc.characterCount),
        pointStyle: "rectRounded",
        backgroundColor: heroCharacterCounts.map((hc) =>
          hc.publisher === "Marvel Comics"
            ? v.backgroundGraphMarvel
            : v.backgroundGraphDC
        ),
        borderColor: heroCharacterCounts.map((hc) =>
          hc.publisher === "Marvel Comics" ? v.colorMarvel : v.colorDC
        ),
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Number of Heroes by Publisher",
      },
    },
  };

  return (
    <div className="col">
      <div className="card text-bg-light p-1">
        <Bar
          data={data}
          options={options}
          style={{ width: "1000px", height: "500px" }}
        />
      </div>
    </div>
  );
};
