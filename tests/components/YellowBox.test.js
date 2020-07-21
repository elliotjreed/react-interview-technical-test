import React from "react";
import { shallow } from "enzyme";

import { YellowBox } from "../../src/components/StayAlert";

describe("YellowBox", () => {
  it("shows the yellow box poster with the provided text", () => {
    const component = shallow(<YellowBox lineOne="STAY ALERT" />);

    expect(component.contains("STAY ALERT")).toBe(true);
  });
});
