import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import InputBox from "../input";
import { Provider } from "react-redux";
import configureAppStore from "../../../store/configureStore";
import { BrowserRouter } from "react-router-dom";

describe("Input Box", () => {
  it("render with the right value", async () => {
    const utils = render(
      <Provider store={configureAppStore()}>
        <BrowserRouter>
          <InputBox />
        </BrowserRouter>
      </Provider>
    );
    const input = utils.getByTestId("input-test");

    expect(input).toBeTruthy();
  });

  it("changes the value according to user events", async () => {
    const utils = render(
      <Provider store={configureAppStore()}>
        <BrowserRouter>
          <InputBox />
        </BrowserRouter>
      </Provider>
    );
    const input = utils.getByTestId("input-test");

    await userEvent.type(input, "Batman");
    expect(input).toHaveValue("Batman");
  });
});
