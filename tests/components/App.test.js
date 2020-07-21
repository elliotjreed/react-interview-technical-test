import React from "react";
import { shallow } from "enzyme";

import { App } from "../../src/components/App";

describe("App", () => {
  it("shows the title", () => {
    const component = shallow(<App />);

    expect(
      component.contains("Top Secret Government Slogan Validator")
    ).toBe(true);
  });
});
