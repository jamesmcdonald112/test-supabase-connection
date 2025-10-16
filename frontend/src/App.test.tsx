import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

describe("App component", () => {
  it("renders navigation links", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    // Check that the main navigation links exist
    expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /about/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /login/i })).toBeInTheDocument();
  });
});