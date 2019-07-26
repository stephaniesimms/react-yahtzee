import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import Dice from "./Dice";


it("renders dice without crashing", function () {
  let mockDice = [1,2,3,4,5];
  shallow(<Dice dice={mockDice} locked={false}/>);
});

it("matches snapshot", function () {
  let mockDice = [1,2,3,4,5];

  let wrapper = shallow(<Dice dice={mockDice} locked={false}/>);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});