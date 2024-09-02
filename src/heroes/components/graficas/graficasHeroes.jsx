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

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

export const GraficasHeroes = () => {
  
  const heroCharacterCounts = heroes.map((hero) => ({
    superhero: hero.superhero,
    characterCount: hero.characters.split(",").length,
  }));

  const data = {
    labels: heroCharacterCounts.map((hc) => hc.superhero),
    datasets: [
      {
        label: "Number of Characters",
        data: heroCharacterCounts.map((hc) => hc.characterCount),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Configuración de opciones de la gráfica
  const options = {
    responsive: true,
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
      <Bar data={data} options={options} />
    </div>
  );
};
