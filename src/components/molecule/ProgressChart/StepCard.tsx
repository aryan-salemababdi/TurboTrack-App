"use client";
import { NextPage } from "next";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ProgressChart: NextPage<any> = ({ progressHistory }) => {
  const chartData = {
    labels: progressHistory.map((p: any) => p.requestsMade),
    datasets: [
      {
        label: "Success",
        data: progressHistory.map((p: any) => p.success),
        borderColor: "rgb(34, 197, 94)",
        backgroundColor: "rgba(34, 197, 94, 0.5)",
        tension: 0.1,
      },
      {
        label: "Failed",
        data: progressHistory.map((p: any) => p.failed),
        borderColor: "rgb(239, 68, 68)",
        backgroundColor: "rgba(239, 68, 68, 0.5)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Live Test Progress",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Concurrency",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Requests",
        },
      },
    },
  };

  console.log(progressHistory)

  return (
    <div className="mt-8 p-4 bg-white rounded-lg shadow-md">
      <Line options={options} data={chartData} />
    </div>
  );
}


export default ProgressChart;