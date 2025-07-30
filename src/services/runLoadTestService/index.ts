

export async function runLoadTestService(
  url: string,
  requests: number,
  concurrency: number,
  method: "GET" | "POST",
  testType: "batch" | "sustained"
) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000"}/run-test`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        url,
        requests,
        concurrency,
        method,
        testType,
      }),
    }
  );

  if (!res.ok) {
    throw new Error(`Request failed with status ${res.status}`);
  }

  return res.json();
}