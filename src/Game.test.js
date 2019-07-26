import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import Game, { NUM_ROLLS } from "./Game";


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
    let wrapper = mount(<Game />);
    //simulate roll to get random dice, so state{dice: [random numbers insatead of undefined]}
    let rerollBtn = wrapper.find(".Game-reroll");
    rerollBtn.simulate("click");

    // find first dice and last dice to compare
    const firstDie = wrapper.find(".Die").first();
    const lastDie = wrapper.find(".Die").last();

    // test that state in Game component is changed after locking first die
    expect(wrapper.state().locked).toEqual([false, false, false, false, false]);
    firstDie.simulate("click");
    expect(wrapper.state().locked).toEqual([true, false, false, false, false]);

    //test that die class is changed
    expect(firstDie.html()).toContain("Die-locked")
    expect(lastDie.html()).not.toContain("Die-locked")

    //test that locked die does not change when dice are rerolled
    let preRoll = wrapper.state().dice;
    rerollBtn.simulate("click");
    let postRoll = wrapper.state().dice;
    expect(preRoll[0]).toEqual(postRoll[0]);
  });

  it("cannot unlock die with no rerolls left", function () {
    let wrapper = mount(<Game />);

    // use up all rerolls
    let rerollBtn = wrapper.find(".Game-reroll");
    for (let i = 0; i < NUM_ROLLS; i++) {
      rerollBtn.simulate("click");
    }

    //after no rerolls left, click any die and make sure it is still disabled
    //check if state is still {locked: [all true]}
    let firstDie = wrapper.find(".Die").first();
    firstDie.simulate("click");
    expect(wrapper.state().locked.every(d => d)).toEqual(true);
  });
});

describe("using score line", () => {
  it("can only use score lines once", function () {
    let wrapper = mount(<Game />);
  
    // mock a dice set
    wrapper.setState({dice: [1, 1, 2, 2, 4]});
  
    //use Ones score row
    let preClickOnesRow = wrapper.find("RuleRow").first();
    preClickOnesRow.simulate("click");

    //check that score is created when clicking on unused score line
    let postClickOnesRow = wrapper.find("RuleRow").first();
    expect(postClickOnesRow.props().score).toEqual(2);
  
    //mock a different dice set
    wrapper.setState({dice: [1, 1, 1, 1, 1]});
    //click it again
    postClickOnesRow.simulate("click");
    // expect that the score has not changed
    let finalOnesRow = wrapper.find("RuleRow").first();
    expect(finalOnesRow.props().score).toEqual(2);
  });
})
