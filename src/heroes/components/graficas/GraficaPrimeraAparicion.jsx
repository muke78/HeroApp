import React from "react";
import { Bar } from "react-chartjs-2";
import { heroes } from "../../../ui";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { getHeroByCount } from "../../helpers/getHeroByCount";
import { v } from "../../../styles/variables";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

export const GraficaPrimeraAparicion = ({ marvel, dc }) => {
  const uniquePublishers = [
    ...new Set(heroes.map((hero) => hero.publisher)),
  ].slice(0, 2);

  const marvelHeroesCount = getHeroByCount(marvel);
  const dcHeroesCount = getHeroByCount(dc);

  const data = {
    labels: uniquePublishers,
    datasets: [
      {
        label: "Marvel Comics",
        data: {
          "Marvel Comics": marvelHeroesCount,
        },
        backgroundColor: v.backgroundGraphMarvel,
        borderColor: v.colorMarvel,
        borderWidth: 2,
      },
      {
        label: "DC Comics",
        data: {
          "DC Comics": dcHeroesCount,
        },
        backgroundColor: v.backgroundGraphDC,
        borderColor: v.colorDC,

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
        text: "Number of Publisher by Heroes",
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
