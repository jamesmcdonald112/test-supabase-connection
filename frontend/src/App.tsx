import { Routes, Route, Link } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Toaster } from "sonner";
import { PageLoader } from "@/components/ui/PageLoader";
import Login from "./pages/Login";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const NotFound = lazy(() => import("./pages/NotFound"));

export default function App() {
  return (
    <>
      <Toaster position="top-center" richColors />
      <nav className="flex justify-center p-4 space-x-6 bg-gray-200">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
      </nav>

      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}