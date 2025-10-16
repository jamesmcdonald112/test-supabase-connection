import { Spinner } from "@/components/ui/Spinner";

export function PageLoader({
  message = "Loading page...",
}: {
  message?: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-3 text-gray-600">
      <Spinner className="w-8 h-8 text-gray-800" />
      <p>{message}</p>
    </div>
  );
}