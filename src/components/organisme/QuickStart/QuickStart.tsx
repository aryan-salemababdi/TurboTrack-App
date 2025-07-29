"use client";
import { useState } from "react";
import { runLoadTestService } from "@/services/runLoadTestService";
import  TestResults  from "../TestResults/TestResults";
import TestForm from "../TestForm/TestForm";

export default function QuickStartPage() {
  const [url, setUrl] = useState("");
  const [requests, setRequests] = useState(100);
  const [concurrency, setConcurrency] = useState(10);
  const [method, setMethod] = useState<"GET" | "POST">("GET");
  const [testType, setTestType] = useState<"batch" | "sustained">("batch");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleRunTest = async () => {
    if (!url) return alert("Please enter a valid URL");
    setLoading(true);
    setResult(null);
    try {
      const data = await runLoadTestService(
        url,
        requests,
        concurrency,
        method,
        testType
      );
      setResult(data);
    } catch {
      alert("Error running test");
    }
    setLoading(false);
  };

  return (
    <section className="w-full py-20 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-6">
          🚀 Quick Load Test
        </h2>
        <TestForm
          url={url}
          requests={requests}
          concurrency={concurrency}
          method={method}
          testType={testType}
          setUrl={setUrl}
          setRequests={setRequests}
          setConcurrency={setConcurrency}
          setMethod={setMethod}
          setTestType={setTestType}
          handleRunTest={handleRunTest}
          loading={loading}
        />
        {!loading && result && <TestResults result={result} />}
      </div>
    </section>
  );
}
