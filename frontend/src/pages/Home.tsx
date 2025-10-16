import { Button } from "@/components/ui/Button";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  // React Query handles loading, error, and data states automatically
  const { data, error, isLoading } = useQuery({
    queryKey: ["ping"],
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/ping`);
      if (!res.ok) throw new Error("Failed to fetch ping");

      // 🧩 Expect JSON, not text
      const json = await res.json();
      return json.message; // → "pong"
    },
  });

  // ✅ Detect if backend didn’t respond properly (returns HTML instead of text)
  if (data?.startsWith("<!")) {
    console.warn(
      "⚠️ Received HTML instead of JSON/text from backend. Check VITE_API_BASE_URL or the dev proxy."
    );
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 text-gray-800 bg-gray-50">
      <h1 className="mb-4 text-3xl font-bold">React + Spring Boot Template</h1>

      {/* Display states */}
      {isLoading && <p>Connecting to backend...</p>}
      {error && <p className="text-red-500">Error: {(error as Error).message}</p>}
      {data && !data.startsWith("<!") && <p>{data}</p>}

      <Button>Click Here</Button>
    </main>
  );
}