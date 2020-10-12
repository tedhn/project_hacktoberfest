import React from "react";
import { cleanup, render } from "@testing-library/react";
import Work from "../work";

afterEach(cleanup);

describe("Connections Component", () => {
  it("renders with the right value", () => {
    const utils = render(
      <Work work={{ occupation: "test occupation", base: "test base" }} />
    );
    const work = utils.getByTestId("test-work");
    const occupation = utils.getByTestId("test-occupation");
    const base = utils.getByTestId("test-base");

    expect(work).toBeTruthy();
    expect(occupation).toHaveTextContent("Occupation : test occupation");
    expect(base).toHaveTextContent("Base : test base");
  });
});
