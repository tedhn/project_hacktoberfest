import React from "react";
import { cleanup, render } from "@testing-library/react";
import Appearance from "../../../Components/appearance/appearance";

afterEach(cleanup);
describe("Hero Page", () => {
  it("renders with the right value", () => {
    const utils = render(
      <Appearance
        appearance={{
          gender: "male",
          height: ["100", "200"],
          weight: ["40", "100"],
        }}
      />
    );

    const appearance = utils.getByTestId("test-appearance");
    const height = utils.getByTestId("test-height");
    const gender = utils.getByTestId("test-gender");
    const weight = utils.getByTestId("test-weight");

    expect(height).toHaveTextContent("100");
    expect(gender).toHaveTextContent("male");
    expect(weight).toHaveTextContent("40");
    expect(appearance).toBeTruthy();
  });
});
