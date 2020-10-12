import React from "react";
import { cleanup, render } from "@testing-library/react";
import Biography from "../biography";

afterEach(cleanup);

describe("Biography Page", () => {
  it("renders with the right value", () => {
    const utils = render(
      <Biography
        biography={{
          "full-name": "Full Test Name",
          aliases: ["1", "2", "3"],
          "place-of-birth": "yangon",
          publisher: "yangon Times",
        }}
        name="test name"
        image="www.imgur.com"
      />
    );
    const biography = utils.getByTestId("test-biography");
    const name = utils.getByTestId("test-name");
    const fullname = utils.getByTestId("test-fname");
    const publisher = utils.getByTestId("test-publisher");
    // const alias = utils.getByTestId("test-alias");
    const placeOfBirth = utils.getByTestId("test-placeOfBirth");

    expect(biography).toBeTruthy();
    expect(name).toHaveTextContent("test name");
    expect(fullname).toHaveTextContent("Full Test Name");
    expect(placeOfBirth).toHaveTextContent("yangon");
    expect(publisher).toHaveTextContent("yangon Times");
    // expect(alias).tohave();
  });
});
