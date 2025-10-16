import { Spinner } from "@/components/ui/Spinner";

export function InlineLoader({
  message,
  size = "sm",
}: {
  message?: string;
  size?: "sm" | "md";
}) {
  const sizeClasses = size === "sm" ? "h-4 w-4" : "h-6 w-6";

  return (
    <span className="inline-flex items-center gap-2 text-gray-600">
      <Spinner className={`${sizeClasses} text-gray-700`} />
      {message && <span>{message}</span>}
    </span>
  );
}