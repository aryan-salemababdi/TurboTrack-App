"use client";
import { useState, useEffect } from "react";
import io from "socket.io-client";
import TestResults from "../TestResults/TestResults";
import TestForm from "../TestForm/TestForm";
import { startLoadTest } from "@/services/runLoadTestService";
import ProgressChart from "@/components/molecule/ProgressChart/StepCard";

interface ProgressData {
  requestsMade: number;
  success: number;
  failed: number;
  totalRequests: number;
}

interface FinalResultData {
  totalRequests: number;
  success: number;
  failed: number;
  avgLatency: number;
  RPS: number;
  durationMs: number;
}

const QuickStartPage = () => {
  const [url, setUrl] = useState("");
  const [requests, setRequests] = useState(100);
  const [concurrency, setConcurrency] = useState(10);
  const [method, setMethod] = useState<"GET" | "POST">("GET");
  const [testType, setTestType] = useState<"batch" | "sustained">("batch");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [jobId, setJobId] = useState(null);
  const [progress, setProgress] = useState<ProgressData | null>(null);
  const [progressHistory, setProgressHistory] = useState<ProgressData[]>([]);

  useEffect(() => {
    if (!jobId) return;

    const socket = io(
      process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000"
    , {
      transports: ["websocket"]
    });

    socket.on("connect", () => {
      console.log("WebSocket Connected!");
      console.log("Joining room:", jobId);
      socket.emit("joinRoom", jobId);
    });

    socket.on("progress", (data: ProgressData) => {
      setProgress(data);
      setProgressHistory((prevHistory) => [...prevHistory, data]);
      console.log(progressHistory)
    });

    socket.on("finalResult", (data: FinalResultData) => {
      setResult(data);
      setLoading(false);
      setJobId(null);
      socket.disconnect();
    });

    return () => {
      socket.disconnect();
    };
  }, [jobId]);

  const handleRunTest = async () => {
    setProgressHistory([]);
    if (!url) return alert("Please enter a valid URL");
    setLoading(true);
    setResult(null);
    setProgress(null);

    try {
      const testData = { url, requests, concurrency, method, testType };
      const response = await startLoadTest(testData);
      setJobId(response.jobId);
    } catch (error) {
      alert("Error starting the test. Please check the console.");
      setLoading(false);
    }
  };

  return (
    <section className="w-full py-20 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            🚀 Quick Load Test
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Instantly measure your API's performance and reliability.
          </p>
        </div>

        <TestForm
          url={url}
          setUrl={setUrl}
          requests={requests}
          setRequests={setRequests}
          concurrency={concurrency}
          setConcurrency={setConcurrency}
          method={method}
          setMethod={setMethod}
          testType={testType}
          setTestType={setTestType}
          handleRunTest={handleRunTest}
          loading={loading}
        />

        {progressHistory.length > 0 && (
          <ProgressChart progressHistory={progressHistory} />
        )}

        {!loading && result && <TestResults result={result} />}
      </div>
    </section>
  );
};

export default QuickStartPage;
