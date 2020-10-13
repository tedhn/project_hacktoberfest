import React from "react";
import { cleanup, render } from "@testing-library/react";
import Home from "../home";
import { BrowserRouter } from "react-router-dom";

afterEach(cleanup);

describe("Connections Component", () => {
  it("renders with the right value", () => {
    const utils = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const home = utils.getByTestId("test-home");
    const link = utils.getByTestId("test-link");

    expect(home).toBeTruthy();
    expect(link).toHaveTextContent("Start Searching!");
  });
});
