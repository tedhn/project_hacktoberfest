import React from "react";
import { cleanup, render } from "@testing-library/react";
import Connections from "../connections";

afterEach(cleanup);

describe("Connections Component", () => {
  it("renders with the right value", () => {
    const utils = render(
      <Connections
        connections={{ "group-affiliation": "test Name", relatives: "-" }}
      />
    );
    const connections = utils.getByTestId("test-connections");
    const groupAffiliations = utils.getByTestId("test-groupaffiliations");
    const relatives = utils.getByTestId("test-relatives");

    expect(connections).toBeTruthy();
    expect(groupAffiliations).toHaveTextContent("test Name");
    expect(relatives).toHaveTextContent("-");
  });
});
