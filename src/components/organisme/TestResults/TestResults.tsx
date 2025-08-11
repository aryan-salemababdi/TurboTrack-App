"use client";
import StatCard from "@/components/molecule/StatCard/StatCard";
import { Doughnut, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import AnalysisCard from "@/components/molecule/AnalysisCard/AnalysisCard";
import { NextPage } from "next";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const TestResults: NextPage<any> = ({ result }) => {
  const successFailChartData = {
    labels: ["Successful", "Failed"],
    datasets: [
      {
        data: [result?.success || 0, result?.failed || 0],
        backgroundColor: ["#4ade80", "#f87171"],
        borderColor: ["#ffffff"],
        borderWidth: 2,
      },
    ],
  };

  const performanceChartData = {
    labels: ["Performance Metrics"],
    datasets: [
      {
        label: "Avg Latency (ms)",
        data: [result?.avgLatency || 0],
        backgroundColor: "#60a5fa",
        yAxisID: "y",
      },
      {
        label: "RPS",
        data: [result?.RPS || 0],
        backgroundColor: "#facc15",
        yAxisID: "y1",
      },
    ],
  };

  const barOptions = {
    responsive: true,
    scales: {
      y: { position: "left" as const },
      y1: { position: "right" as const, grid: { drawOnChartArea: false } },
    },
  };

  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
        <StatCard icon="✅" title="Successful" value={result.success} />
        <StatCard icon="❌" title="Failed" value={result.failed} />
        <StatCard
          icon="⏱️"
          title="Avg Latency"
          value={`${
            result.avgLatency !== undefined
              ? result.avgLatency.toFixed(2)
              : "N/A"
          } ms`}
        />
        <StatCard
          icon="⚡"
          title="RPS"
          value={typeof result.RPS === "number" ? result.RPS.toFixed(2) : "N/A"}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-md">
          <Doughnut data={successFailChartData} />
        </div>
        <div className="lg:col-span-3 bg-white p-6 rounded-xl shadow-md">
          <Bar data={performanceChartData} options={barOptions} />
        </div>
      </div>

      {result.analysis && <AnalysisCard analysisText={result.analysis} />}

      <div className="mt-8 bg-gray-900 text-green-400 font-mono rounded-xl p-6 shadow-lg overflow-auto">
        <h3 className="text-lg font-bold mb-4 text-white">Raw JSON Response</h3>
        <pre className="whitespace-pre-wrap text-sm">
          {JSON.stringify(
            (() => {
              const { analysis, ...rest } = result || {};
              return rest;
            })(),
            null,
            2
          )}
        </pre>
      </div>
    </div>
  );
};

export default TestResults;
