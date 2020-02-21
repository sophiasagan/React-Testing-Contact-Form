import React from "react";
import { render } from "@testing-library/react";
import App from "./App";


test("renders App without crashing", () => {
  render(<App />);
});

test('testing for text', () => {
  const { getByText } = render(<App />);

  const fNameInput = getByText(/first name/i);

  expect(fNameInput).toBeInTheDocument();
});