import React from "react";
import { cleanup, render } from "@testing-library/react";
import Panels from "../panels";
import { BrowserRouter } from "react-router-dom";

afterEach(cleanup);

describe("Panel component", () => {
  it("renders with the right value", () => {
    const utils = render(
      <BrowserRouter>
        <Panels
          info={{
            name: "test name",
            biography: {
              "full-name": "full test name",
              "place-of-birth": "test place",
              alignment: "test alignment",
            },

            image: "www.imgur.com",
            powerstats: { intelligence: "1", strength: "2", power: "3" },
          }}
        />
      </BrowserRouter>
    );

    const panel = utils.getByTestId("test-panel");

    const name = utils.getByTestId("test-name");
    const fullName = utils.getByTestId("test-fullName");
    const birthplace = utils.getByTestId("test-birthplace");
    const alignment = utils.getByTestId("test-alignment");
    const intelligence = utils.getByTestId("test-intelligence");
    const strength = utils.getByTestId("test-strength");
    const energy = utils.getByTestId("test-energy");

    expect(panel).toBeTruthy();
    expect(name).toHaveTextContent("test name");
    expect(fullName).toHaveTextContent("full test name");
    expect(birthplace).toHaveTextContent("Birthplace : test place");
    expect(alignment).toHaveTextContent("Alignment : test alignment");
    expect(intelligence).toHaveTextContent("1");
    expect(strength).toHaveTextContent("2");
    expect(energy).toHaveTextContent("3");
  });
});
