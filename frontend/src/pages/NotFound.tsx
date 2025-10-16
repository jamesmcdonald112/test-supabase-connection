import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 text-gray-800 bg-gray-50">
      <h1 className="mb-4 text-3xl font-bold">404 - Page Not Found</h1>
      <p className="mb-4 text-gray-600">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="text-blue-600 underline transition hover:text-blue-800"
      >
        Go back home
      </Link>
    </main>
  );
}