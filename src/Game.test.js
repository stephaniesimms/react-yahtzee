import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import Game from "./Game";


it("renders without crashing", function () {
  shallow(<Game />);
});


it("matches snapshot", function () {
  let wrapper = shallow(<Game />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});

describe("die click", () => {
  it("toggles locked/unlocked in state when clicked", function () {
    let wrapper = mount(<Game/>);
    //simulate roll to get random dice, so state{dice: [random numbers insatead of undefined]}
    let rerollBtn = wrapper.find(".Game-reroll");
    rerollBtn.simulate("click");

    // find first dice and last dice to compare
    const firstDie = wrapper.find(".Die").first();
    const lastDie = wrapper.find(".Die").last();

    // test that state in Game component is changed after locking first die
    expect(wrapper.state().locked).toEqual([false,false,false,false,false]);
    firstDie.simulate("click");
    expect(wrapper.state().locked).toEqual([true,false,false,false,false]);

    //test that die class is changed
    expect(firstDie.html()).toContain("Die-locked")
    expect(lastDie.html()).not.toContain("Die-locked")

    //test that locked die does not change when dice are rerolled
    let preRoll = wrapper.state().dice;
    rerollBtn.simulate("click");
    let postRoll = wrapper.state().dice;
    expect(preRoll[0]).toEqual(postRoll[0]);

  })




})