import React from "react";
import { cleanup, render } from "@testing-library/react";
import Stats from "../stats";

afterEach(cleanup);

describe("Stats component", () => {
  it("renders with the right value", () => {
    const utils = render(
      <Stats
        stats={{
          intelligence: "1",
          strength: "2",
          power: "3",
          speed: "4",
          durability: "5",
          combat: "6",
        }}
      />
    );

    const stats = utils.getByTestId("test-stats");

    const intelligence = utils.getByTestId("test-intelligence");
    const strength = utils.getByTestId("test-strength");
    const energy = utils.getByTestId("test-power");
    const combat = utils.getByTestId("test-combat");
    const durability = utils.getByTestId("test-durability");
    const speed = utils.getByTestId("test-speed");

    expect(stats).toBeTruthy();
    expect(intelligence).toHaveTextContent("1");
    expect(strength).toHaveTextContent("2");
    expect(energy).toHaveTextContent("3");
    expect(speed).toHaveTextContent("4");
    expect(durability).toHaveTextContent("5");
    expect(combat).toHaveTextContent("6");
  });
});
