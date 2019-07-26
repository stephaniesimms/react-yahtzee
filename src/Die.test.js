import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import Die from "./Die";


it("renders die without crashing", function () {
  shallow(<Die />);
});

it("matches snapshot for locked die", function () {
  let wrapper = shallow(<Die />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});