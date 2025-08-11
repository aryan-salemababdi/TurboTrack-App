"use client";
import { NextPage } from "next";
import { Input } from "@/components/atom/Input/Input";
import  Select  from "@/components/atom/Select/Select";
import { Button } from "@/components/atom/Button/Button";


interface TestFormProps {
  url: string;
  requests: number;
  concurrency: number;
  method: "GET" | "POST";
  testType: "batch" | "sustained";
  setUrl: (v: string) => void;
  setRequests: (v: number) => void;
  setConcurrency: (v: number) => void;
  setMethod: (v: "GET" | "POST") => void;
  setTestType: (v: "batch" | "sustained") => void;
  handleRunTest: () => void;
  loading: boolean;
};

  const TestForm: NextPage<TestFormProps> = ({
  url,
  requests,
  concurrency,
  method,
  testType,
  setUrl,
  setRequests,
  setConcurrency,
  setMethod,
  setTestType,
  handleRunTest,
  loading,
}) => {
  return (
    <div className="bg-white border border-gray-200 shadow-lg rounded-2xl p-6 md:p-8">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-5">
          <Input
            label="Target URL"
            placeholder="https://example.com/api"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <Input
          label="Total Requests"
          type="number"
          min={1}
          value={requests}
          onChange={(e) => setRequests(Number(e.target.value))}
        />
        <Input
          label="Concurrency"
          type="number"
          min={1}
          value={concurrency}
          onChange={(e) => setConcurrency(Number(e.target.value))}
        />
        <Select
          label="Method"
          value={method}
          onChange={(e) => setMethod(e.target.value as "GET" | "POST")}
          options={[
            { value: "GET", label: "GET" },
            { value: "POST", label: "POST" },
          ]}
        />
        <Select
          label="Test Type"
          value={testType}
          onChange={(e) => setTestType(e.target.value as "batch" | "sustained")}
          options={[
            { value: "batch", label: "Batch" },
            { value: "sustained", label: "Sustained" },
          ]}
        />
        <div className="lg:col-span-5">
          <Button
            onClick={handleRunTest}
            disabled={loading}
            variant="solid"
            className="mt-8 w-full rounded-lg bg-[#A3E635] text-black font-bold py-4 text-lg shadow-md hover:bg-lime-400 transition"
          >
            {loading ? "Running Test..." : "Run Test"}
          </Button>
        </div>
      </div>
    </div>
  );
}


export default TestForm;