import React from "react";
import { render } from "@testing-library/react";
import Dashboard from "./Dashboard";
import configuration from "../../configuration";

test("renders Dashboard with provided configuration", () => {
  const { getByText } = render(<Dashboard configuration={configuration} />);

  expect(getByText("General Pokemon information")).toBeInTheDocument();
  expect(getByText("Pokemon colours")).toBeInTheDocument();
  expect(getByText("Genderless count")).toBeInTheDocument();
  expect(getByText("Female count")).toBeInTheDocument();
  expect(getByText("Male count")).toBeInTheDocument();
});
