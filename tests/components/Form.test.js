import React from "react";
import { shallow } from "enzyme";

import { Form } from "../../src/components/Form";

describe("Form", () => {
  it("show the form field class and input class", () => {
    const component = shallow(<Form />);

    expect(component.exists(".field")).toBe(true);
    expect(component.exists(".input")).toBe(true);
  });
});
