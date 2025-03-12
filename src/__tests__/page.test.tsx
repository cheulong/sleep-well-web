import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "../app/page";

test("Page", () => {
  render(<Page />);
  const heading = screen.getByRole("main");

  expect(heading).toBeDefined();
});
