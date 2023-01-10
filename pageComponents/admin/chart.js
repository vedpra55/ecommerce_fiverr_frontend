import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "Octuber",
  "November",
  "December",
];

export function ChartMy({ janOrders }) {
  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Sales",
        options: {
          responsive: true,
        },
        data: [janOrders, janOrders],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(37, 187, 79, 0.15) ",
      },
    ],
  };
  return <Line options={options} data={data} />;
}
