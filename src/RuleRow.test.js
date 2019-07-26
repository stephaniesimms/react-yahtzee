import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import RuleRow from "./RuleRow";


it("renders RuleRow without crashing", function () {
  shallow(<RuleRow />);
});

it("matches snapshot", function () {
  let wrapper = shallow(<RuleRow />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});